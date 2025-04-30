//concurrency 
  
//callback  just a function  takes another function
// function doSomething(callback){
//     callback();

// }
// function sayHi(){
//     console.log("Hi!");
    
// }
// doSomething(sayHi);




// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright!");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmm...!");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }

// // Test with a score of 85
// getGrade(85, judge);


// //callback really valuable in an aynchronous context 



// setInterval(encourage,500);
// function encourage(){
//     console.log("your're doing great,keep going!");

// }


//PROMISES
//this function neends two parameters and thosw parameter are callbacks. we have called them resolved  and reject here
//   let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("to low");

//     }
//   });
//   promise.then(
//     function(value){
//         console.log("success:",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
// );

//with arrow function
// const promise=new Promise((resolve,reject)=> {
//      resolve("success");
    
// })
// .then(value=>{
//     console.log(value);
//     return"we";
// })
// .then(value=>{
//     console.log(value);
//     return"can";
// })
// .then(value=>{
//     console.log(value);
//     return"chain";
// })
// .then(value=>{
//     console.log(value);
//     return"promises";
// })
// .then(value=>{
//     console.log(value);
   
// })
// .catch(value=>{
//     console.log(value);
// })


//ASYNC AND AWAIT