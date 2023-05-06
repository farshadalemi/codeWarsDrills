const sum = (x, y, z) => {
  return x + y + z;
};

console.log(sum(2, 3, 4));

const division = (x, y) => {
  return y / x;
};

console.log(division(2, 10));

const howAreYou = (req) => {
  res = {
    OK: "I am good",
    FINE: "I am doing Fine",
    NOTOK: "I am not good",
    BAD: "I feel sick ",
  };
  if (req === "How are you?") {
    return res.OK;
  } else if (req === "How are you doing") {
    return res.FINE;
  } else if (req === "How do you feel?") {
    return res.BAD;
  } else {
    return res.NOTOK;
  }
};
console.log(howAreYou("How are you doing"));
console.log(howAreYou("How do you feel?"));
console.log(howAreYou("How are you?"));
console.log(howAreYou("How are you today?"));

const square = (x) => {
  return x * x;
};

console.log(square(2));

const isEven = (num) => num % 2 === 0;

const isOdd = (numberIn) => numberIn % 2 !== 0;

console.log(isEven(10));
console.log(isOdd(12));

const powerTwo = (num) => num ** 2;

console.log(powerTwo(10));

const makeCard = () => ({ suit: "card", val: 3 });
console.log(makeCard());

const invoices = [
  {
    client: "Alice",
    amount: 400.8,
    hasPaid: true,
  },
  {
    client: "Madish",
    amount: 200.0,
    hasPaid: false,
  },
  {
    client: "Leo",
    amount: 900.0,
    hasPaid: false,
  },
];

const stillOwed = invoices
    .filter(function(invoice){
    return !invoice.hasPaid;
    })

    .reduce(function(total, invoice) {
     return total + invoice.amount   
    }, 0);

console.log(stillOwed);

// Arrow Version
const stillOwing = invoices
    .filter(invoice => !invoice.hasPaid)
    .reduce((total, invoice) => total + invoice.amount, 0)

console.log(stillOwing);

const person = {
    name: "Farshad",
    sayHi: function(){
        console.log(this.name, 'says hi!');
    },
    sayBy: () =>{
    console.log(this.name, 'says by!');
    }
}

person.sayHi();
person.sayBy();

 