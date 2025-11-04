import { useState } from "react";
import "../../assets/Navbar.css";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t , i18n } = useTranslation();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="container">
                {/* LEFT LINKS */}
                <div className="nav_links">
                    <ul className={menuOpen ? "active" : ""}>
                        <a href="#AboutUs"><li>{t(`about`)}</li></a>
                        <a href="#Products "><li>{t(`products`)}</li></a>
                        <a href="#ContactForm"><li>{t(`contact`)}</li></a>

                        {/* MOBILE LANGUAGE SELECT (hidden on desktop) */}
                        <div className="mobile_lang">
                            <select
                                id="select"
                                onChange={(e) => i18n.changeLanguage(e.target.value)}
                                defaultValue="uz"
                            >
                                <option value="uz">🇺🇿 O'zbek</option>
                                <option value="ru">🇷🇺 Русский</option>
                                <option value="en">🇬🇧 English</option>
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
                    <select
                        id="select"
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        defaultValue="uz"
                    >
                        <option value="uz">🇺🇿 O'zbek</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
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
