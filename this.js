Important question on this 
const object1 = {
  nam: "sethu",
  getMessage(){
    console.log(this.nam);
  },
};
setInterval(object1.getMessage, 1000); // inside settimout and setinterval this will point to window so this.nam is undefined
setTimeout(object1.getMessage, 1000); // inside settimout and setinterval this will point to window so this.nam is undefined

how to fix using settimeout
setTimeout(()=>object1.getMessage(), 1000);


// JAVASCRIPT this is used different scenarios's

// How JavaScript Implicit Binding Works? => this

let blog = {
  name: "blog",
  address: "codejunction",
  message: function () {
    console.log(this);
    console.log(`${this.name} blogs on ${this.address}`);
  },
};

blog.message();

// ==============================================================

// How JavaScript Implicit Binding Works? => this

function greeting(obj) {
  obj.logMsg = function () {
    console.log(obj);
    console.log(`${this.name} is ${this.age} years old!`);
  };
}

const tom = {
  name: "tom",
  age: 3,
};

greeting(tom);

tom.logMsg();

// =============================================================

// How Javascript Explicit binding works? => this

// We have seen that JavaScript creates an environment to execute the code we write.
// It takes care of the memory creation for variables, functions, objects, and so on in the creation phase.
// Finally it executes the code in the execution phase.
// This special environment is called the Execution Context.

// There can be many such environments (Execution Contexts) in a JavaScript application.
// Each execution context operates independently from the others.

// But at times, we may want to use stuff from one execution context in another.
// That is where explicit binding comes into play.

// In explicit binding, we can call a function with an object
// when the function is outside of the execution context of the object.

// There are three very special methods, call(), apply() and bind() that help us
// achieve explicit binding.

// call() - explicit binding - the arguments need to be passed one by one –
// which is not a smart way of doing things! That's where our next method, apply(), comes into the picture.

const getname = function () {
  console.log(this.name);
};

const usr = {
  name: "tom",
};

getname.call(usr);

// =========================================================================
let getName1 = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user = {
  name: "Tapas",
  address: "Bangalore",
};

let hobbies = ["Swimming", "Blogging"];

getName1.call(user, hobbies[0], hobbies[1]);

// =========================================================================

// apply() => Here we are able to pass an array of arguments, which is much more convenient than passing them one by one

let getName = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user1 = {
  name: "Tapas",
  address: "Bangalore",
};

let hobbies1 = ["Swimming", "Blogging"];

getName.apply(user1, hobbies1);

// =========================================================================

// Bind() => The bind() method is similar to the call() method but with one difference.
// Unlike the call() method of calling the function directly, bind() returns a brand new function and we can invoke that instead.

let getName2 = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user2 = {
  name: "Tapas",
  address: "Bangalore",
};

let hobbies2 = ["Swimming", "Blogging"];
let newFn = getName2.bind(user2, hobbies2[0], hobbies2[1]);

newFn();

//===========================================================

// The Javascript new(keyword) Binding

// A new keyword is used to create an object from the constructor function.
let Cartoon = function (name, character) {
  this.name = name;
  this.character = character;
  this.log = function () {
    console.log(this.name + " is a " + this.character);
  };
};
// You can create objects using the new keyword  like this:

let tom1 = new Cartoon("Tom", "Cat");
let jerry = new Cartoon("Jerry", "Mouse");
// When a function is invoked with the new keyword, JavaScript creates an internal this object(like, this = {})
// within the function. The newly created this binds to the object being created using the new keyword.

//let tom2 = new Cartoon('Tom', 'Cat');
// Here the function Cartoon is invoked with the new keyword. So the internally created this will be bound to the new object being created here, which is tom.

//======================================================================

// JavaScript Global Object Binding

//What do you think will be the output of the code below? What is this binding to here?

let sayName1 = function (name) {
  console.log(this.name);
};

window.name = "Tapas";
sayName1(); // tapas
// IMPORTANT
// If the this keyword is not resolved with any of the bindings, implicit, explicit or new, then the this is bound to the window(global) object.

// use strict mode

// There is one exception though. JavaScript strict mode does not allow this default binding.

"use strict";
function myFunction() {
  return this;
}
//In the above case, this is undefined.

// HTML Event Element Binding in JavaScript

//In HTML event handlers, this binds to the HTML elements that receive the event.

<button onclick="console.log(this)">Click Me!</button>
//The is the output log in the console when you click on the button:

"<button onclick='console.log(this)'>Click Me!</button>"

//You can change the button style using the this keyword, like this:

<button onclick="this.style.color='teal'">Click Me!</button>

//But be mindful when you call a function on the button click and use this inside that function.

<button onclick="changeColor()">Click Me!</button>

//and the JavaScript:

function changeColor() {
  this.style.color='teal';
}
