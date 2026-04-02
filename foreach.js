// in which i am going to revise  foreach loop immplementation 

// const coding = ["javascript", "python", "ruby", "java"];
// coding.forEach( function  (item) {
//     console.log(item);
// });


// const states =["seoul", "tokyo", "new york", "london"];
// states.forEach(function(statesTaker){
//     console.log(statesTaker);
// });


//_______________arrow function in foreach loop______________________
  
// const states =["seoul", "tokyo", "new york", "london"];
// states.forEach((statesTaker)=>{
//     console.log(statesTaker);
// });


// function numPrinter(num){
//     console.log(num);
// }

// coding.forEach(numPrinter);

// coding.forEach((item, index, arr) => {
//     console.log(`the value is ${item} and the index is ${index} and the array is ${arr}`);
// });


//----------------------------------map and forEach loop-----------------------------
//  const coding ={
//     js: "javascript",
//     py: "python",
//     rb: "ruby",
//     java: "java",
//     html: "html"
//  };
// function printValue(item){
// console.log(coding[item]);
// }

// printValue("js");
 

// const coding =[{
//     langauge: "javascript",
//     extesion: "js",
// }];

// coding.forEach((item)=>{
//     console.log(item.langauge);
// })


// coding =["jaava", "python", "ruby", "java"];
// const result = coding.forEach((item   ) => {
//     console.log(item.length 
//     );
// });

// function printValue(itemMaker){
//     console.log(itemMaker);
// }

// printValue(result);


//----filter option in foreach loop

// const myarr[1, 2, 3, 4, 5];
// const numer= myarr.filter((num)=>{
//     return num > 3;

// })
// console.log(numer);


const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    genre: "Self-help",
    available: true
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    genre: "Finance",
    available: true
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    genre: "Fiction",
    available: false
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    price: 450,
    genre: "Productivity",
    available: true
  }
];

const mybooks=books.filter( (bk)=>{ return bk.available === true; } )
console.log(mybooks);











