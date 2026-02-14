"use client";

import { useTransform, MotionValue, motion } from "framer-motion";

export default function Experience({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Hero: Fade out early
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const heroPointerEvents = useTransform(scrollYProgress, (v) => v < 0.3 ? "auto" : "none");

    // Design: Middle section
    const designOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const designY = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [50, 0, 0, -50]);

    // Powertrain: End section
    const powertrainOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.98], [0, 1, 1]);
    const powertrainX = useTransform(scrollYProgress, [0.65, 0.8], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {/* Hero Section */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroPointerEvents }}
                className="absolute top-[20%] left-[5%] md:left-[10%] max-w-2xl px-4"
            >
                <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-widest text-glow leading-tight">
                    Bugatti <br /> Tourbillon
                </h1>
                <p className="text-2xl md:text-3xl mt-4 text-bugatti-gold font-light tracking-wider">
                    €3,000,000
                </p>
                <p className="text-lg md:text-xl mt-2 mb-8 text-gray-300 font-rajdhani tracking-wide">
                    “The Pinnacle of Hypercar Engineering”
                </p>
                <button className="px-8 py-3 border border-bugatti-gold text-bugatti-gold hover:bg-bugatti-gold hover:text-black transition-all duration-300 bg-black/50 backdrop-blur-sm pointer-events-auto uppercase tracking-widest font-semibold">
                    Inquire Now
                </button>
            </motion.div>

            {/* Design Section */}
            <motion.div
                style={{ opacity: designOpacity, y: designY }}
                className="absolute top-[50%] -translate-y-[50%] left-[5%] md:left-[10%] max-w-xl p-8 glass-panel border-l-4 border-bugatti-gold"
            >
                <h2 className="text-4xl font-bold mb-4 uppercase text-bugatti-gold">Design</h2>
                <p className="text-lg leading-relaxed text-gray-200 font-rajdhani">
                    Sculpted carbon-fiber bodywork, signature C-line silhouette, active aerodynamics and handcrafted luxury interior. Every surface engineered for speed and elegance.
                </p>
            </motion.div>

            {/* Powertrain Section */}
            <motion.div
                style={{ opacity: powertrainOpacity, x: powertrainX }}
                className="absolute top-[40%] right-[5%] md:right-[10%] text-right glass-panel p-8 min-w-[300px]"
            >
                <h2 className="text-4xl font-bold mb-6 uppercase text-bugatti-gold border-b border-gray-700 pb-2 inline-block">Powertrain</h2>
                <div className="space-y-6 font-rajdhani">
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Engine</p>
                        <p className="text-3xl font-medium">8.0L Quad-Turbo W16</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Power</p>
                        <p className="text-4xl font-bold text-bugatti-gold text-glow">1500 HP</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">Top Speed</p>
                        <p className="text-3xl font-medium">420 km/h</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest">0-100 km/h</p>
                        <p className="text-4xl font-bold text-bugatti-gold text-glow">2.4s</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
