import { useState } from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import "../../assets/Products.css";
import { useTranslation } from "react-i18next";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Products = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const { t } = useTranslation();
    const productsData = t("productsData", { returnObjects: true });

    const handleShowMore = () => {
        setVisibleCount((prev) => (prev + 3 <= productsData.length ? prev + 3 : productsData.length));
    };

    const handleShowLess = () => {
        setVisibleCount(6);
    };

    return (
        <div id="Products">
            <div className="container">
                <h3>{t(`products`)}</h3>
                <div className="products_box">
                    {productsData.slice(0, visibleCount).map((product, index) => (
                        <div key={index} className="product_card">
                            <img src={images[index]} alt={product.name} />
                            <div className="product_texts">
                                <h4>{product.name}</h4>
                                <p>{product.info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="buttons_box">
                    {visibleCount < productsData.length ? (
                        <button onClick={handleShowMore} className="show_btn">{t(`productMore`)}</button>
                    ) : (
                        <button onClick={handleShowLess} className="show_btn">{t(`productClose`)}</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
