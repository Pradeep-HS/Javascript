////////////////// -- Arithmetic Operators--///////////////////////////////////////

console.log(1 + 2);  //Addition
console.log(2 - 1);  //Subtraction
console.log(1 * 2); //Multiplication
console.log(10 / 5); //Division
console.log(11 % 2);  //Modulus(remainder)
console.log(2 ** 3); //exponentiation

/////////////////////---Assignment Operators---/////////////////////////////////////

let x = 10;   //Assign
x += 20;     //Add and assign
x -= 10;     //Subtract and assign
x *= 10;     //Multiply and assign
x /= 5;      //Divide and assign
x %= 5;      //Modulus and assign
x **= 2;     //Exponent and assign

///////////////////---Comparison Operators--////////////////////////////////////////

console.log(5 == "5"); //true       //Equal to (loose)
console.log(5 === "5");//false      //Equal to (strict)
console.log(5 != "5"); //false      //Not Equal (loose)
console.log(5 !== "5"); //true      //Not Equal (strict)
console.log(5 > 3);                 //Greater than
console.log(2 < 4);                 //Less than
console.log(3 >= 3);                //Greater than or equal to
console.log(2 <= 4);                //Less than or equal to

///////////////////////--Logical Operators--///////////////////////////////////////

console.log(true && true);   //true
console.log(true && false);  //false
console.log(false && false); //false
console.log(false && true);//false
//-----------------------------------

console.log(true || true);  //true
console.log(true || false); //true
console.log(false || false); //false
console.log(false || true);  //true

//----------------------------------

console.log(!true);

//----------------------------------

console.log(null ?? "PRADEEP");
console.log("PRADEEP" ?? null);
console.log(undefined ?? "PRADEEP");
console.log("PRADEEP" ?? undefined);
console.log("PRADEEP" ?? Nan);

/////////////////////////--Bitwise Operators--/////////////////////////////////////

console.log(5 & 3); //1
console.log(5 | 3); //7
console.log(5 ^ 3); //6
console.log(~10);  //-11
console.log(4 >> 1);           // Right Shift 
console.log(4 << 1);           // Left Shift 
console.log(4 >>> 1);           // Zero Fill Right Shift Operator 

////////////////////////--Ternary Operator--///////////////////////////////////////

console.log((40 > 39) ? "Pass" : "Fail");    // (condition)?true:false;

///////////////////////--Unary Operators--////////////////////////////////////////

let a = 10;

console.log(++a); // Pre-increment
console.log(--a); // Pre-decrement

console.log(a++); // Post-increment 
console.log(a--); // Post-decrement 

console.log(a)
