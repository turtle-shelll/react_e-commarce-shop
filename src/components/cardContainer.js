import React, { useState, useEffect } from "react";
import BigCard from "./bigCard";
import axios from "../configuration/axios";
// import VeiwProduct from "./veiwProduct";
import "../styleSheet/mainPage.css";
// import { StoreContext } from "../storeConfiguration/storeContext";
// import CartScreen from "./cartScreen";
// import NavBar from "./NavBar";
import BoostrapCarousel from "./carousel";
import { SliderForSmallCard, SliderForBigCard } from "./slider";
import AdSection from "./adSection";

function Card_container() {
  // const { ProductPage } = useContext(StoreContext);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts(params) {
      const { data } = await axios.get("/products");
      setAllProducts(data);
    }
    getAllProducts();
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      <div className="BoostrapCarousel_">
        {<BoostrapCarousel className="boostrap-carousel" />}
      </div>
      <SliderForSmallCard productArray={allProducts} />
      <h2 className="Tag_heading">
        <i className="bi bi-lightning-fill"></i> Newly Trands
      </h2>
      {(() => {
        const productArray2 = [...allProducts].reverse();
        return <SliderForBigCard productArray2={productArray2} />;
      })()}
      <AdSection />
      <h2 className="Tag_heading">
        <i className="bi bi-tags-fill"></i> Top Categories
      </h2>
      <div className="card_container">
        {allProducts.length === 0 && (
          <div className="main_container_spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {allProducts.map((product, index) => {
          return (
            <BigCard
              // showProductPage={showProductPage}
              product={product}
              key={index}
              image={product.image}
              description={product.description}
              title={product.title}
              // rating={product.rating}
              price={product.price}
              productID={product.id}
            />
          );
        })}
      </div>
      {/* <CartScreen /> */}

      {/* {ProductPage && <VeiwProduct />} */}
    </div>
  );
}

export default Card_container;
