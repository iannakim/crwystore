import React from "react";
import Shoe from "./Shoe";
import "./index.css"

function ShoeContainer(props) {

  let arrayOfShoes = props.shoes.map((shoe) => {
      return <Shoe
                key={shoe.id}
                shoe={shoe}
              />
  })
  // const chunk = (arr, size) =>
  // Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
  //   arr.slice(i * size, i * size + size)
  // );

  return (
    <div className="product-page">
      <h2>Spring Collection</h2>
        <div className="container">
          <div className="row row-cols-3">
            { arrayOfShoes }
          </div>
        </div>
    </div>
  );
}

export default ShoeContainer;