// task -1: console log the secondary school location of Sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

//console.log(data.Sophia.study[1].secondary[1]);

// task-2: console .log  output: Petersburg, Herry

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

//console.log(students["2222"].address.city, students["3333"].name);

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

//console.log(data2.data[0].bookDetails.name);

// Problem: 01

const oddArray = [1, 3, 5, 7, 9, 11];

let evenArray = [];

for (let odd of oddArray) {
  odd = odd + 1;
  evenArray.push(odd);
}
//console.log(evenArray);

const evenNumbers = (num) => num + 1;
const result = oddArray.map(evenNumbers);
//console.log(result);

// Problem: 02

const numbers = [50, 20, 25, 27, 30, 35, 78, 33, 90, 33, 101, 100];
const getNumber = numbers.filter((num) => num % 10 == 0);
const getNum = numbers.find((num) => num % 10 == 0);
// console.log(getNumber);
// console.log(getNum);

// Problem: 03

const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "junior" },
  { name: "Sobuj", age: 30, position: "Senior" },
];

// console.log(instructor[0].position);
// const result1 = instructor[0].position.toLowerCase();
const seniorInstructor = instructor.filter((n) => n.position == "Senior");

//console.log(seniorInstructor);

// Problem: 04

const peoples = [
  { name: "Mina", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 20 },
  { name: "Sonchita", age: 15 },
];

let sum = 0;
for (person of peoples) {
  //sum += person.age;
  sum = sum + person.age;
}
//console.log(sum);



/*
// Quiz question
const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);

const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);

const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y);

function min(nums) {
  return Math.min(nums);
}
console.log(min([1, 3, 2]));

const cube = (x) => x * x * x;
console.log(cube(2));
*/
