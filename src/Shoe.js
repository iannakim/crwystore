import React from "react";
import "./index.css"

class Shoe extends React.Component {

  render() {

    let { title, price, featured_image, variants } = this.props.shoe

    let name = title.split('-')[0]
    let desc = title.split('-')[1]
    let num = variants.length

    return (
        <div class="col">
          <div className="shoeTile">
            <img 
              src={featured_image}
              alt='{title}'
              className="shoeImage"
            />
            <div className="shoeInfo">
              <p>{name}</p>
              <p>{desc}</p>
              <p>{num} {} Colors available</p>
              <p>${price/100}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Shoe