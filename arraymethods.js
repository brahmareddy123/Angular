// count=0;
// setInterval() => {
// document.getElementById("").innerHTML=cars[count%(cars.length)];count++;

// },1000);


let cars = ["ferrari",
    " audi",
    "benz",
    "fait",
    2016];
// console.log(cars);
//console.log(cars[0]);

let student ={
    details :[{
        name:"brahma",
        college:"ucet",
        year:2012,
        age:20
    }],

    postMessage: "welcome"
};
console.log(student.details[0].name);

fruits = ["apple", "mango11", "orange", "papaya"]
fLength = fruits.length;
let text = "<ul>";
// for(let i=0;i<fLength;i++){
// text +="<li>" + fruits[i] +"</li>" ;

// }

// fruits.forEach(myFunction);
// text += "</ul>";
// function myFunction(val) {
//     text += "<li>" + val + "</li>" + "<br>";
// }



//console.log(text);
//document.getElementById("arrayList").innerHTML = text;
console.log(fruits.toString());
console.log(fruits.join("@"));


//push and pop methods

// let array1 = ["ravi" , "naveen" , "mahesh" , "pavan" , "chari"];
// let array2 = array1.pop();
// console.log(array2);
// console.log(array1);
// let array3=array1.push("nagi");
// console.log(array3);
// console.log(array1);


//shift and unshift

let myshiftarray = ["banana", "appale", "mango", "orange", "grape"];
let myshiftarray1 = myshiftarray.shift();
//console.log(myshiftarray1);
console.log(myshiftarray[1]);
let myshiftarray2 = myshiftarray.unshift("papaya");
console.log(myshiftarray[1]);
//console.log(myshiftarray2);
myshiftarray[myshiftarray.length] = "kiwi";
console.log(myshiftarray);
let mydeletearray = delete myshiftarray[2];

console.log(myshiftarray);

// concating arrays
let boys = ["ravi", "ramana", "abhi"];
let girls = ["abc", "cdf", "fgr"];
let family = boys.concat(girls);
console.log(family);

// slice method
let myslicearray = ["ravi", "ramana", "abhi", "raghyu"];
//console.log(myslicearray.slice(1));
//console.log(myslicearray.slice(1,3));

var points = [25, 130, 52, 14, 68, 22];
//console.log(mysortArray.sort());
function myFunction() {
    
    points.sort(function(a, b){return a - b});
    console.log(points);
  }
  myFunction();
//console.log(mysortArray);