//arrow fucntion or this keyword
const user ={
 name : "saurav",
 price : 199,
 welcomeMessage: () =>{
    console.log(`welcome ${this.name} to the world of programming and the price is ${this.price}`); 
}
}

user.welcomeMessage();
user.name = "param";
user.price = 299;
user.welcomeMessage();