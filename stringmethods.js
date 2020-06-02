let str = "hello to welcome to";
let str1= "banglore";
console.log(str.length);
console.log(str.indexOf("to"));
console.log(str.lastIndexOf("to"));
console.log(str.lastIndexOf("br"));
console.log(str.indexOf("br"));
console.log(str.indexOf("to" , 8));
console.log(str.lastIndexOf("to" , 8));
console.log("this is by search" + " "+ str.search("to"));
console.log(str.slice(5,9));
console.log(str.slice(-9,-5));
console.log("string slice " + " " + str.slice(9));
//using replace method
console.log(str.replace("to", "from"));
console.log(str);
console.log(str.replace(/to/i,"from"));
console.log(str.replace(/to/g,"from"));
//converting to upper to lower or viceversa 
console.log(str.toUpperCase());
//console.log(str);

//conatinating of two strings
console.log(str+str1);
console.log(str.concat(str1));
let trimstr = "  hello this    is brahma   ";
console.log(trimstr.trim());

// extracting string characters 
console.log(str);
console.log("this is charAt method 4th position is" + " " +str.charAt(4));
console.log("this is unicode of that character" + "" +str.charCodeAt(4));
console.log(str[4]);
//split 
let splitstr = str.split(" ")
console.log(splitstr);