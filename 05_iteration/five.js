// const mynumb =[1,2,3,4,5,6,7,8,9,10];
// const newnum =mynumb.filter((item) =>
// {
//     return  item > 4
// })
// console.log(newnum)



const mynum =[1,2,3,4,5,6,7,8,9,10];
const newnum = [];
mynum.forEach((item) =>
{
    if
     ( item > 4){

     
      newnum.push(item)
    }
      
})
console.log(newnum) 



