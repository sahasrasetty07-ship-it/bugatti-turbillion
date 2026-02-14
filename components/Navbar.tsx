import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center glass-panel border-b border-white/10">
            <div className="text-2xl font-bold tracking-[0.2em] font-orbitron">
                BUGATTI
            </div>
            <div className="hidden md:flex space-x-8 text-sm tracking-widest font-rajdhani uppercase">
                <Link href="#" className="hover:text-bugatti-gold transition-colors">Models</Link>
                <Link href="#" className="hover:text-bugatti-gold transition-colors">Brand</Link>
                <Link href="#" className="hover:text-bugatti-gold transition-colors">Ownership</Link>
                <Link href="#" className="hover:text-bugatti-gold transition-colors">Experience</Link>
            </div>
            <button className="text-sm tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
                MENU
            </button>
        </nav>
    );
}
