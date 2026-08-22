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
