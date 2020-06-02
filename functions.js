// function declaration
function firstFunction(){
console.log("this is function decloration");
}
firstFunction();
function sample(a,b){
    let sum = a*b;
    return sum;
}
var x = sample(5,6);
console.log(x);
//function expression 
var x = function (a,b){
let sum = a+b;
return sum;
}
console.log(x(3,5));

// javascript functions are hoisted
myFunction(5);


function myFunction(y) {
  multi= y * y;
  console.log(multi);
}
 //self invoking function
 (function(){
     console.log("self invoking function");
 })();

 // arrow function
 const arrowfun = (a,b) => a*b;
 console.log(arrowfun(10,3));
 let arr = [2,4,6,8,1];
let arr1 = Math.max(arr);
console.log("hello this is math " + arr1);