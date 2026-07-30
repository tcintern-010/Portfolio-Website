import { useState } from 'react';

function Navbar({ links, darkMode, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <nav className="fixed left-0 top-0 w-full z-[100] bg-bg-main
            flex justify-between items-center flex-nowrap gap-5
            px-[6%] py-[25px]
            max-lg:px-[5%] max-lg:py-5
            max-[576px]:px-[5%] max-[576px]:py-[15px]">

                <a href="#home" className="flex items-center gap-2 font-medium text-[26px] whitespace-nowrap shrink-0 group">
                    <i className='bx bx-home-alt transition-transform duration-300 group-hover:scale-[1.15] group-hover:text-[#7cf03d]'></i>
                    Muhammad Ibrahim Raza
                </a>

                <div className="flex items-center gap-4 shrink-0">
                    <ul className={`flex items-center gap-6 shrink-0
               max-[576px]:flex-col max-[576px]:absolute max-[576px]:top-full max-[576px]:left-0
               max-[576px]:w-full max-[576px]:bg-bg-main max-[576px]:py-5
               max-[576px]:transition-all max-[576px]:duration-300
               ${isOpen ? 'max-[576px]:flex' : 'max-[576px]:hidden'}`}>

                        {links.map((link) => (
                            <li key={link.label} className="list-none">
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="text-[17px] font-medium whitespace-nowrap transition-all duration-300
                    hover:text-[#7cf03d] hover:underline
                    hover:[text-shadow:0_0_0.4px_currentColor,0_0_0.4px_currentColor]"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button onClick={toggleTheme} className="text-[22px] text-white transition-colors duration-300 hover:text-[#7cf03d] shrink-0" aria-label="Toggle theme">
                        <i className={darkMode ? 'bx bx-sun' : 'bx bx-moon'}></i>
                    </button>

                    <button
                        onClick={toggleMenu}
                        className="hidden max-[576px]:block text-[26px] text-[#7cf03d] z-[110] shrink-0"
                        aria-label="Toggle menu"
                    >
                        <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;