import { useEffect, useRef, useState } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined"
            ? window.matchMedia("(min-width: 1025px)").matches
            : true
    );

    const dropdownRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-in-out", offset: 100 });
    }, []);

    // Ekran o'lchami
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1025px)");
        const handleChange = e => setIsDesktop(e.matches);
        mq.addEventListener("change", handleChange);
        return () => mq.removeEventListener("change", handleChange);
    }, []);

    // Body scroll lock
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = menuOpen ? "hidden" : original || "";
        return () => { document.body.style.overflow = original || ""; };
    }, [menuOpen]);

    // Tashqi bosish / ESC
    useEffect(() => {
        const onClickOutside = e => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
            if (navRef.current && !navRef.current.contains(e.target) && menuOpen) {
                setMenuOpen(false);
            }
        };
        const onEsc = e => {
            if (e.key === "Escape") {
                setMenuOpen(false);
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", onClickOutside);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("click", onClickOutside);
            document.removeEventListener("keydown", onEsc);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
        setDropdownOpen(false);
    };

    // Desktopda dropdownni JS bilan ochmaymiz (faqat CSS hover),
    // mobil/tabletda esa state bilan boshqaramiz.
    const openDropdown = () => { if (!isDesktop) setDropdownOpen(true); };
    const closeDropdown = () => { if (!isDesktop) setDropdownOpen(false); };
    const toggleDropdown = () => { if (!isDesktop) setDropdownOpen(p => !p); };

    const changeLang = lng => {
        if (lng && lng !== i18n.language) i18n.changeLanguage(lng);
    };

    return (
        <nav data-aos="fade-down" ref={navRef}>
            <div className="container">
                {/* LEFT LINKS */}
                <div className="nav_links" data-aos="fade-right" data-aos-delay="100">
                    <ul
                        id="primary-menu"
                        className={menuOpen ? "active" : ""}
                        role="menubar"
                        aria-label="Primary"
                    >
                        <li role="none">
                            <a role="menuitem" href="#AboutUs">{t("about")}</a>
                        </li>
                        <li role="none">
                            <a role="menuitem" href="#Products">{t("products")}</a>
                        </li>

                        {/* MARKETPLACES DROPDOWN */}
                        <li
                            role="none"
                            className="dropdown"
                            ref={dropdownRef}
                            onMouseEnter={openDropdown}
                            onMouseLeave={closeDropdown}
                        >
                            <button
                                type="button"
                                className="dropdown-title"
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                                aria-controls="marketplaces-menu"
                                onClick={toggleDropdown}
                            >
                                Marketplaces <span aria-hidden="true">▾</span>
                            </button>

                            <ul
                                id="marketplaces-menu"
                                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                                role="menu"
                            >
                                <li role="none">
                                    <a role="menuitem" href="https://uzum.uz/uz/product/rubob-ozbek-xalqining-2082373" target="_blank" rel="noopener noreferrer">Uzum Market</a>
                                </li>
                                <li role="none">
                                    <a role="menuitem" href="https://www.wildberries.ru/catalog/597276687/detail.aspx?targetUrl=GP" target="_blank" rel="noopener noreferrer">Wildberries</a>
                                </li>
                                <li role="none">
                                    <a role="menuitem" href="https://www.ozon.ru/product/rubab-natsionalnyy-uzbekskiy-instrument-eto-strunnyy-shchipkovyy-instrument-3063993891/?oos_search=false" target="_blank" rel="noopener noreferrer">Ozon</a>
                                </li>
                                <li role="none">
                                    <a role="menuitem" href="https://market.yandex.uz/card/rubab-natsionalnyy-uzbekskiy-instrument-eto-strunnyy-shchipkovyy-instrument/4743399934?businessId=216456918&showOriginalKmEmptyOffer=1&ogV=-6" target="_blank" rel="noopener noreferrer">Yandex Market</a>
                                </li>
                            </ul>
                        </li>

                        <li role="none">
                            <a role="menuitem" href="#ContactForm">{t("contact")}</a>
                        </li>

                        {/* MOBILE LANGUAGE SELECT */}
                        <li className="mobile_lang" role="none">
                            <label className="sr-only" htmlFor="mobile-lang-select">Language</label>
                            <select
                                id="mobile-lang-select"
                                onChange={e => changeLang(e.target.value)}
                                value={(i18n.language || "uz").slice(0, 2)}
                            >
                                <option value="uz">🇺🇿 O&apos;zbek</option>
                                <option value="ru">🇷🇺 Русский</option>
                                <option value="en">🇬🇧 English</option>
                            </select>
                        </li>
                    </ul>
                </div>

                {/* CENTER LOGO */}
                <div className="logo_box" data-aos="zoom-in" data-aos-delay="200">
                    <a href="#" aria-label="Home"><h1>DJURAYEV O&apos;LMAS</h1></a>
                </div>

                {/* RIGHT LANGUAGE SELECT (DESKTOP) */}
                <div className="lang_provider" data-aos="fade-left" data-aos-delay="300">
                    <label className="sr-only" htmlFor="desktop-lang-select">Language</label>
                    <select
                        id="desktop-lang-select"
                        onChange={e => changeLang(e.target.value)}
                        value={(i18n.language || "uz").slice(0, 2)}
                    >
                        <option value="uz">🇺🇿 O&apos;zbek</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
                    </select>
                </div>

                {/* BURGER ICON */}
                <button
                    className={`burger ${menuOpen ? "open" : ""}`}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="primary-menu"
                    onClick={toggleMenu}
                    type="button"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
