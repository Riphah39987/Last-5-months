const sayMyName = function () {
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")


}

sayMyName()

console.log(sayMyName)

const we_have_num = function(number1,number2){

    return number1 + number2;


}
const result = we_have_num(3,7)
console.log( `result is ${result}`)


function loginUser(username){
    if(!username){
    console.log("plase enter the username")
    return
}
return `${username} JUSTLOGIN`
}
console.log(loginUser("umer "))

//*******************************************//

function calCartPrice(...v1){
    return v1

}
 const newcart= calCartPrice(200,300,400,500)
console.log(newcart)


const user = {
    username: "hitesh",
    prices: 199
}

function userdata(anything){
    console.log(`Username is ${anything.username} and price is ${anything.price}`);
}

// handleObject(user)
userdata({
    username: "sam",
    price: 399
})


const myArray = new Array (200, 400, 100, 600)

function thisIsFunction(getArray){
    return getArray[2]
}

 console.log(thisIsFunction(myArray));
