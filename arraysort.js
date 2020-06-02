
let points = [25, 130, 52, 14, 68, 22];
//console.log(points.sort());
//console.log(points.reverse());

function myFunction() {
    
    points.sort(function(a, b){return a - b});
    console.log(points);
    //document.getElementById("arraysort").innerHTML = points;
  }
  myFunction();
//console.log(mysortArray);