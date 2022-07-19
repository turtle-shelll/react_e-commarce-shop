import { createContext } from "react";
import { useState } from "react";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [productID, setProductID] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [conform, setConform] = useState(false);
  const [error, setError] = useState("");
  const buyProduct = () => {
    setConform(true);
  };
  const buyAllProducts = () => {
    const cartLength = cartProducts.length;
    if (cartLength === 0) {
      setError("there is no product to make this transaction.");
      return;
    }
    setConform(true);
    setCartProducts([]);
  };
  const hideConform = () => {
    setConform(false);
  };
  const removeProduct = (productID) => {
    const newCartProducts = [...cartProducts];
    const index = newCartProducts.findIndex(
      (product) => product.id === productID
    );
    newCartProducts.splice(index, 1);
    setCartProducts(newCartProducts);
  };
  const increaseQunatity = (product) => {
    const newCartProducts = [...cartProducts];
    const index = newCartProducts.findIndex(
      (documentation) => documentation.id === product.id
    );
    newCartProducts[index].quantity += 1;
    setCartProducts(newCartProducts);
  };
  const decreaseQunatity = (product) => {
    const newCartProducts = [...cartProducts];
    const index = newCartProducts.findIndex(
      (documentation) => documentation.id === product.id
    );
    if (newCartProducts[index].quantity === 1) {
      newCartProducts.splice(index, 1);
      setCartProducts(newCartProducts);
    } else {
      newCartProducts[index].quantity -= 1;
      setCartProducts(newCartProducts);
    }
  };
  const removeAllProducts = () => {
    setCartProducts([]);
    setTotal(0);
  };
  const makeTotal = () => {
    let total = cartProducts.reduce((preTotal, product) => {
      return (preTotal += product.price * product.quantity);
    }, 0);
    setTotal(total);
  };
  const addToCart = (product) => {
    const newCartProducts = [...cartProducts];
    const index = newCartProducts.findIndex(
      (documentation) => documentation.id === product.id
    );
    if (index === -1) {
      newCartProducts.push({ ...product, quantity: 1 });
      setCartProducts(newCartProducts);
    } else {
      increaseQunatity(product);
    }
  };

  const showProductPage = (thisProductID) => {
    setProductID(thisProductID);
  };

  const getProductId = (thisProductID) => {
    setProductID(thisProductID);
  };

  return (
    <StoreContext.Provider
      value={{
        cartProducts,
        productID,
        showProductPage,
        getProductId,
        addToCart,
        total,
        makeTotal,
        removeProduct,
        decreaseQunatity,
        increaseQunatity,
        removeAllProducts,
        buyProduct,
        buyAllProducts,
        conform,
        error,
        hideConform,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
