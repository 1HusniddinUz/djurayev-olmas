import "../../assets/ContactForm.css";

const ContactForm = () => {
    return (
        <section id="ContactForm">
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Biz bilan bog‘laning</h3>

                    <div className="social-box">
                        <a href="#"><i className="fa-brands fa-telegram"></i></a>
                        <a href="https://instagram.com/ustoulmas" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="mailto:ulmaszondzuraev@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>

                    <div className="contact-num">
                        <a href="tel:+998999998877">+998 (99) 999-88-77</a>
                        <a href="tel:+998999998877">+998 (99) 999-88-77</a>
                    </div>
                </div>

                <div className="location-box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6115.2482250546445!2d64.511453!3d39.972156000000005!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU4JzE5LjgiTiA2NMKwMzAnNDEuMiJF!5e0!3m2!1sru!2s!4v1762245394721!5m2!1sru!2s"
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
