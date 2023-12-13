// Exercise #7: Optional Chaining
const employee1 = {
  name: "John",
  age: 20,
};

let result1;
if (employee1.scores) {
  result1 = employee1.scores.english;
}

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

let result2;
if (employee2.scores && employee2.scores.english) {
  result2 = employee2.scores.english;
} else {
  result2 = "English score is not defined";
}

console.log(result1); // Output: undefined
console.log(result2); // Output: English score is not defined
