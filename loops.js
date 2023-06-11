//loops in javascript is used to check or use each object in an array
//loops are used to repeatedly execute a block of code.

const data = [
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
    name: "Micheal",
    best_food: "Amale",
    school: "Ilorin",
    skill: "Backend engineer",
  },
];
//note: increment and decrement increase or decrease a variable by 1 and it is used by ++ or -- respectively

//for looop
for (let index = 0; index < data.length; index++) {
  console.log(`My name is ${data[index].name}`);
}
