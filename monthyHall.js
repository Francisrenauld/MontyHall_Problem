class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];

    }

    calculStatsDoorChange(numberOfGame) {

        let sum = 0;
        let averageGameWin = 0

        for (var i = 0; i < numberOfGame; i++) {

            let game = new Game()

            game.doOneGameNoChange()

            if (game.isGameWonNotChange() == true) {
                this.gamesWithSameDoorWon.push(game)

            }
            if (game.isGameWonNotChange() != true) {
                this.gamesWithSameDoorLost.push(game)

            }
        }

        for (var i = 0; i < this.gamesWithSameDoorWon.length; i++) {

            sum += 1;
        }

        averageGameWin = sum / numberOfGame

        averageGameWin = averageGameWin * 100

        return Math.ceil(averageGameWin) + "%"
    }

    calculStatsDorrNotChange(numberOfGame) {

        let sum = 0;
        let averageGameWin = 0

        for (var i = 0; i < numberOfGame; i++) {

            let game = new Game()

            game.doOneGameWithChange()

            if (game.isGameWonChange() == true) {
                this.gamesWithDoorChangeWon.push(game)

            }
            if (game.isGameWonChange() != true) {
                this.gamesWithDoorChangeLost.push(game)

            }
        }

        for (var i = 0; i < this.gamesWithDoorChangeWon.length; i++) {

            sum += 1;
        }

        averageGameWin = sum / numberOfGame

        averageGameWin = averageGameWin * 100

        return Math.ceil(averageGameWin) + "%"
    }
}

class Game {
    constructor() {

        let door1 = new Door(1, false);
        let door2 = new Door(2, false);
        let door3 = new Door(3, false);

        this.doors = [door1, door2, door3];
        this.doorCar;
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;

    }

    doOneGameWithChange() {

        this.getRandomDoorCar()
        this.pickRandomDoor()
        this.openGoatDoor()
        this.stayOrSwitchWithSameDoor()

        return this.isGameWonChange()

    }

    doOneGameNoChange() {

        this.getRandomDoorCar()
        this.pickRandomDoor()
        this.openGoatDoor()

        return this.isGameWonNotChange()

    }

    getRandomDoorCar() {

        var rndInt1 = Math.floor(Math.random() * 3) + 1;
        this.doorCar = this.doors[rndInt1 - 1]
        this.doorCar.isCar = true;

    }

    pickRandomDoor() {

        var rndInt2 = Math.floor(Math.random() * 3) + 1;
        this.doorPicked = this.doors[rndInt2 - 1]

    }

    openGoatDoor() {

        for (var i = 1; i <= this.doors.length; i++) {

            if (this.doors[i - 1] != this.doorPicked && this.doors[i - 1] != this.doorCar) {

                this.doors[i - 1].opened = true;
                this.openedGoatDoor = this.doors[i - 1]
            }
        }
    }

    stayOrSwitchWithSameDoor() {

        this.finalPick = this.doors.find(door => door.opened == false && door.number != this.doorPicked.number)

    }

    isGameWonChange() {

        this.won = false;

        if (this.finalPick == this.doorCar) {

            this.won = true;

        }
        return this.won;
    }
    isGameWonNotChange() {

        this.won = false;

        if (this.doorPicked == this.doorCar) {

            this.won = true;

        }
        return this.won;
    }
}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;
    }
}

let stats = new Statistics()

console.log(stats.calculStatsDorrNotChange(10000))
console.log(stats.calculStatsDoorChange(10000))