// // for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element ==5){
//         console.log("I am 5");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {

//     console.log(`outer loop ${i}`);


//     for (let j = 0; j <=10; j++) {
//       console.log(`inter loop ${j} and outer loop ${i}`);

        
//     }
    
    
// }

for (let i = 0 ; i <= 10 ; i ++){
    if(i == 5)  {
        console.log("get five")
        break
    }
    console.log(`value if i is ${i}`)
}


for (let i = 0 ; i <= 10 ; i ++){
    if(i == 5)  {
        console.log("get five")
        continue
    }
    console.log(`value if i is ${i}`)
}
