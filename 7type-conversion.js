/////////////--Type Conversion--/////////////////////////////////////////////

//Implicit Type Conversion (Coercion)
let res = 5 + "5" + 5 ;  
console.log(typeof res);

//Boolean to Number
console.log(true+1);

//Equality Comparison (==)

console.log(5 == "5");
console.log(5 == "Hii");
console.log(5 == NaN);
console.log(5 == undefined);
console.log(5 == null);

//Automatic Conversion in Logical Operations
//In JavaScript, these values are automatically converts undefined, null, "" (empty string), 
//                         false, NaN, and 0 to false, and all other values to true.

let res1 = Boolean("");  
let res2 = Boolean("Hello");  
console.log(res1);
console.log(res2);


//////////////////--Explicit Type Conversion--///////////////////////////////////////

//Converting to String
let n = 123;
let s1 = String(n);  
let s2 = n.toString();  
console.log(typeof s1);
console.log(typeof s2);

//Converting to Number

let s = "123";
let n2 = Number(s);  
let s3 = "12.34";
let n1 = parseFloat(s3);  
console.log(n2);
console.log(s3);

//Converting to Boolean

let str = "Hello";
let b1 = Boolean(str);  
let emptyStr = "";
let b2 = Boolean(emptyStr);  
console.log(b1);
console.log(b2);