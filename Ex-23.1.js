//! Answer the following questions:

//? Question 1:
//* In your own words what will this point to and why?
//* (Note this is the global scope)

console.log(this);

//! Answer: to window, window is invoking the func console.

//? Question 2:
//* a. In your own words what will this point to and why.
//* b. How can you fix this code.

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
  //! like this:
  //? greet () {
  //?   console.log(`Hello ${this.name}`);
  //? },
};
myObj.greet();

//! Answer:
//* a. to the window also, arrow function dont get this of their own.
//* b. i would change the function from arrow to normal function with the "function keyword" or like i did above without a key.

//? Question 3:
//* In your own words what will this point to and why?

const myFuncDec = function () {
  console.log(this);
};

//! Answer: to the window, the window would be the one to invoke it once its called

//? Question 4:
//* In your own words what will this point to and why?

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

//! Answer: to the window.. its a global scope, window is invoking it, also its an arrow function

//? Question 5:
//* a. In your own words what will this point to and why.
//* b. How can you fix this code.

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

//! Answer:
//* a. it will point to the window, because it is an arrow function.
//* b. well first we need an html file with an element with that class to work, then we need to pass the event type, like eg. "keydown", and lastly change the arrow function to, function () {...} and then this would point to that element we selected.
