function mypattern(total){
    for(var i=1; i<=total ; i++){
        let str="";
        for(var es=total-i; es>0 ; es--){
            str+=" ";
        }
        // str+="*"
        for(var k=0 ; k<(2*i)-1; k++){
          //console.log(k);
            // for(j=1;j<k;j++){
                str+="*"
            // }
        }
        console.log(str);
       

    }
}
mypattern(12);

function leftpattern(n){
    for(let i=1; i<=n; i++){
        let strl= "";
        for(let j=1; j<=i;j++ ){
            strl +="*";
        }
        console.log(strl);
    }
}
leftpattern(8);
function rightpattern(p){
    for(let i =1 ;i<=p ;i++){
        let str = "";
        for(var j =1 ; j<=p-i ; j++){
            str+=" ";
            //console.log(j);
          
        }
        //  p--; 
        for(let k=1;k<=i; k++){
             str +="*";
         }
        console.log(str);
    }
}
rightpattern(8);
