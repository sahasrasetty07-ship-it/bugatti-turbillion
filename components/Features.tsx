export default function Features() {
    return (
        <section className="py-24 px-8 md:px-24 bg-gradient-to-b from-bugatti-dark to-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-tight">
                            Form Follows <span className="text-bugatti-gold">Performance</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-6 font-rajdhani leading-relaxed">
                            The tourbillon is not just a watch; it is a masterpiece of art, form and technique, that pushes boundaries beyond imagination. Every element of the vehicle is designed to pay tribute to its history and to the most innovative technology.
                        </p>
                        <button className="text-bugatti-gold border-b border-bugatti-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest">
                            Read Design Story
                        </button>
                    </div>
                    <div className="relative h-[400px] border border-white/10 p-4">
                        <div className="absolute inset-0 bg-white/5 skew-y-3 transform origin-bottom-left"></div>
                        {/* Placeholder for a feature image if we had one, for now utilizing CSS art/layout */}
                        <div className="w-full h-full bg-slate-900/50 flex items-center justify-center border border-white/5">
                            <span className="text-white/20 text-6xl font-orbitron">C-LINE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
