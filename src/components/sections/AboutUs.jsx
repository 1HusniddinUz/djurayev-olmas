import about_bottom from "../../assets/images/about_bottom.jpg"
import "../../assets/AboutUs.css"
const AboutUs = () => {
    return (
        <div id="AboutUs">
            <div className="container">
                <div className="about_context">
                    <div className="about_top_text">
                        <h3>
                            DJO'RAYEV O'LMAS ....VICH
                        </h3>
                        <p>
                            If you feel resonance with my work, I'd love to hear from you. Whether you're an investor, creator, partner, or someone simply moved by the vision — your presence matters. <br/> <br/>
                            The most beautiful futures are co-created. If something in you is awakened by what you see here, that's not coincidence — it's resonance. And resonance is the beginning of collaboration. <br/> <br/>
                            Share your thoughts, inquiries, or simply introduce yourself. Every connection holds possibility.
                        </p>
                    </div>

                    <div className="about_bottom_img">
                        <img src={about_bottom} alt="DJO'RAYEV O'LMAS ....VICH" loading="lazy" />
                    </div>

                </div>
                <div className="about_content">

                </div>
            </div>
        </div>
    )
}
export default AboutUs;