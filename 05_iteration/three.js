let students= [`umer`, `ali`, `bilal`]
for( let student of students){
    //console.log(`name of studets is ${student}`);

}

for( let student in students){
    console.log(`name of studets is ${student}`);

}

for (let key in students){
    console.log(students[key]); 
}


// object 

let student ={
    name : "umer",
    age : 20,
    class : "BSCS"
    

};
for( let key in student)
{
   // console.log(`key in ${key} and value is ${student[key]}`);

}

// map 
let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(newNumbers);

