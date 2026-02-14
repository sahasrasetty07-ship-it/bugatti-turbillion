"use client";

import { useMotionValueEvent, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 181;

export default function ScrollCanvas({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    img.src = `/images/frames_final/${i}.jpg`;
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.warn(`Failed to load image ${i}`);
                        resolve(img); // Resolve anyway to avoid blocking
                    };
                });
                promises.push(promise);
            }

            try {
                const loadedImages = await Promise.all(promises);
                setImages(loadedImages);
                setIsLoaded(true);
            } catch (e) {
                console.error("Error loading images", e);
            }
        };

        loadImages();
    }, []);

    const renderFrame = (progress: number) => {
        if (!canvasRef.current || images.length === 0) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(progress * (FRAME_COUNT - 1)))
        );

        const img = images[frameIndex];
        if (!img || !img.complete) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Clear
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Contain logic (preserve aspect ratio)
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider -> fit height
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imgRatio;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Canvas is taller -> fit width
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Listen to scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (isLoaded) {
            requestAnimationFrame(() => renderFrame(latest));
        }
    });

    // Handle Resize && Initial Render
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // Set canvas logic size to match physical pixels for sharpness
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                // Re-render current frame
                if (isLoaded) {
                    renderFrame(scrollYProgress.get());
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        // Render initial frame once loaded
        if (isLoaded) renderFrame(scrollYProgress.get());

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, scrollYProgress]);

    return (
        <canvas
            ref={canvasRef}
            className="block w-full h-full"
            style={{ width: '100%', height: '100%' }}
        />
    );
}
