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
  return placed.length + making.length;
}

function showPlaced() {
  return placed;
}

function showMaking() {
  return making;
}

function showReady() {
  return ready;
}

function showPicked() {
  return picked;
}

function Change(a) {
  if (placed.find(a) != undefined) {
    making.push(a);
    placed = placed.filter((item) => item !== a);
  } else if (making.find(a) != undefined) {
    ready.push(a);
    making = making.filter((item) => item !== a);
  } else if (ready.find(a) != undefined) {
    picked.push(a);
    ready = ready.filter((item) => item !== a);
  }
}

function getData(a) {
  return allOrders.findIndex((x) => x.id === a);
}

export default DS;

export { LEN, showPicked, showPlaced, showMaking, showReady, Change, getData };
