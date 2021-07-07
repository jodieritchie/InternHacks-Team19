import React, { useState } from "react";
import GroceryList from "./GroceryList";
import "./GrocerySetup.css";
function GrocerySetup() {

  const [groceryData, setGroceryData] = useState("");

  function getGroceryData() {
    let groceryItem = document.getElementById("search").value;
    const api1 = `https://api.spoonacular.com/food/products/search?apiKey=${key}&query=${groceryItem}`;
    return new Promise((resolve) => {
      fetch(api1)
        .then((response) => response.json())
        .then((data) => {
          var ids = data.products.map((obj) => obj.id);
          var firstID = ids[0];
          var dataResolved = displayGroceryData(firstID)
            .then(function (resolved) {
              //promise is now resolved
              setGroceryData(resolved)
            });
        })
        .catch(() => {
          console.log("error");
        });
    });
  }

  function displayGroceryData(firstID) {
    const api2 = `https://api.spoonacular.com/food/products/${firstID}?apiKey=${key}`;
    return new Promise((resolve) => {
      fetch(api2)
        .then((response) => response.json())
        .then((data) => {
          let macros = data.nutrition.nutrients.map((obj) => obj);
          resolve(macros);
        })
        .catch(() => {
          console.log("error");
        });
    });
  }

  return (
    <div className="grocerySetup">
      <section className="controls">
        <input
          id="search"
          type="text"
          placeholder="Search for Grocery"
          autoComplete="off"
        />
      </section>
      <button className="btn" onClick={getGroceryData}>
        Get Grocery Items
      </button>
      {groceryData && <GroceryList groceryData={groceryData} />}
    </div>
  );
}
let key = "93e7f0f4d3734c60b15ffed266b08712";
//let key = 'db6a8a86cd074a9f817d81be645b4a11'

export default GrocerySetup;
