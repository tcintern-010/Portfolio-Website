import { useState, useEffect } from "react";

function Navbar({ links, darkMode, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="bg-bg-main/90 backdrop-blur-lg border-b border-white/10 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <a href="#home" className="group">
                        <span className="text-xl sm:text-2xl font-semibold transition group-hover:text-[#7cf03d]">
                            Muhammad Ibrahim Raza
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="relative font-medium transition hover:text-[#7cf03d]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#7cf03d] after:transition-all
                  hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">

                        {/* Theme Button */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                        >
                            <i className={`text-xl ${darkMode ? "bx bx-sun" : "bx bx-moon"}`} />
                        </button>

                        {/* Hamburger */}
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                            aria-expanded={isOpen}
                            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-[#171b24] hover:bg-[#222938] transition"
                        >
                            <i
                                className={`text-2xl text-[#7cf03d] ${isOpen ? "bx bx-x" : "bx bx-menu"
                                    }`}
                            />
                        </button>

                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute left-4 right-4 top-[90px]
          rounded-2xl border border-white/10
          bg-[#10141d]/95 backdrop-blur-xl shadow-2xl
          transition-all duration-300
          ${isOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-4 invisible"
                        }`}
                >
                    <ul className="flex flex-col py-3">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block px-6 py-4 text-center font-medium transition hover:text-[#7cf03d] hover:bg-white/5"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;