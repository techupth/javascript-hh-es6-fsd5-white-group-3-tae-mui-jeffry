let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};
studentProfile.scores = {...studentProfile.scores, ...studentScores}
let newStudentProfile  = {...studentProfile}
console.log(newStudentProfile);
