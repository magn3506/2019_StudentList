"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  getJSON();
}

function getJSON() {
  console.log("getJSON");

  // NOTE: Maybe also call sortByFirst the first time ... Investigate!
  filterList();
}

function filterList() {
  console.log("filterList");

  displayList();
}

function displayList() {
  console.log("displayList");
}

// TODO: Create scaffolding functions for the rest!

function clickSortByFirst() {}

function sortListByFirst() {}
