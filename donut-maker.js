const currentDonutCount = document.querySelector('#currentDonutCount')


class DonutMaker {

    constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplierCost, donutMultiplierCount) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplierCost = donutMultiplierCost;
        this.donutMultiplierCount = donutMultiplierCount;

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
        return this.donutMultiplierCount
    }

    clickDonut() {
        this.donutCount += 1 * this.donutMultiplierCount;
    }


    purchaseMultiplier() {
        if (this.donutCount >= this.donutMultiplierCost) {
            this.donutCount -= this.donutMultiplierCost;
            this.donutMultiplierCount *= 1.2;
            this.donutMultiplierCost *= 1.1;

        }
    }


    purchaseAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCount += 1;
            this.autoClickerCost *= 1.1;
        }
    }

    addDonutToAutoClicker() {
        if (this.autoClickerCount >= 1) {
            setInterval(() => {
                this.donutCount += (this.autoClickerCount * 1);
                currentDonutCount.innerText = this.getDonutCount();
            }, 1000);
        }
    }

    reset() {
        location.reload;
    }



}


export default DonutMaker;