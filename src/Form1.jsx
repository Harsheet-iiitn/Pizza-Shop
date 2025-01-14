import React, { useState } from "react";
import DS, { LEN } from "./DataStorage";

function createForm() {
  const [details, setDetails] = useState({
    id: 0,
    Name: "",
    Email: "",
    Phone: "",
    PizzaType: "",
    PizzaSize: "",
    PizzaBase: "",
  });

  const [type, setType] = useState("");

  const [size, setSize] = useState("");

  const [base, setBase] = useState("");

  function AddName(event) {
    setDetails({
      Name: event.target.value,
      Email: details.Email,
      Phone: details.Phone,
      PizzaType: details.PizzaType,
      PizzaSize: details.PizzaSize,
      PizzaBase: details.PizzaBase,
    });
  }

  function AddEmail(event) {
    setDetails({
      Name: details.Name,
      Email: event.target.value,
      Phone: details.Phone,
      PizzaType: details.PizzaType,
      PizzaSize: details.PizzaSize,
      PizzaBase: details.PizzaBase,
    });
  }

  function AddPhone(event) {
    setDetails({
      Name: details.Name,
      Email: details.Email,
      Phone: event.target.value,
      PizzaType: details.PizzaType,
      PizzaSize: details.PizzaSize,
      PizzaBase: details.PizzaBase,
    });
  }

  function AddType(event) {
    setType(event.target.value);
    setDetails({
      Name: details.Name,
      Email: details.Email,
      Phone: details.Phone,
      PizzaType: event.target.value,
      PizzaSize: details.PizzaSize,
      PizzaBase: details.PizzaBase,
    });
  }

  function AddSize(event) {
    setSize(event.target.value);
    setDetails({
      Name: details.Name,
      Email: details.Email,
      Phone: details.Phone,
      PizzaType: details.PizzaType,
      PizzaSize: event.target.value,
      PizzaBase: details.PizzaBase,
    });
  }

  function AddBase(event) {
    setBase(event.target.value);
    setDetails({
      Name: details.Name,
      Email: details.Email,
      Phone: details.Phone,
      PizzaType: details.PizzaType,
      PizzaSize: details.PizzaSize,
      PizzaBase: event.target.value,
    });
  }

  function Submit(event) {
    if (LEN() === 10) {
      alert("Not Taking Any Order for now");
    } else if (
      details.Name !== "" &&
      details.Email !== "" &&
      details.Phone !== "" &&
      details.PizzaType !== "" &&
      details.PizzaSize !== "" &&
      details.PizzaBase !== ""
    ) {
      DS(details);
    }
    event.preventDefault();
  }

  return (
    <div>
      <center>
        Place Order
        <form>
          <label>Name:</label>
          <input
            type="text"
            onChange={AddName}
            name="FirstName"
            value={details.Name}
          />
          <br />

          <label>Email ID:</label>
          <input
            type="email"
            onChange={AddEmail}
            name="emailID"
            value={details.Email}
          />
          <br />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="PhoneNumber"
            onChange={AddPhone}
            value={details.Phone}
          />
          <br />

          <label>Pizza Type:</label>
          <input
            type="radio"
            name="Type"
            value="Veg"
            onChange={AddType}
            checked={type === "Veg"}
          />
          <label>Veg</label>
          <input
            type="radio"
            name="Type"
            value="NonVeg"
            onChange={AddType}
            checked={type === "NonVeg"}
          />
          <label>Non-Veg</label>
          <br />

          <label>Pizza Size:</label>
          <input
            type="radio"
            name="Size"
            value="Small"
            onChange={AddSize}
            checked={size === "Small"}
          />
          <label>Small</label>
          <input
            type="radio"
            name="Size"
            value="Medium"
            onChange={AddSize}
            checked={size === "Medium"}
          />
          <label>Medium</label>
          <input
            type="radio"
            name="Size"
            value="Large"
            onChange={AddSize}
            checked={size === "Large"}
          />
          <label>Large</label>
          <br />

          <label>Pizza Base:</label>
          <input
            type="radio"
            name="Base"
            value="Thin"
            onChange={AddBase}
            checked={base === "Thin"}
          />
          <label>Thin</label>
          <input
            type="radio"
            name="Base"
            value="Thick"
            onChange={AddBase}
            checked={base === "Thick"}
          />
          <label>Thick</label>
          <br />

          <button onClick={Submit}>Submit</button>
        </form>
      </center>
    </div>
  );
}

export default createForm;
