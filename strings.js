function strfun() {
    let mystr = "welome\"to\"banglore";
    console.log(mystr);
    console.log(mystr.length);
}//strfun();
function myfun() {
   var  total=13;
    for (i = 0; i <= total; i++) {
        let str = "";
        for(let es=1;es<= (total-i)/2 ;es++){
            str+=" ";
        }

        for (j = 1; j <= i; j++) {
            str += " *";
            // for(k=1; k<=5; k++){
            //     console.log(" ");
            // }
        }

        console.log(str);
    }
}
myfun();