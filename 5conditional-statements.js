//if
if(true){
    console.log("Hello true");
}

///////////////////////////////////////////////////////////////////////////////////

//if-else
if(false){
    console.log("I'm false");
}else{
    console.log("i'm not false");
}

//////////////////////////////////////////////////////////////////////////////////

//Nested if
if(true){
    if(true){
         console.log("Hello true");
    }else{
        console.log("I'm something");
    }
}

////////////////////////////////////////////////////////////////////////////

// if-else-if ladder

if(false){
    console.log("I'm false");
}else if(false){
    console.log("i'm not false");
}else{
    console.log("I'm something");
}

////////////////////////////////////////////////////////////////////////////

let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);
