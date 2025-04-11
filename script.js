// fuction tester(para1,para2){
//     return para1+""+para2;
// }
// const arg1="argument 1";
// fuction addtwoNumber(X,y)
// function addtwoNumber(x,y){
//     console.log(x+y);
//     addtwoNumbers();
//     addtwoNumbers(6,6);
//     addtwoNumbers(1,2,3,4);
// }
//  let spread=["so","much","fun"];
//  let message=["javascript","is",...spread,"and","very","powerful"];

// function addtwoNumbers(x,y){
//     console.log(x+y);

// }
// let arr=[5,9];
// addtwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);

// }
// let arr=[5,9];
// let arr=[6,7];

// REST PARAMETER
// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","How are you?");

// RETURNING FUNCTION VALUES
// let result=addTwoNumbers(4,5);
// console.log(result);

//  let resultsArr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i)
//      resultsArr.push(result);
//  }
//  console.log(resultsArr);


// let addtwoNumbers=(x,y)=>x+y;
// let result=addtwoNumbers(12,15);
// console.log(result)

// let addTwoNumbers=(x,y)=>{
//     console.log("Adding...");
//     return x+y;
// }

// variable scope in fuction
// local variable in fuction

// fuction testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("hi");
// console.log(" not Available here:",x);

// function testAvailability(){
//     let y="local variable!";
//     console.log("Available here:",y);
// }
// testAvailability();
// console.log(" not Available here:",y);


// function doingStuff(){
//     if(true){
//         var x ="local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//         if(true){
//             console.log(x);
//             var x ="local";
//         }
//     }
        
//     doingStuff();

    // function doingStuff(){
    //     if(true){
    //         console.log(x);
    //         let x ="local";
    //     }
    // }
        
    // doingStuff();

    // function doingStuff(){
    //     if(true){
            
    //         const x ="local";
    //         console.log(x);
    //     }
    // }
        
    // doingStuff();


// global variable

// let globarVar="Accessible everywhere";
// console.log("Outside function",globarVar);

// function creatingNewScope(x){
//     console.log("access to global vars inside function",globarVar)
// }
// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log();
// }
// doingStuff();
// console.log(x);


//immediately invoked function expression
// (function(){
//     console.log("IIFE!");
// })();


//arrow func
// (()=>{
//     console.log("run right away");
// })();

//Recursive func
// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);



// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);
// }
// }
// getRecursive(3);




/* function logRecursive(nr){
    console.log("Started function",nr);
    if(nr>0){
    logRecursive(nr-1);
}else{
    console.log("done with recursion");
}
console.log("Ended function",nr);

}
logRecursive(3);

 */

//the performance of recursion is slightly worse than the performance of regular iteration using a loop.So if this cause a bottleneck situation that would really slow down your applica,than you might want to consider another appli


//NESTED FUNCTION
// function doOuterFunctionStuff(nr){
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("i can acces outer var",nr);
//     }
// }
// doOuterFunctionStuff();


// function doOuterFunctionStuff(nr){
    
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z=10;
        
        
//     }
//     console.log("i can acces outer var",nr);
// }
// doOuterFunctionStuff(2);

//Anonymous function

// function doingStuffAnonymously(){
//     console.log("not so scret");
// }


//FUNCTION CALLBACKS


// function doDlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("inside doFlexibleStuffFunction");
// }

//In javascript there are many built in function ,as you may know by now .One of them is the setTimeout()function .It is a very special function thatbis executing  a certain function after a specified amount of time that it will wait  first.

// let youGotThis=function(){
//     console.log("You are doing really well ,keep coding");

// };
// setTimeout(youGotThis,1000);


//ques
// let val=10;
// function tester(val){
//     val +=10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);

// ques
// let testFunction=function(){
//     console.log("hello")
// }();

//ques
// let test2=(num)=>num+5;
// console.log(test2(14));

// ques
// var addFive1=function addFive1(num){
//     return num +2;
// };
// let addFive2=(num)=>num+2;
// console.log(addFive1(14));