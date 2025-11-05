import "../../assets/ContactForm.css";
import {useTranslation} from "react-i18next";

const ContactForm = () => {

    const { t } = useTranslation();

    return (
        <section id="ContactForm">
            <div className="contact-container">
                <div className="contact-info">
                    <h3>{t(`contactH3`)}</h3>

                    <div className="social-box">
                        <a href="https://t.me/+998997174283" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"></i></a>
                        <a href="https://instagram.com/usto_ulmas_ruboblari" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="mailto:ulmaszondzuraev@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>

                    <div className="contact-num">
                        <a href="tel:+998997174283">+998 (99) 717-42-83</a>
                        <p> {t(`contactLoc`)} {t(`contactP`)}</p>
                    </div>
                </div>

                <div className="location-box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6115.2482250546445!2d64.511453!3d39.972156000000005!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU4JzE5LjgiTiA2NMKwMzAnNDEuMiJF!5e0!3m2!1sru!2s!4v1762325756329!5m2!1sru!2s"
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
