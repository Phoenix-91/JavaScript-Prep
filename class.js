class user {
 constructor(name, price) {
  this.name = name;
  this.price = price;
  console.log(`welcome ${this.name} to the world of programming and the price is ${this.price}`);
 }
}

const user1 = new user("Alice", 100);
const user2 = new user("Bob", 200);