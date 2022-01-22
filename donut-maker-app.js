import DonutMaker from "./donut-maker.js";

const myDonutDiv = document.querySelector("myDonut");

renderPage();

function renderPage() {
  createDonut();
}


function createDonut() {
  const createDonutBtn = document.querySelector('#createDonut');
  const autoClickerBtn = document.querySelector('#autoClicker');
  const donutMultiplierBtn = document.querySelector('#donutMultiplierBtn');
  const resetBtn = document.querySelector('#resetBtn');

  const donutMaker = new DonutMaker(0, 0, 100, 10, 0);



  createDonutBtn.addEventListener("click", () => {

    const createDonutInfo = document.createElement("section");
    const autoClickerInfo = document.createElement("section");
    const donutMultiplierInfo = document.createElement("section");
    const resetInfo = document.createElement("section");
    donutMaker.clickDonut();
    console.log(donutMaker.donutCount);

  });

  // autoClickerBtn.addEventListener("click", () => {
  //   donutMaker.purchaseAutoClicker();
  // console.log(donutMaker.donutCount);

  // });

  // donutMultiplierBtn.addEventListener("click", () => {
  //   purchaseMultiplier();
  //   addMultiplier();
  //   updateDonutCount();
  // });

  // resetBtn.addEventListener("click", () => {
  //   donutMaker.reset();
  //   addMultiplier();
  //   addAutoClicker();
  //   updateDonutCount();
  // });

}