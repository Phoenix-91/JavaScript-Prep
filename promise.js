// //this is the promise.js file here i am revising the promise concept in js
// const promise1 = new Promise(function(resolve, reject) {
//   // do an async task and then call resolve or reject
//   //db call, cryptography, network call

//   setTimeout(() => {
//     console.log("Async task is completed");
//    resolve()
//   }, 10000);
// })

// promise1.then(function() {
//   console.log("Promise is resolved");
// }).catch(function() {
//   console.log("Promise is rejected");
// });



//andother one 
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("okay ,task is completed");
//          resolve();
//     }, 1000);
 
// })
// .then(function() {
//     console.log("Promise is resolved");
// });

// one more

// const promise3 = new Promise (function(resolve, reject) {
//     setTimeout(() => {

//         resolve({username : "saurav", email : "saurav@example.com"});
//     }, (1000));
// })

// promise3.then(function(user) {
//     console.log(user);
//     console.log(user.username);
//     console.log(user.email);
// }).catch(function() {    console.log("Promise is rejected");
// });

// const promise4 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//        let error = true;
//        if (!error) {
//         resolve({username : "saurav", email : "saurav@example.com"});
//        } else {
//         reject("Error occurred");
//        }
//     }, 1000);})

// promise4.then(function(user) {

//     console.log(user);
//     return user.username;
// } )
// .then(function(username) {
//     console.log(username);
// })
// .catch(function(error) {
//     console.log(error);
// })  


//  async await 
async function getTodo() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        console.log(data);

    }
    catch(error){
        console.log(error);
    }
    
}
