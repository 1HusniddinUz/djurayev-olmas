import "../../assets/HeroSection.css";
import hero_bg from "../../assets/videos/hero_bg.mp4";
import logo from "../../assets/images/logo.png"
const HeroSection = () => {
    return (
        <div id="HeroSection">
            <div className="hero_bg">
                <video src={hero_bg} autoPlay loop muted playsInline></video>
            </div>
            <img src={logo} alt="DJURAYEV-O'LMAS LOGOTIP" loading="lazy" />
            <div className="overlay"></div>

            <div className="hero_content">
                {/* Sizning matn yoki button elementlaringiz shu yerda bo‘ladi */}
            </div>
        </div>
    );
};

export default HeroSection;
