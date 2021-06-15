// console.log("hello world")
// // alert("virus")
// document.write("this is sccript page")
// console.warn("virusssss")
// console.error("This is an error")


// Data type in javaScript
// Numbers
// var num1 = 452;
// var num2 = 342;

// // string
// var str1 = "this is first string"
// var str2 = "This is second string"

// Objects
// var marks = {
//     ravi: 45,
//     subham: 22,
//     Hemant: 55,

// }
// console.log(marks)

// Boolean
// var a = true;
// var b = false;
//     console.log(a,b)

/*  At a very high level there are two types of data type in javascript   
1.Primtive Data types -- string,boolean,numbers,undefined,null,symbol
2. Reference Data types -- Arrays,objects
*/

// Array
// var arr = [1,2,3,"abbbu",4,5,]

// Operator in javascript
// Arithmetic Operators
// var a =34;
// var b =67;
// console.log("The value of a+b is", a+b)
// console.log("The value of a-b is", a-b)
// console.log("The value of a*b is", a*b)
// console.log("The value of a/b is", a/b)
// console.log("The value of a**b is", a**b)

// Assignment Operator 
var c =22;
var d =44;
// c +=2;
// c *=2;
// c /=2;
// console.log(c)


// Comparision Operator
// console.log(c == d);
// console.log(c > d);
// console.log(c < d);
// console.log(c >= d);
// console.log(c <= d);


// Logical Operator

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or

// console.log(true || true)
// console.log(true || false)
// console.log(false|| true)
// console.log(false|| false)

// Logical Not
// console.log(!false)
// console.log(!true)

// Function in JavaScript
// function avg(a,b){
//     return (a+b)/2
// }

// v1 = avg(20,30);
// v2 = avg(30,70);
// console.log(v1,v2);

// Conditonal in JavaScript
// var age =56;
// if (age>18){
//     console.log("your are not a kid")
// }
// else{
//     console.log("You are a kid")
// }

// if-else Ladder
// var agee = 31
// if (agee > 34){
//     console.log("you are right");
// }
// else if(agee == 32){
//     console.log("you are sure right");

// }
// else{
//     console.log("you are not right");

// }
// console.log("End of Ladder")

// for Loop
var arr =[1,4,5,7,8,9,2,14];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// Using forEach is also working 
// arr.forEach(function(element){
//     console.log(element)
// })

// while loop
// let j = 0;
// while (j<arr.length){
//     console.log(arr[j]);
//     j ++;

// }

// Break and continue
// for (var i =0;i<arr.length; i++){
//     if(i==4) {
//         break;
//     }
//     console.log(arr[i])

// }

// for (var i =0;i<arr.length; i++){
//     if(i==4) {
//         continue;
//     }
//     console.log(arr[i])

// }

// Array Methods
// console.log(arr.length);
// arr.push("Ritesh")
// // arr.pop("Ritesh")
// console.log(arr)

// String Methods in JavaScript
// let mystring = "Hii I am Ritesh Tiwari"
// console.log(mystring.length);
// console.log(mystring.indexOf("Ritesh"));
// console.log(mystring.slice(9,13));
// let bb = mystring.replace("Ritesh","Rishi");
// console.log(mystring);
// console.log(bb);

//Date in JavaScript
// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

let elem = document.getElementsByClassName('contant')
console.log(elem);
elem[0].style.background = "yellow";
