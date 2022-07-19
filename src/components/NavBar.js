import React, { useContext } from "react";
import { StoreContext } from "../storeConfiguration/storeContext";
import Congrats from "./congrats";
import "../styleSheet/navBar.css";
import { Link } from "react-router-dom";
const sideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_box">
        <ul>
          <li>
            <i className="bi bi-file-person"></i>
            Login
          </li>
          <li>
            <i className="bi bi-bucket-fill"></i>Your Products
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i>Track delavery
          </li>
          <li>
            <i className="bi bi-grid-1x2-fill"></i>Veiw brands
          </li>
          <li>
            <i className="bi bi-camera2"></i>Events
          </li>
          <li>
            <i className="bi bi-gift-fill"></i>Combo Offers
          </li>
          {/* <li>Brands</li> */}
          <li>
            <i className="bi bi-layout-text-sidebar-reverse"></i>Watch List
          </li>
          <li>
            {/* <i className="bi bi-credit-card-2-front-fill"></i> */}
            <i className="bi bi-credit-card-2-back-fill"></i>
            Payment method
          </li>
          <li>
            <i className="bi bi-person-video3"></i>services
          </li>
          <li>
            <i className="bi bi-box-arrow-right"></i>Logout
          </li>
        </ul>
        <div>
          <p>Terms and condition are deferent on deferent products.</p>
        </div>
      </div>
    </div>
  );
};

function NavBar() {
  const { cartProducts, conform } = useContext(StoreContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="navbar_container">
      <span className="menu_btn" onClick={handleClick}>
        <i className="bi bi-list"></i>
      </span>
      {isOpen && sideBar()}
      <div className="navbar_logo">
        <Link to={"/"}>LOGO</Link>
        {conform && <Congrats />}
      </div>
      <div className="nav_search_bar">
        <input type="text" placeholder="Search Products, events..." />
        <span>
          <i className="bi bi-search"></i>
        </span>
      </div>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Products</li>
          </Link>
          <li>Events</li>
          <li>Combo Offers</li>
          <li>brands</li>
          <li>watch List</li>
        </ul>
      </nav>
      <div className="nav_btn_container">
        <div className="nav_btn">
          <span>
            <i className="bi bi-file-person"></i>
          </span>
          <span className="nav_btn_cart_icon">
            <span className="totel_cart_items">
              {/* {cartProducts.length > 0 ? cartProducts.length : 0} */}
              {cartProducts.reduce((acc, curr) => acc + curr.quantity, 0)}
            </span>
            <Link to={"/cart"}>
              <i className="bi bi-cart-fill"></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
