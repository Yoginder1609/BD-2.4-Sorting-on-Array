const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

//BD 2.4
//1

let ages = [25, 30, 18, 22, 27]

function sortAscendingOrder(age1, age2) {   
  return age1 - age2;
}

app.get("/ages/sort-ascending", (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAscendingOrder);
  res.json(agesCopy);
});

//2

function sortDescendingOrder(age1, age2) {
  return age2 - age1;
}

app.get("/ages/sort-descending", (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortDescendingOrder);
  res.json(agesCopy);
});


//3

let students = [
  {"name": "Rahul", "rollNO": 101, "marks": 85},
  {"name": "Sita", "rollNO": 102, "marks": 95},
  {"name": "Amit", "rollNO": 103, "marks": 70}
]

function sortStudentMarksInDescendingOrder(student1, student2) {
  return student2 - student1;
}

app.get ("/students/sort-by-marks-descending", (req, res) => {
  let studentsCopy = students.slice();
  studentsCopy.sort(sortStudentMarksInDescendingOrder);
  res.json(studentsCopy);
});

//4

let cars = [
  {"make": "Maruti", "model": "Swift", "mileage": 15},
  {"make": "Hyundai", "model": "i20", "mileage": 18},
  {"make": "Tata", "model": "Nexon", "mileage": 20}
]

function sortCarMileageInDescendingOrder(car1, car2) {
  return car2.mileage -car1.mileage;
}

app.get("/cars/sort-by-mileage-descending", (req, res) => {
 let carsCopy = cars.slice();
 carsCopy.sort(sortCarMileageInDescendingOrder);
 res.json(carsCopy);
});













































app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
