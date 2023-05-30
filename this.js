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
