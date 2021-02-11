"use strict";

window.addEventListener("load", init);

//let data = [5, 32, 10, 5, 8, 52, 62, 83, 79, 16, 4, 3, 24, 21, 49, 5, 32, 10, 5, 8, 52, 62, 83, 79, 16, 4, 3, 24, 21, 49, 6, 1, 7, 81, 42, 71, 54, 1, 10, 20]

const dataModel = [];

function init() {
    const visits = getNumberOfCustomers();

    for(let i = 0; i < 40; i++) {
        dataModel.push(visits);
    }

    displayData();
    loop();
}

function getNumberOfCustomers() {
//gives random number
return Math.floor(Math.random()*32);
}

function loop() {  
    modifyModel();
    setTimeout(loop, 1000);
}

function modifyModel() {
    //push the model
    const visits = getNumberOfCustomers();
    dataModel.shift();
    dataModel.push(visits);
    displayData();
    }

function displayData() {
//adjust height of each bar
const bars = document.querySelectorAll(".bar");
let n = 0;

bars.forEach((bar) => {
    let newHeight = dataModel[n];
    bar.style.height = newHeight + "%";
    n++;
    console.log(dataModel[dataModel.length - 1]);
})
}
