class Die {
  constructor(sides) {
    if (sides < 4 || sides > 20) {
      throw new Error('sides must be greater than 3 and less than 21');
    }
    this.sides = sides;
  }
  roll() {
    return Math.ceil(Math.random() * this.sides);
  }
}

class Cup {
  constructor(array) {
    let arrayBuilder = [];
    for (let i = 0; i < array.length; i++) {
      arrayBuilder.push(new Die(array[i]));
    }
    this.dice = arrayBuilder;
  }
  spill() {
    let diceRolledValues = [];
    for (let i = 0; i < this.dice.length; i++) {
      diceRolledValues.push(this.dice[i].roll());
    }
    return diceRolledValues;
  }
}

const myCup = new Cup([4, 6, 10]);

// console.log(myCup.spill());

console.log();
