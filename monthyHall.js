class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }

    /*   calculStats() {

          for (var i = 0; i < 20; i++) {

              let game = new Game()

              game.doOneGame()

              if (game.isGameWon() == true && game.doorPicked == game.finalPick) {
                  this.gamesWithSameDoorWon.push(game)
              }
          }
          return this.gamesWithSameDoorWon


      } */
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

        this.getRandomDoorCar()
        this.pickRandomDoor()
        this.openGoatDoor()
        this.stayOrSwitchWithSameDoor()
    }

    /*  doOneGame() {

         this.getRandomDoorCar()
         this.doorPicked = this.pickRandomDoor()
         this.openGoatDoor()
         this.finalPick = this.stayOrSwitchWithSameDoor()
         return this.isGameWon()


     } */

    getRandomDoorCar() {

        var rndInt1 = Math.floor(Math.random() * 3) + 1;
        this.doorCar = this.doors[rndInt1 - 1]
        this.doorCar.isCar = true;
        return this.doorCar.number

    }

    pickRandomDoor() {

        var rndInt2 = Math.floor(Math.random() * 3) + 1;
        this.doorPicked = this.doors[rndInt2 - 1]
        return this.doorPicked
    }

    openGoatDoor() {


        for (var i = 1; i < 4; i++) {

            if (this.doors[i - 1] != this.doorPicked && this.doors[i - 1] != this.doorCar) {

                this.doors[i - 1].opened = true;
                this.doors[i - 1].openedGoatDoor = true;

                return this.doors.number
            }
        }
    }

    stayOrSwitchWithSameDoor() {



        for (let i = 0; i < 4; i++) {


            if (this.doors[i - 1] != this.doors.opened && this.doors[i - 1] != this.doorCar) {

                this.finalPick = this.doors[i - 1]

                return this.finalPick.number

            }

        }

    }


    /* isGameWon() {

        this.won = false;

        if (this.doors[0].finalPick == true && this.doors[0].isCar == true) {

            this.won = true;

            return this.won + ": Game won with door 1"

        }
        if (this.doors[1].finalPick == true && this.doors[1].isCar == true) {

            this.won = true;

            return this.won + ": Game won with door 2"

        }
        if (this.doors[2].finalPick == true && this.doors[2].isCar == true) {

            this.won = true;

            return this.won + ": Game won with door 3"

        }
        if (this.doors[0].finalPick == true && this.doors[0].isCar == false) {

            this.won;

            return this.won + ": Game loose with door 1"

        }
        if (this.doors[1].finalPick == true && this.doors[1].isCar == false) {

            this.won;

            return this.won + ": Game loose with door 2"

        }
        if (this.doors[2].finalPick == true && this.doors[2].isCar == false) {

            this.won;

            return this.won + ": Game loose with door 3"

        }

    }
 */
}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;
    }
}

//let stats = new Statistics()

let game = new Game()


//console.log(game.stayOrSwitchWithSameDoor())
//console.log(game.pickRandomDoor())
console.log(game.openGoatDoor())
//console.log(game.stayOrSwitchWithSameDoor())
//console.log(game.isGameWon())

//console.log(stats.calculStats())