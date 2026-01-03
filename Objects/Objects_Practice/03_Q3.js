// create and nested object for school with the student and grades.

const school = {
  stdDet: {
    name: "Akshay",
    stdGrade: {
      maths: "A",
      Hindi: "B",
      English: "K",
    },
    name: "Kajal",
    stdGrade: {
      maths: "A",
      Hindi: "B",
      English: "K",
    },
  },
};

console.log(school["stdDet"]["name"])

