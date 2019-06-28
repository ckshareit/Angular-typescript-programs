let display=function(){
    console.log("Hello from display");
}
display();
/************** */

let sum=function(x:number,y:number): number{
 
    return x+y;
}

let res:number=sum(20,5);
console.log(res);

//*************** */

let sum2=function(x:number,y:number=200): number{
    if(y==undefined){
        y=0;
    }
    return x+y;
}
/********* */

let res2:number=sum2(10);
console.log(res2);

/************ */

let sum3=function(x:number,y?:number): number{
    if(y==undefined){
        y=0;
    }
    return x+y;
}

let res3:number=sum3(20,1);
console.log(res3);

/************ */

let b:number= 5 ;
let c:number= undefined ;
console.log(b+c);