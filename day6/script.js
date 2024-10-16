let arr=[1,20,2,3,3,33,1];
let newary=arr.map((x)=> x*2);
console.log(newary);
let even=arr.filter((x)=> x%2==0);
console.log(even);

let sum=arr.reduce((x,y) => x+y,0);
console.log(sum);

let sum_even=arr.filter((x)=> x%2==0).reduce((x,y)=> x+y,0)
console.log(sum_even)