import React, { useContext } from "react";
// import laptop from "../images/laptop-3.jpg";
// import { Button } from "@mui/material";
import "../styleSheet/smallCard.css";
import { StoreContext } from "../storeConfiguration/storeContext";
import { useNavigate } from "react-router-dom";

function SmallCard({ product }) {
  const navigate = useNavigate();
  const { showProductPage, addToCart } = useContext(StoreContext);
  const handleClick = (productID) => {
    showProductPage(productID);
  };
  const handleAddToCart = (e) => {
    addToCart(product);
    e.stopPropagation();
  };
  const handleLikeBtn = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="small_card_container"
      onClick={() => {
        handleClick(product.id);
        navigate("/view");
      }}
    >
      <div className="small_card_image">
        <img src={product.image} alt="laptop" />
      </div>
      <div className="small_card_description">
        {product.title && <h2>{product.title}</h2>}
        {product.rating &&
          (() => {
            let star = [];
            for (let i = 0; i < Math.round(product.rating?.rate); i++) {
              star.push(<i className="bi bi-star-fill" key={i}></i>);
            }
            return (
              <div className="smallcard_ratings_container">
                <span className="ratings_stars">{star}</span>
                <span className="ratings_count">({product.rating?.count})</span>
              </div>
            );
          })()}
      </div>
      <div className="small_card_buttons">
        <span onClick={handleLikeBtn}>
          <i className="bi bi-suit-heart-fill"></i>
        </span>
        <span onClick={(e) => handleAddToCart(e, product.id)}>add to cart</span>
      </div>
    </div>
  );
}

export default SmallCard;
