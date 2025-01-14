import React, { useState } from "react";
import { showMaking, getData, Change } from "./DataStorage";

function Stage2() {
  const [making, setMaking] = useState(showMaking);

  const Data = getData(making);

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
      {making.map((Order) => {
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

export default Stage2;
