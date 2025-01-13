import React from "react";

let allOrders = [];
let placed = [];
let making = [];
let ready = [];
let picked = [];

var a = 0;

function DS(Order) {
  a++;
  Order.id = a;
  allOrders.push(Order);
  placed.push(a);
}

function LEN() {
  return 10;
}

export default DS;

export { LEN };
