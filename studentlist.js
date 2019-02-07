"use strict";

window.addEventListener("DOMContentLoaded", init);

let allStud;
let studTarget = document.querySelector(".target");
let studOutput = document.querySelector(".output");
let filterKnap = "alle";

function init() {
  console.log("init");

  getJSON();
}

async function getJSON() {
  console.log("getJSON");

  let jsonObject = await fetch("http://petlatkea.dk/2019/students1991.json");
  allStud = await jsonObject.json();

  // Eventlistener for filter button
  document.querySelectorAll(".filter_knap").forEach(Knap => {
    Knap.addEventListener("click", getDataFilter);
  });

  filterList();
  // NOTE: Maybe also call sortByFirst the first time ... Investigate!
}

function getDataFilter() {
  console.log("getDataFilter");

  studOutput.textContent = " ";

  filterKnap = this.getAttribute("data-house");

  console.log(filterKnap + 123);

  filterList();
}

function filterList() {
  console.log("filterList");

  allStud.forEach(stud => {
    if (filterKnap == "alle") {
      displayList(stud);
    }

    if (filterKnap == stud.house) {
      displayList(stud);
    }

    function displayList(stud) {
      let klone = studTarget.cloneNode(true).content;

      klone.querySelector(".name").textContent = stud.fullname;
      klone.querySelector(".house").textContent = stud.house;

      // TODO: Create link that finds name and files links to images in folder

      studOutput.appendChild(klone);
      console.log(stud.house);
    }
  });
}

// TODO: Create scaffolding functions for the rest!

function clickSortByFirst() {
  console.log("clickSortByFirst");
}

function sortListByFirst() {
  console.log("sortListByFirst");
}

function modalShow() {
  console.log("modalShow");
}
