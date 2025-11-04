import about_bottom from "../../assets/images/about_bottom.jpg"
import "../../assets/AboutUs.css"
import {useTranslation} from "react-i18next";

const AboutUs = () => {

    const {t} = useTranslation();

    return (<div id="AboutUs">
            <div className="container">
                <div className="about_context">
                    <div className="about_top_text">
                        <h3>
                            {t(`aboutUsH3`)}
                        </h3>
                        <p>
                            {t(`aboutUsP`)}
                        </p>
                    </div>

                    <div className="about_bottom_img">
                        <img src={about_bottom} alt="DJO'RAYEV O'LMAS ....VICH" loading="lazy"/>
                    </div>

                </div>
                <div className="about_content">
                </div>
            </div>
        </div>)
}
export default AboutUs;