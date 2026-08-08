// array

const myarry = [11,22,33,44,55]
console.log(myarry)

const nameArray = ["umar", "ali", "asad", "ahmed"]
console.log(nameArray)

const myArray2 = new Array(1,2,3,4,5,6,7,8,9)
console.log(myArray2[1])  //to check the value of index 1

// methods of array

myarry.push(77)  // add value at the endof array
console.log(myarry)

myarry.pop()  
console.log(myarry)  // remove value from the end of 

myarry.unshift(99) 
console.log(myarry)  // add value at the start of array

myarry.shift() // remove value from the start of array
console.log(myarry) 


console.log(myarry.includes(88))  // check if value is present in array or not
console.log(myarry.indexOf(22))  // check the index of value in array


//............//

const newarry =  myarry.join() // convert array into string
console.log(myarry)
console.log(newarry)
console.log(typeof newarry)  

//******slice and splice */

console.log("A ", myArray2 );

const myn1 = myArray2.slice(0,5) // slice method is used to get the value without changing the orginal array
console.log("check the orginal array after slice method  ", myArray2)   
console.log(myn1) 

console.log("B ",myArray2)

const myn2 =myArray2.splice(1,2)

console.log("check the orginal array after splice method  ", myArray2)      // splice method is used to get the value and it will change the orginal array

console.log(myn2)
