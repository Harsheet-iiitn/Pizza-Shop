import React, { useState } from "react";
import { showPlaced, getData, Change } from "./DataStorage";

function Stage1() {
  const [placed, setPlaced] = useState(showPlaced);

  const Data = getData(placed);

  function Print(Data) {
    alert(
      Data.Name,
      Data.Email,
      Data.PizzaType,
      Data.PizzaSize,
      Data.PizzaBase
    );
  }

  return (
    <tr>
      {placed.map((Order) => {
        <div>
          <button onClick={Print}>
            <center>
              Order {Order}
              <br />
            </center>
          </button>
          <button onClick={Change(Order)}>
            <center>Next</center>
          </button>
        </div>;
      })}
    </tr>
  );
}

export default Stage1;