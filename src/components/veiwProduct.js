import React, { useEffect, useState, useContext } from "react";
import axios from "../configuration/axios";
import { StoreContext } from "../storeConfiguration/storeContext";
import { Link } from "react-router-dom";
import "../styleSheet/veiwProduct.css";
// import laptop from "../images/laptop-3.jpg";
import SmallCard from "./smallCard";
function VeiwProduct() {
  const { showProductPage, productID, addToCart, buyProduct } =
    useContext(StoreContext);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      const singleProduct = await axios.get(`/products/${productID}`);
      setProduct(singleProduct.data);
      const { data } = await axios.get("/products");
      setAllProducts(data);
    }
    getAllProducts();
  }, [productID]);
  return (
    <div className="veiw_product_container_bg">
      <div className="veiw_product_box">
        <div className="veiw_product_box_header">
          <Link to={"/"}>
            <i className="bi bi-arrow-left"></i>
          </Link>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className="buyProduct_Image_container">
          <div className="veiw_product_box_image">
            <img src={product.image} alt={""} />
          </div>
          <div className="small_image_container">
            <span className="smallImage">
              <img src={product.image} alt={""} />
            </span>
            <span className="smallImage">
              <img src={product.image} alt={""} />
            </span>
            <span className="smallImage">
              <img src={product.image} alt={""} />
            </span>
            <span className="smallImage">
              <img src={product.image} alt={""} />
            </span>
          </div>
        </div>
        <div className="veiw_product_box_body">
          {!product && (
            <div className="main_container_spinner">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div>
            <h2>{product.title}</h2>
            <div className="veiw_product_description">
              {product.description}
            </div>
            <div>
              <span className="veiw_product_priceANDrating">
                {(() => {
                  let star = [];
                  for (let i = 0; i < Math.round(product.rating?.rate); i++) {
                    star.push(<i className="bi bi-star-fill" key={i}></i>);
                  }
                  return (
                    <div className="rating_div">
                      <span className="rating_div_stars">{star}</span>
                      <span>({product?.rating?.count})</span>
                    </div>
                  );
                })()}
                <div className="card_price">
                  <span className="price">
                    <i className="bi bi-currency-dollar"></i>
                    {product.price}
                  </span>
                  <span className="discount">discount: {"50%"}</span>
                  <span className="save_money">save 200/-</span>
                  {/* <button onClick={likeProduct}>
              <i className="bi bi-suit-heart-fill"></i>
            </button> */}
                </div>
              </span>
            </div>
          </div>
          <div>
            <h3>Available Offers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus ullam suscipit fugit voluptatibus pariatur deserunt
              corporis exercitationem aut illo in, autem quisquam atque
              quibusdam.
            </p>
            <h3>Choose Payment Method</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              fuga pariatur reprehenderit officiis sequi accusantium, laboriosam
              aliquam fugit? Molestias, perspiciatis!
            </p>
          </div>

          <div className="veiw_product_bottom_box">
            <div className="veiw_product_bottom_square">
              <i className="bi bi-clock-fill"></i>on time delivery
            </div>
            <div className="veiw_product_bottom_square">
              <span className="bi bi-wallet2"></span>cash on delivery
            </div>
            <div className="veiw_product_bottom_square">
              <i className="bi bi-bank2"></i>easy EMI
            </div>
            <div className="veiw_product_bottom_square">
              <i className="bi bi-gem"></i>quality product
            </div>
          </div>
          <div className="veiw_product_bottom_btn">
            <span onClick={() => addToCart(product)}>Add to cart</span>
            <span onClick={() => buyProduct()}>Buy now</span>
          </div>
        </div>
        <div className="veiw_product_other_products">
          {allProducts.length === 0 && (
            <div className="main_container_spinner">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {allProducts.length > 0 &&
            allProducts.map((product, index) => {
              return (
                <SmallCard
                  product={product}
                  key={index}
                  showProductPage={showProductPage}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default VeiwProduct;
