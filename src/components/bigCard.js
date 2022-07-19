import React, { useContext } from "react";
import "../styleSheet/bigCard.css";
import { StoreContext } from "../storeConfiguration/storeContext";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
function BigCard({
  image,
  description,
  price,
  title,
  rating,
  productID,
  product,
}) {
  const { showProductPage, addToCart, buyProduct } = useContext(StoreContext);
  const navigate = useNavigate();
  // const router = useRouter();

  const buy_button = (e) => {
    buyProduct();
    e.stopPropagation();
  };
  const handleAddToCart = (e) => {
    addToCart(product);
    e.stopPropagation();
  };
  const likeProduct = (e) => {
    console.log("like button clicked is working");
    e.stopPropagation();
  };
  return (
    <>
      <div className="card_box">
        {/* <div className="card" onClick={() => showProductPage(productID)}> */}
        <div
          className="card"
          onClick={() => {
            showProductPage(productID);
            navigate("/view");
          }}
        >
          <div className="card_image">
            <img src={image} alt="Laptop" />
          </div>
          <div className="card_description">
            {title && <h2>{title}</h2>}
            {description && <div className="description">{description}</div>}
            {rating &&
              (() => {
                let star = [];
                for (let i = 0; i < Math.round(rating?.rate); i++) {
                  star.push(<i className="bi bi-star-fill" key={i}></i>);
                }
                return (
                  <div className="ratings_container">
                    <span className="ratings_stars">{star}</span>{" "}
                    <span className="ratings_count">({rating.count})</span>
                  </div>
                );
              })()}

            {price && (
              <div className="card_price">
                <span className="price">
                  <i className="bi bi-currency-dollar"></i>
                  {price}
                </span>
                <span className="discount">discount: {"50%"}</span>
                <span className="save_money">save 200/-</span>
                <button onClick={likeProduct} className="bigCard_likeBtn">
                  <i className="bi bi-suit-heart-fill"></i>
                </button>
              </div>
            )}

            <div className="card_buttons">
              <button onClick={(e) => handleAddToCart(e)}>Add to cart</button>
              <button onClick={(e) => buy_button(e)}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCard;
