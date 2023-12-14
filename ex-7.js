const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.english;
console.log(result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores.english;
//console.log(result2 == undefined ? `English score is not defined` : result2);
console.log(result2 == employee2 || "English score is not defined")
