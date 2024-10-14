// function display(){
//     // alert("Hello Ji");
//     console.log("hello",x)
// }
// display();
// //=======================================
// var x=14;
// console.log("hello 35",x);
// //======================================
// console.log(typeof x);
// //======================================
// let ar=[12,13,14,15,16,17,18,19,20];
// console.log(typeof ar);

function validation(){
    var x=document.getElementById("uname").value
    var y=document.getElementById("pass").value
    if(x=="kishan" && y=="1234"){
        document.getElementById("ms").innerHTML="Login success"
    }
}

function result(){
    let x=document.querySelector("p");
    x.innerHTML="Result"
    x.style.backgroundColor="red"
}

// let xx=Number("12");
// let str=Number("123");
// let b=boolean(0);
// console.log(typeof xx);
// console.log(typeof str);
// console.log(b);
// console.log(typeof b);
//==============================================
// let a=12
// let c='12'
// console.log(a==c);
// console.log(a===c);
//===============================================
// let a=()=>{
//     console.log("hello");
// };
// a();
//==============================================
// let aa=(x,y)=>{
//     console.log(x+y);
// }
// aa(12,31);
//===============================================
// let aa=(x,y)=>{
//     return(x+y);
// }

// let x=aa(12,21);
// console.log(x);
//==============================================

// let say=()=> console.log("hello");
// say();