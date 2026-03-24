// function sayMyName() {
//     console.log("My name is John Doe");
// }
//  sayMyName();

// function addingTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addingTwoNumbers(5, 10);


// function addingTwoNumbers(num1, num2) {
//     const result = num1 + num2;
//     console.log(result);
// }
// addingTwoNumbers(5, 10);
// addingTwoNumbers(20, 30);

// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }
// const login= (loginUserMessage("John Doe"));
// console.log(login);

// if(userName === "John Doe") {
//    console.log(loginUserMessage(userName));
// }
// else{    console.log("User not found");}


// next is rest operator , aur like function mei multiple values kaise pasas krte hai ,


// function calculatecartPrice(...num1) {
//     return num1}

//     console.log(calculatecartPrice(200,300,240,3000));
    

// how to pass object and use it??

// const user = {
//     name: "param",
//     price: 199
// }

// function handleObject(user){
//     console.log(`name is ${user.name} and price is ${user.price}`);
// }
// handleObject(user);


// const students={
//     name: "saurav",
//     age: 22,
//     course: "MCA"
// }

// function StudentHandler(student){
//     console.log(`first student name is ${student.name} and the age is ${student.age} and the course is ${student.course}`);
// }

// StudentHandler(students);


// now how to retreive any value from array 

const myArray = [1, 2, 3, 4, 5];

function gertArrayValue(myArray) {
    return myArray[2];
}

console.log(gertArrayValue(myArray));