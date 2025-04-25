// Create an object
// const person = {
//     firstName: "Nisha",
//     lastName: "Rathour",  
//     age: 21
// };

// // Destructuring firstName and lastName
// let { firstName, lastName } = person;

// console.log(firstName);  // Output: Nisha
// console.log(lastName);   // Output: Rathour

// // Destructuring with default value and typo fix
// let { firstName: fName, lastName: lName, country = "US" } = person;
// // Here, we're renaming firstName to fName, lastName to lName, and adding a default value for country

// console.log(fName);   // Output: Nisha
// console.log(lName);   // Output: Rathour
// console.log(country); // Output: US

// // Destructuring with alias
// let { lastName: name } = person;

// console.log(name); // Output: Rathour


//string destructing
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(name);
//create an array

// const fruits = ["Bananas", "Oranges", "Apple", "Mangos"];
// let [fruit1, fruit2] = fruits;

// console.log(fruit1); 
// console.log(fruit2); 


//array position value
// const fruits = ["Bananas", "Oranges", "Apple", "Mangos"];
// //Destructing
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruits);

//the rest property
// const numbers=[10,20,30,40,50,60,70];
// //destruxting
// const[a,b,...rest]=numbers
// console.log(numbers);

//javascript exponentiation (**)
// let x=5;
// let z=x**2
// console.log(z);

// let x=5;
// letz=Math.pow(x,2);
// console.log(z);

// let x=5;
// x**=2;
// console.log(x);

//javascript array includes()
// const fruits = ["Bananas", "Oranges", "Apple", "Mangos"];

// const hasMangos = fruits.includes("Mangos");

// console.log(hasMangos); 


//trailing comma

// const arr=[
//     "one",
//     "two",
//     'three', 
// ];
// const arr=[
//     "one",
//     "two",
//     'three',,

// // ];
// console.log(arr);

//Spars array
// const sparseArray=[1,,,4,5,,];
// const arr=[,];
// console.log(arr.leng);

// const person = {
//         firstName: "Nisha",
//         lastName: "Rathour",  
//         age: 21
//     }

// const person = {
//     firstName: "Nisha", 
//     ,
//     age:21,
// }
