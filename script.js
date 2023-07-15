/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr.map((element) => {
    //Check if the profession is developer
    if (element.profession === "developer") {
      return element;
    }
  });
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
    //Check if the profession is developer
    if (element.profession === "developer") {
      console.log(element);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "Md sarfraj", age: "25", profession: "Frontend Developer" };
  //Push the new employee to the array
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let noAdmin = arr.filter((element) => {
    //Check if the profession is not admin
    if (element.profession !== "admin") {
      return element;
    }
  });
  console.log(noAdmin);
}

function concatenateArray() {
  //Write your code here, just console.log
  let anotherArray = [
    { id: 5, name: "Raja Singh", age: "23", profession: "designer" },
    { id: 6, name: "Asif", age: "20", profession: "manager" },
    { id: 7, name: "Rohit", age: "25", profession: "tester" },
  ];
  //Concatenate the two arrays using the concat method
  let concatenatedArray = arr.concat(anotherArray);
  console.log(concatenatedArray);
}
