const currentDonutCount = document.querySelector('.currentDonutCount')
const clickerCost = document.querySelector('.clickerCost')
const multiplierCost = document.querySelector('.multiplierCost')
const donutsPerClick = document.querySelector('.donutsPerClick')



class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.donutMultiplierCost = 10;
        this.donutMultiplierCount = 1;

    }


    getDonutCount() {
        return this.donutCount;

    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    getDonutMultiplierCost() {
        return this.donutMultiplierCost;
    }

    getDonutMultiplierCount() {
        return this.donutMultiplierCount;
    }

    clickDonut() {
        // this.donutCount += 1;
        this.donutMultiplierCount = this.donutMultiplierCount * 1;
        this.donutCount += this.donutMultiplierCount;
        

    }


    purchaseMultiplier() {
        if (this.donutCount >= this.donutMultiplierCost) {
            this.donutCount -= this.donutMultiplierCost;
            this.donutMultiplierCount += 1;
            this.donutMultiplierCost = this.donutMultiplierCost * 1.1;
            

        }
    }


    purchaseAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            this.donutCount = this.donutCount - this.autoClickerCost;
            this.autoClickerCount += 1;
            this.autoClickerCost  = this.autoClickerCost* 1.1;
        }
    }

    addDonutToAutoClicker() {
        if (this.autoClickerCount >= 1) {
            setInterval(() => {
                this.donutCount += this.donutMultiplierCount * this.autoClickerCount;
                this.donutCount += this.autoClickerCount * 1;
                currentDonutCount.innerText = this.getDonutCount();
            }, 1000);
        }
    }

    updateDonutCount() {
        currentDonutCount.innerText = Math.round(this.donutCount);
    }

    reset() {
        location.reload;
    }



}


export default DonutMaker;