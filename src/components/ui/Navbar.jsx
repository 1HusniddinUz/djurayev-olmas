import { useState } from "react";
import "../../assets/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="container">
                {/* LEFT LINKS */}
                <div className="nav_links">
                    <ul className={menuOpen ? "active" : ""}>
                        <a href="#AboutUs"><li>About Us</li></a>
                        <a href="#Products "><li>Products</li></a>
                        <a href="#"><li>Contact</li></a>

                        {/* MOBILE LANGUAGE SELECT (hidden on desktop) */}
                        <div className="mobile_lang">
                            <select>
                                <option value="uz">O'zbek</option>
                                <option value="en">English</option>
                                <option value="ru">Русский</option>
                            </select>
                        </div>
                    </ul>
                </div>

                {/* CENTER LOGO */}
                <div className="logo_box">
                    <h1>DJURAYEV O'LMAS</h1>
                </div>

                {/* RIGHT LANGUAGE SELECT (hidden on mobile) */}
                <div className="lang_provider">
                    <select>
                        <option value="uz">O'zbek</option>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>

                {/* BURGER ICON */}
                <div
                    className={`burger ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
