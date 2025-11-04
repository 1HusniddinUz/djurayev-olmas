import { useState } from "react";
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/1.png"
import img3 from "../../assets/images/1.png"
import img4 from "../../assets/images/1.png"
import img5 from "../../assets/images/1.png"
import img6 from "../../assets/images/1.png"
import img7 from "../../assets/images/1.png"
import img8 from "../../assets/images/1.png"
import img9 from "../../assets/images/1.png"
import img10 from "../../assets/images/1.png"
import img11 from "../../assets/images/1.png"
import img12 from "../../assets/images/1.png"
import "../../assets/Products.css"

const ProductsData = [
    { id: 1, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img1 },
    { id: 2, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img2 },
    { id: 3, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img3 },
    { id: 4, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img4 },
    { id: 5, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img5 },
    { id: 6, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img6 },
    { id: 7, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img7 },
    { id: 8, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img8 },
    { id: 9, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img9 },
    { id: 10, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img10 },
    { id: 11, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img11 },
    { id: 12, name: `Dutor`, info: `Dutor haqida ma'lumot`, price: `120$`, img: img12 },
]

const Products = () => {
    const [visibleCount, setVisibleCount] = useState(6)

    const handleShowMore = () => {
        setVisibleCount((prev) => (prev + 3 <= ProductsData.length ? prev + 3 : ProductsData.length))
    }

    const handleShowLess = () => {
        setVisibleCount(6)
    }

    return (
        <div id="Products">
            <div className="container">
                <h3>Cholg'u asboblar</h3>
                <div className="products_box">
                    {ProductsData.slice(0, visibleCount).map((product) => (
                        <div key={product.id} className="product_card">
                            <img src={product.img} alt={product.name} />
                            <div className="product_texts">
                                <h4>{product.name}</h4>
                                <p>{product.info}</p>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="buttons_box">
                    {visibleCount < ProductsData.length ? (
                        <button onClick={handleShowMore} className="show_btn">Show More</button>
                    ) : (
                        <button onClick={handleShowLess} className="show_btn">Show Less</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products
