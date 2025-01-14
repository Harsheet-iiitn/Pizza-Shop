import React from "react";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";

function MainStage() {
  return (
    <div>
      <table style={{ borderStyle: "solid", float: "left" }}>
        <thead>
          <tr>
            <th>Order Placed</th>
          </tr>
        </thead>
        <tbody>
          <Stage1 />
        </tbody>
      </table>
      <table style={{ borderStyle: "solid", float: "left" }}>
        <thead>
          <tr>
            <th>Order Making</th>
          </tr>
        </thead>
        <tbody>
          <Stage2 />
        </tbody>
      </table>
      <table style={{ borderStyle: "solid", float: "left" }}>
        <thead>
          <tr>
            <th>Order Ready</th>
          </tr>
        </thead>
        <tbody>
          <Stage3 />
        </tbody>
      </table>
      <table style={{ borderStyle: "solid", float: "left" }}>
        <thead>
          <tr>
            <th>Order Picked</th>
          </tr>
        </thead>
        <tbody>
          <Stage4 />
        </tbody>
      </table>
    </div>
  );
}

export default MainStage;
