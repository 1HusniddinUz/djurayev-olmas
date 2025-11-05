import about_bottom from "../../assets/images/about_bottom.jpg";
import "../../assets/AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div id="AboutUs">
            <div className="container">
                <div className="about_context">
                    {/* === TOP TEXT === */}
                    <div
                        className="about_top_text"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h3 data-aos="fade-up" data-aos-delay="100">
                            {/*{t(`aboutUsH3`)}*/}
                        </h3>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1200"
                        >
                            {t(`aboutUsP`)}
                        </p>
                    </div>

                    {/* === IMAGE === */}
                    <div
                        className="about_bottom_img"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        <img
                            src={about_bottom}
                            alt="DJO'RAYEV O'LMAS — musiqiy meros"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="about_content"></div>
            </div>
        </div>
    );
};

export default AboutUs;
