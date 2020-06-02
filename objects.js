var obj={name:"brahma", college:"ucet" , age:26};
console.log(obj);
console.log("name is :" + obj.name);
console.log("college is :" +obj["college"]);
console.log(obj.length);
// var array=["brahma","reddy",27];
// console.log(array);
// console.log(array.length);
var person = {
    name : "ram",
    surname:"hello",
    college: "ucet",
    year: 2012,
    fullname: function(){
        return this.name + " " + this.surname;
    }
};
console.log(person.fullname);
//add new property to the object
person.branch="cse";
//delete a property of object
delete person.college;
//console.log(person);
console.log(Object.values(person));
//let mynewobj = {};
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log("this by bracket notaytion " + "  " +txt);

