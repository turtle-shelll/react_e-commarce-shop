import React from "react";
import { useContext } from "react";
import { StoreContext } from "../storeConfiguration/storeContext";
import { useNavigate } from "react-router-dom";

function Congrats() {
  const { hideConform } = useContext(StoreContext);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
    hideConform();
  };
  return (
    <div className="Congrats">
      <h1>Congrats</h1>
      <h4>your product will going to diliver you very soon!</h4>
      <div onClick={goToHome}>get more Products</div>
    </div>
  );
}

export default Congrats;
