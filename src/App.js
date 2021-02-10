import React, { Component } from "react";
import './App.css';
import shoes from "./productData.js";
import ShoeContainer from "./ShoeContainer";

class App extends Component {

  state = {
    shoes: shoes
  }


  render() {
  return (
    <div className="App">
      <ShoeContainer shoes={ this.state.shoes } />
    </div>
  );
  }
}

export default App;
