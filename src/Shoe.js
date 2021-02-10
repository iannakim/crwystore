import React from "react";
import "./index.css"

class Shoe extends React.Component {

  render() {

    let { title, price, price_min, price_max, featured_image, variants, compare_at_price } = this.props.shoe

    let name = title.split('-')[0]
    let desc = title.split('-')[1]
    let num = variants.length

    return (
        <div className="col">
          <div className="shoeTile">
            <img 
              src={featured_image}
              alt='{title}'
              className="shoeImage"
            />
            <div className="shoeInfo">
              <h3>{name}</h3>
              <p>{desc}</p>
              <p> {num} { num > 1 ? `Colors` : `Color`} Available</p>
              { compare_at_price ? <div><span className="price-min"> ${price_min/100} </span> <span className="price-max"> ${price_max/100} </span></div> : <span className="price">${price/100}</span>} 
            </div>
          </div>
        </div>
    )
  }
}

export default Shoe