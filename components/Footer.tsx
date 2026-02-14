export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                <div className="text-2xl font-bold tracking-[0.2em] mb-4 md:mb-0">BUGATTI</div>
                <div className="text-gray-500 text-sm font-rajdhani">
                    © {new Date().getFullYear()} BUGATTI AUTOMOBILES S.A.S.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
                </div>
            </div>
        </footer>
    );
}
