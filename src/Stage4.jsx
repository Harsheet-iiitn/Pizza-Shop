import React, { useState } from "react";
import { showPicked, getData, Change } from "./DataStorage";

function Stage4() {
  const [picked, setpicked] = useState(showPicked);

  const Data = getData(picked);

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
      {picked.map((Order) => {
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

export default Stage4;
