import React, { useContext } from "react";
import SmallCard from "./smallCard";
import BigCard from "./bigCard";
import { StoreContext } from "../storeConfiguration/storeContext";
export const SliderForSmallCard = ({ productArray }) => {
  const { showProductPage } = useContext(StoreContext);

  return (
    <div>
      <div className="slider_container">
        {productArray?.map((product, index) => (
          <SmallCard
            className="small_card"
            product={product}
            key={index}
            showProductPage={showProductPage}
            productID={product.id}
          />
        ))}
      </div>
      {/* <SmallCard  product={product}/> */}
    </div>
  );
};

export const SliderForBigCard = ({ productArray2 }) => {
  // const { showProductPage } = useContext(StoreContext);

  return (
    <div>
      <div className="slider_container2">
        {productArray2?.map((product, index) => (
          <BigCard
            // showProductPage={showProductPage}
            key={index}
            product={product}
            image={product.image}
            // description={product.description}
            title={product.title}
            rating={product.rating}
            // price={product.price}
            productID={product.id}
            // key={index}
          />
        ))}
      </div>
    </div>
  );
};

// export default SliderForSmallCard;
