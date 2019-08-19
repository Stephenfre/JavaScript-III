/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of "this." will be the window/console object.  

* 2. IMPLICIT BINDING - When a fuction is called with a preceding dot, the object before the dot is "this".

* 3. NEW BINDING - WHneever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

* 4. EXPLICIT BINDING - When .call or .apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayMyName(name) {
  console.log(this);
  return name;
}
sayMyName("Destinys Child");
// code example for Window Binding

// Principle 2
const theWeeknd = {
  lyrics: "So call out",
  callMyName: function(name) {
    console.log(`${this.lyrics} my name ${name}`);
  }
};
theWeeknd.callMyName("-The Weeknd");
// code example for Implicit Binding

// Principle 3
function friends(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const stephen = new friends(" Summer");
const summer = new friends(" Stephen");

stephen.speak();
summer.speak();
// code example for New Binding

// Principle 4
function Avengers(friend2) {
  this.friendOne = "Hello ";
  this.friendTwo = friend2;
  this.speak = function() {
    console.log(this.friendOne + this.friendTwo);
    console.log(this);
  };
}

const captainAmerica = new Avengers("Captain America");
const ironMan = new Avengers("Ironman");

captainAmerica.speak.call("Ironman");
ironMan.speak.apply("CaptainAmerica");

captainAmerica.speak();
ironMan.speak();
// code example for Explicit Binding
