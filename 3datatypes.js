//////////////////////--Primitive--/////////////////////////////////////////////


//let firstName ="Pradeep" ; //string
let firstName ="Pradeep"; //string

console.log(`My name is ${firstName} `);
console.log(typeof firstName);

let num = 10;
let num2 = 20.2;
console.log(`${num} , ${num2}`); //number
console.log(num,num2);

console.log(typeof true);     //boolean

var x;
console.log(typeof x);      //undefined

console.log(typeof null);   //null

console.log(typeof BigInt(10)); //BigInt()

console.log(typeof Symbol()); //Symbol()



///////////////////////--Non-Primitive--////////////////////////////////////////////////////////////

let obj = {
    name: "Amit",
    age: 25
};

console.log(typeof obj);     //Object


let a = ["red", "green", "blue"];

console.log(typeof a); //Array

function add(){
    return 10+20;
}

console.log(typeof add); //Function




//etc

