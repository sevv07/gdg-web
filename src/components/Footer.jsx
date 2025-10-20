import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import gdgLogo from "../assets/gdgLogo.png";
import footerBg from "../assets/footerBg.png";
export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "250px",
            }}
            className="bg-yellow-500/80 bg-no-repeat text-black-300 py-32 mt-19">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Sol kısım - Logo & kısa açıklama */}
                <div>
                    <img
                        src={gdgLogo}
                        alt="GDG Antalya Logo"
                        className="w-40 mb-3" // boyutunu burada ayarlayabilirsin
                    />
                    <h2 className="text-2xl font-bold text-white">DevFest Antalya'25</h2>
                    <p className="mt-3 text-sm text-black-400">
                        The meeting point for ideas that shape the future.
                    </p>
                </div>

                {/* Orta kısım - Menü */}
                <div>
                    <h3 className="text-lg font-semibold text-gray">Quick Access</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/speakers" className="hover:text-white">Speakers</a></li>
                        <li><a href="/sponsors" className="hover:text-white">Sponsorship</a></li>
                        <li><a href="/calendar" className="hover:text-white">Schedule</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Sağ kısım - Sosyal medya */}
                <div>
                    <h3 className="text-lg font-semibold text-black">Follow us</h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="https://www.facebook.com/GDGAntalya/" className="hover:text-white"><Facebook size={20} /></a>
                        <a href="https://x.com/GDGAntalya" className="hover:text-white"><Twitter size={20} /></a>
                        <a href="https://www.instagram.com/gdgantalya/" className="hover:text-white"><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/company/gdg-antalya/posts/?feedView=all" className="hover:text-white"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Alt kısım - telif hakkı */}
            <div className="mt-8 pt-4 text-center text-sm text-black">

                Copyright © {new Date().getFullYear()} 2025 DevFest Antalya'25
            </div>
        </footer>
    );
}