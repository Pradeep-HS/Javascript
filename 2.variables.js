// var      ->ES1(function scoped, mutable,       redeclared)
// let      ->ES6(block scoped,    mutable,       can not be redeclared)
// const    ->ES6(block scoped,    immutable,     can not be redeclared)

var x = 10;
console.log(x); // 10

x = 20; // mutate the value
console.log(x); // 20

function testVarScope() {
  if (true) {
    var y = 50;
  }
  console.log("Outside block:", y); // still accessible
}

testVarScope();

var a = 1;
var a = 2; // No error
console.log(a); // 2


//--------------------------------------------------------------------------

{
    let n=10;
    //let n=20; //can not be redeclared
    console.log(n);

    n=20;
    console.log(n); //(re assign)
}
//console.log(n); // ReferenceError: n is not defined(block scope)

function testLetScope() {
  let x = 1;

  if (true) {
    let x = 2; // This 'x' is a different variable (block-scoped)
    console.log("Inside block:", x); // 2
  }

  console.log("Outside block:", x); // 1
}

testLetScope();

//-------------------------------------------------------------------


const x = 10;
//x = 20; //  TypeError: Assignment to constant variable.


function testConstScope() {
  const y = 1;

  if (true) {
    const y = 2; // New block scope
    console.log("Inside block:", y); // 2
  }

  console.log("Outside block:", y); // 1
}

testConstScope();

const z = 5;
//const z = 10; // SyntaxError: Identifier 'z' has already been declared




