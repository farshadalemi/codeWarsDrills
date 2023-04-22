const animals = {
  corpse: {
    head: "🗣️",
    hand: "🫳",
    foot: "🦶",
    eye: "👁",
    eat() {
      console.log("🍽️");
    },
    sleep() {
      console.log("😴");
    },
    hunt() {
      console.log("🩸");
    },
  },

  soule: {
    dream: "💤",
    wish: "🧞",
    scare: "😨",
    anxious() {
      console.log("😰");
    },
    happy() {
      console.log("🙂");
    },
    sad() {
      console.log("😞");
    },
  },
};

class Animal {
  corpse = {
    head: "🗣️",
    hand: "🫳",
    foot: "🦶",
    eye: "👁",
    eat() {
      console.log("🍽️");
    },

    sleep() {
      console.log("😴");
    },
    hunt() {
      console.log("🩸");
    },
  };

  soule = {
    dream: "💤",
    wish: "🧞",
    scare: "😨",
    anxious() {
      console.log("😰");
    },
    happy() {
      console.log("🙂");
    },
    sad() {
      console.log("😞");
    },
  };

  constructor(soule, corpse) {
    // console.log(soule, corpse);
    this.corpse.eye = corpse.eye;
  }

  setDream(dream) {
    this.soule.dream = dream;
  }
}

const rabbit = new Animal(animals.soule, animals.corpse);
console.log(rabbit.soule.dream);
rabbit.setDream("setare");
console.log(rabbit.soule.dream);
console.log(rabbit.corpse.eye);
