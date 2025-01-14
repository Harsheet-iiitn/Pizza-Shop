import React, { useState } from "react";
import { showReady, getData, Change } from "./DataStorage";

function Stage3() {
  const [ready, setReady] = useState(showReady);

  const Data = getData(ready);

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
      {ready.map((Order) => {
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

export default Stage3;
