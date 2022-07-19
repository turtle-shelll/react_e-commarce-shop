import React, { useEffect, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   setTotal,
//   removeProductfromCart,
//   removeAllProductsFromCart,
//   buyProduct,
//   buyAllProducts,
// } from "../configureStore/storeSlice";
import "../styleSheet/cartScreen.css";
import { StoreContext } from "../storeConfiguration/storeContext";

function CartScreen() {
  const {
    cartProducts,
    total,
    makeTotal,
    removeProduct,
    decreaseQunatity,
    increaseQunatity,
    removeAllProducts,
    buyAllProducts,
  } = useContext(StoreContext);
  // console.log("cartProducts", cartProducts);
  let error = null;
  const removeProductFromCart = (productId) => {
    removeProduct(productId);
  };

  const removeAllProductsFromCart = () => {
    removeAllProducts();
  };

  useEffect(() => {
    makeTotal();
  });
  return (
    <div className="container">
      <div className="cart_caontainer">
        <div className="cart_product_box_header">
          <Link to={"/"} className="cart_header_link">
            <i className="bi bi-arrow-left"></i>
          </Link>
          <Link to={"#"} className="cart_header_link">
            <i className="bi bi-three-dots-vertical"></i>
          </Link>
        </div>
        <ol className="order_list">
          {cartProducts.length > 0 ? (
            <div>
              {cartProducts.map((product, index) => {
                return (
                  <li key={index}>
                    <span className="productImage">
                      {/* {product.title?.split(" ")[0]} */}
                      <img
                        alt={product?.name?.split(" ")[0]}
                        src={product.image}
                        width="100px"
                        height="100px"
                      />
                    </span>
                    <div className="cart_middle_div">
                      <span className="product_name_span">{`${
                        product.title?.split(" ")[0]
                      }
                       ${product.title?.split(" ")[1]} ${
                        product.title?.split(" ")[2]
                      }`}</span>
                      {/* <span>{product.price}</span> */}
                      <span className="price_span">
                        <span className="price">
                          <i className="bi bi-currency-dollar"></i>
                          {product.price}
                        </span>
                        <span className="save_money">save 200/-</span>
                      </span>

                      <span
                        className="closeBTN"
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        <i className="bi bi-trash3-fill"></i> Delete
                      </span>
                    </div>
                    <div className="cart_last_div">
                      <span
                        className="increaseQunatity"
                        onClick={() => increaseQunatity(product)}
                      >
                        +
                      </span>
                      <span>{product.quantity}</span>
                      <span
                        className="decreaseQunatity"
                        onClick={() => decreaseQunatity(product)}
                      >
                        -
                      </span>
                    </div>
                  </li>
                );
              })}
            </div>
          ) : (
            <div className="No_cartItems">
              there is no items in your cart.
              {error && <p className="error">{error}</p>}
              <Link to={"/"} className="gotoProducts_link">
                go to products
              </Link>
            </div>
          )}
        </ol>
        <hr />
        <div className="bottom_totals">
          <span>Total</span>
          <span>{total.toFixed(2)}</span>
          <span className="buyNowBtn" onClick={buyAllProducts}>
            Buy All
          </span>
        </div>
      </div>
      <div className="removeAll" onClick={removeAllProductsFromCart}>
        remove all
      </div>
    </div>
  );
}

export default CartScreen;
