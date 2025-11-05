import { useState } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000, // animatsiya davomiyligi (ms)
            once: true, // faqat bir marta animatsiya bo‘lsin
            easing: "ease-in-out", // harakat silliqligi
            offset: 100, // element ko‘rinadigan joygacha masofa (px)
        });
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav data-aos="fade-down">
            <div className="container">
                {/* LEFT LINKS */}
                <div className="nav_links" data-aos="fade-right" data-aos-delay="100">
                    <ul className={menuOpen ? "active" : ""}>
                        <a href="#AboutUs">
                            <li>{t(`about`)}</li>
                        </a>
                        <a href="#Products">
                            <li>{t(`products`)}</li>
                        </a>
                        <a href="#ContactForm">
                            <li>{t(`contact`)}</li>
                        </a>

                        {/* MOBILE LANGUAGE SELECT (hidden on desktop) */}
                        <div className="mobile_lang" data-aos="fade-up" data-aos-delay="200">
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
                <div className="logo_box" data-aos="zoom-in" data-aos-delay="200">
                    <a href="#"><h1>DJURAYEV O'LMAS</h1></a>
                </div>

                {/* RIGHT LANGUAGE SELECT */}
                <div className="lang_provider" data-aos="fade-left" data-aos-delay="300">
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
                    data-aos="fade-left"
                    data-aos-delay="400"
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
