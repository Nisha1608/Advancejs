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