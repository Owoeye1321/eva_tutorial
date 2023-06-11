//String datatype is used to store anything
const anything = "I love having fun";
console.log(anything);

//float datatypes are used for data with decimal points, the decimal points are limited
const float = 54.0477574;
console.log(float);

//Integer datatypes are used to declare whole numbers
const integer = 56;
console.log(integer);

//double data type, you can have so many decimal points as possible
const double = 457857.08484784848;
console.log(double);

//boolean is a data type that take in either true or false
const boolean = false;
console.log(boolean);

//Object datatype is used to define or categorise something, object could also be an instance of a class
//Object are thing that has more than one thing you could categorise them with
//object is used for gouping
const object = {
  name: "Samuel",
  best_food: "fried rice",
  school: "kwasu",
  skill: "fullstack engineer",
};
console.log(object);
console.log(object.school);
console.log(
  `Hello, my name is ${object.name}, my best food is ${object.best_food}, i graduated from ${object.school} and i'm a ${object.skill}`
);

//Array data types is used to store one or more objects
const arrayVariable = [
  {
    name: "Samuel",
    best_food: "fried rice",
    school: "kwasu",
    skill: "fullstack engineer",
  },
  {
    name: "Eva",
    best_food: "Jollof rice",
    school: "Imo",
    skill: "frontend engineer",
  },
  {
    name: "Samuel",
    best_food: "Amale",
    school: "Ilorin",
    skill: "Backend engineer",
  },
];

console.log(arrayVariable[1]);
console.log(
  `Hello, my name is ${arrayVariable[1].name}, my best food is ${arrayVariable[1].best_food}, i graduated from ${arrayVariable[1].school} and i'm a ${arrayVariable[1].skill}`
);
