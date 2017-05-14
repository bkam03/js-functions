/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
var numberToString = function(num){
  return num.toString();
};

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var increase = function(num){
  return ++num;
};

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

var decrease = function(num){
  return --num;
};

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

var add = function(x,y){
  return x + y;
};

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

var subtract = function(x,y){
  return x - y;
};

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

var multiply = function(x,y){
  return x * y;
};

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

var divide = function(x,y){
  return x/y;
};

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

var square = function(x){
  var square = x * x;
  return square;
};

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

var calculate = function(str,x,y){
  var operator = "";
  var result = null;
  switch(str) {
    case "add":
      operator = " + ";
      result = x + y;
      break;
    case "subtract":
      operator = " - ";
      result = x - y;
      break;
    case "multiply":
      operator = " * ";
      result = x * y;
      break;
    case "divide":
      operator = " / ";
      result = x / y;
      break;
    default:
      break;
  }
  console.log(x + operator + y + " = " + result);
  return result;
};

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

var isGreaterThan=function(a,b){
  return (a>b);
};

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

var isLessThan = function(a,b){
  return a < b;
};

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

var areEqual = function(a,b){
  return a === b;
};

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

var minimum = function(x,y){
  if(x < y) {
    return x;
  } else {
    return y;
  }
};

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

var maximum = function(x,y){
  if(x>y) {
    return x;
  } else {
    return y;
  }
};

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

var isEven = function(n){
  if(n%2 === 0){
    return true;
  }else {
    return false;
  }
};

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

var isOdd = function(n){
  if(n % 2 === 1 || n % 2 === -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
var letterGrade = function(score,total){
  var grade = "";
  var percent = score/total * 100;
  if(percent >= 90) {
    grade = "A";
  } else if(percent >= 80){
    grade = "B";
  } else if(percent >= 70){
    grade = "C";
  } else if(percent >= 60){
    grade = "D";
  } else if(percent >= 0){
    grade = "F";
  } else {
    grade ="Invalid";
  }
  return grade;
};

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

var incrementReviews = function(restaurantObj){
  if (restaurantObj.hasOwnProperty("reviews")){
    restaurantObj.reviews += 1;
  } else {
    restaurantObj.reviews = 1;
  }
  return restaurantObj;
};

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

