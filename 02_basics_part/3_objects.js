//object liternals
 const mySym = Symbol("khalid");

const myDta ={
    name: "umer",
    "full name": "umer khalid",
    age: 22,
        [mySym] :"myID",

    email:"umerkhalid3331@gamil.com",    

    isMarried: false,
    hobbies: ["cricket", "reading", "coding"],
    address: {
        city: "karachi",
        country: "Pakistan"
    },

        university: "SZABIST"
      
       

}
// Object.freeze(myDta)
console.log(myDta)

console.log(myDta.name)
console.log(myDta.age)
console.log(myDta.isMarried)
console.log(myDta.hobbies[1])
console.log(myDta.address.city)
console.log(myDta.address.country)
console.log(myDta["full name"])
console.log(myDta[mySym])

myDta.email="khalidbinumer@stuedt.com"
console.log(myDta)

myDta.greeting = function(){
    console.log("hello js users");
    

}

console.log(myDta.greeting())

myDta.greetingnew = function(){
    console.log(`heelo this is, ${this["full name"]}`);
}
 console.log(myDta.greetingnew());