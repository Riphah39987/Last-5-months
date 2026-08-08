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