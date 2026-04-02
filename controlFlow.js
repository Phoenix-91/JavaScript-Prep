// // logic flow and control flow
// if (true) {
//     console.log("This is true");
// }   
// else {
//     console.log("This is false");
// }
// const userName = "John Doe";

// if(userName === "John Doe") {   
//     console.log("User found");
// }
// else {
//     console.log("User not found");
// }

// const age = 2;
// if(age <= 18){
//     console.log("You are a minor"); 
//     if(age <= 12){
//         console.log("You are a child");
//     }
// }

//     else{
//         console.log("your age is not listed");
//     }
// const temperature = 10;
// if (temperature > 30) {
//     console.log("It's a hot day")
// }
// else if (temperature < 15) {
//     console.log("It's a pleasant day");
// }



//<------Scope------------------->
// const age =5
// const getAnimalDetails = (animal) => {
//  if (animal.age === 5 ){
//     console.log("animal age is matched")
//     console.log(`may be it is ${age} years old`)
//  }
// else{
//     console.log("animal age is not matched")
// }
// }

// getAnimalDetails({ age: 9 })

// //Lets check balance using nested if else
//  const balance =1000;

// if(balance > 500) {
//     console.log("You have sufficient balance");
//     if(balance<=5000){
//         console.log("Your balance is between 500 and 5000");
//     }
//     else{        console.log("Your balance is greater than 5000");
//     }}

//     // _________________&& or || operator______________________

    // const isLoggedIn = true;
    // const hasSubscription = false;  

    // if(isLoggedIn && hasSubscription) {
    //     console.log("You can access the content");
    // }   
    // else if(isLoggedIn && !hasSubscription) {

    //     console.log("Please subscribe to access the content");
    // }
    // else {
    //     console.log("Please log in to access the content");
    // }

// now we are going to use || pipe operator
  const isNumber = true;
  const isString = false;

  if(isNumber || isString) {
    console.log("You can use either number or string");
  } 
    else {
    console.log("You cannot use either number or string");
    }