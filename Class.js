// let dog={dogName:"JavaScript",
//     weight:2.4,
//     color:"brown",
//     breed:"chihuahua"

// };

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg");

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("javascript",2.4,"brown","chihuahua");

//CLASSES
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Nisha","Rathour");
// console.log("Hi",p.firstname);

//Methods : Funstion on a class are called method.when defining these methods,we donnt use the function keyword .we start directly with the name
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;

//     }
//     greet(){
//         console.log("Hi there I'm",this.firstname);
//     }
//     compliment(name,object){
//         return"This's a wonderfull"+object+","+name;
//     }
// }
// let p=new Person("Nisha","Rathour");
// p.greet();
// let compliment=p.compliment("Nisha"," cap");
// console.log(compliment);

//PROPERTIES


// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Nisha","Rathour");
// console.log("hi",p.firstname);



// class Person{
//         constructor(firstname,lastname){
//             this.#firstname=firstname;
//             this.#lastname=lastname;
//         }
//     }                             //become private ans show error
//     let p=new Person("Nisha","Rathour");
//     console.log("hi",p.firstname);
    

// class Person {
//     // Declare private fields
//     #firstname;
//     #lastname;
  
//     constructor(firstname, lastname) {
//       if (firstname.startsWith("M")) {
//         this.#firstname = firstname;
//       } else {
//         this.#firstname = "M" + firstname;
//       }
  
//       this.#lastname = lastname;
//     }
  
//     // Getter method to access private data
//     getData() {
//       console.log("First Name:", this.#firstname);
//       console.log("Last Name:", this.#lastname);
//     }
//   }
  
//   // Create a person
//   let p = new Person("am", "py");
//   console.log("Hi", p);        // This shows the object
//   p.getData();                 // Correct: call the function with ()
  

// class Person {
   
//     #firstname;
//     #lastname;
  
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

   
//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }

    
//     get lastname() {
//         return this.#lastname;
//     }

//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }

// let p = new Person("Nisha", "Rathour");
// console.log(p.firstname); 

//INHERITANCE


// class Vehicle{
//     constructor(color,currentspeed,maxSpeed){
//         this.color=color;
//         this.currentspeed=currentspeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentspeed);

//     }
//     accelerate(amount){
//         this.currentspeed+=amount;
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(color,currentspeed,maxSpeed,fuel){
//         super(color,currentspeed,maxSpeed);
//         this.fuel=fuel;
    
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let motor=new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

 //we cannot access any motorcycle specific properties or method in our vehicle class


//PROTOTYPE

class Person {
    constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            greet(){
                console.log("hello");
                        }
                    }
        Person.prototype.introduce=function(){
            console.log("Hi,I'm",this.firstname);
        };
        Person.prototype.favoriteColor="green";
        let p=new Person("Nisha","Rathour");
        console.log(p.favoriteColor);
        p.introduce();