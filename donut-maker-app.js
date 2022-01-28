import DonutMaker from "./donut-maker.js";

renderPage();

function renderPage() {
  createDonut();
}


function createDonut() {
  const createDonutBtn = document.querySelector('.createDonutBtn');
  const autoClickerBtn = document.querySelector('.autoClickerBtn');
  const donutMultiplierBtn = document.querySelector('.donutMultiplierBtn');
  const resetBtn = document.querySelector('.resetBtn');
  const clickerCost = document.querySelector('.clickerCost');
  const numberOfClickers = document.querySelector('.numberOfClicks');
  const numberOfMultipliers = document.querySelector('.numberOfMultipliers')
  const multiplierCost = document.querySelector('.multiplierCost');
  


  const donutMaker = new DonutMaker(0, 0, 100, 10, 0);



  createDonutBtn.addEventListener("click", () => {
    donutMaker.clickDonut();
    donutMaker.updateDonutCount();

  });
  
  donutMultiplierBtn.addEventListener("click", () => {
    donutMaker.purchaseMultiplier();
    donutMaker.updateDonutCount();
    numberOfMultipliers.innerText = donutMaker.donutMultiplierCount;
    console.log('firing')
  });

  autoClickerBtn.addEventListener("click", () => {
    donutMaker.purchaseAutoClicker();
    donutMaker.updateDonutCount();
    donutMaker.addDonutToAutoClicker();
    numberOfClickers.innerText = donutMaker.autoClickerCount;
  });

  resetBtn.addEventListener('click', () => {
    location.reload();
  });




}