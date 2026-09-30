const userEmail = {}

//if (userEmail == "umer@gmail.com") {
 //   console.log("Got user email");
//} else {
 //   console.log("Don't have user email");
//}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length >0) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}   

const emptyobj ={
    name: "umer",
    age: 20
}

if(Object.keys(emptyobj).length == 0){
    console.log("Object is ");
    
} else{
    console.log("Object is empty");
}

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")