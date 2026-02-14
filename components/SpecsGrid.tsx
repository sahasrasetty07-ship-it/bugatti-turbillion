export default function SpecsGrid() {
    const specs = [
        { label: "Engine Layout", value: "W16" },
        { label: "Displacement", value: "7993 cm³" },
        { label: "Power Output", value: "1103 kW / 1500 HP" },
        { label: "Max Torque", value: "1600 Nm" },
        { label: "Transmission", value: "7-Speed DSG" },
        { label: "Top Speed", value: "420 km/h" },
        { label: "Acc. 0-100 km/h", value: "2.4 sec" },
        { label: "Acc. 0-200 km/h", value: "6.1 sec" },
        { label: "Acc. 0-300 km/h", value: "13.1 sec" },
    ];

    return (
        <section className="bg-bugatti-dark py-24 px-8 md:px-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-widest uppercase">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {specs.map((spec, index) => (
                    <div key={index} className="bg-bugatti-dark p-8 hover:bg-white/5 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 text-xs text-white/20 font-mono">0{index + 1}</div>
                        <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">{spec.label}</h3>
                        <p className="text-2xl font-medium text-white group-hover:text-bugatti-gold transition-colors font-rajdhani">{spec.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
