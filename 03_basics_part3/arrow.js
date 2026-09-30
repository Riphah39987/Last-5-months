const user ={
    name: "umerkhalid",
    age:23,
    newname:"Ali",

    wellcomemessage: function(){
        console.log(`${this.name}, wellcome to website`);

        

    },

    newellcomeme: function() {
        console.log(`${this.newname},you are nw so wellcome too`)
    }
}

user.wellcomemessage()
user.newellcomeme()
user.newname="bulli"
user.newellcomeme()

console.log(this);

function chai(){
    let myname ="khalid"
    console.log(this.myname)
    
}
console.log(chai())


const chaiG = function() {
let mynameZ ="khalid"
    console.log(this.mynameZ)

}
console.log(chaiG())


const chaiQ = () => {

    let mynameM ="khalid"
    console.log(this.mynameM)
    
}
chaiQ()

const addTwo0 = (num1, num2) => {
    return num1 + num2
}

const addTwo1 = (num1, num2) =>  num1 + num2

const addTwo2 = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo0(3, 4))
console.log(addTwo1(3, 4))
console.log(addTwo2(3, 4))
console.log(addTwo())


const myArray =[2,3,4,5,66]
myArray.forEach(function() {

})