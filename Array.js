JavaScript arrays are used to store multiple values in a single variable.

 array method
  const arr = [42,59,76,84];

 1 push - array.push(45),last element add
 2 pop - array.pop(), last element remove
 3 shift -first array element remove,
 4 unshift -  first array element add,
 5 short method - 
 	points.sort(function(a, b){return b - a});

 		arr[0]=25;
 		arr delete(index)
      arr.push(25);
      arr.pop();
      arr.shift();
      arr.unshift(45)
     arr.unshift(25)
     for(i=0;i<arr.length;i++){
     	const b=arr[i]
     
      if (b % 2 == 0) {
            console.log(b);
        }
    }

   example 
    const arr2 =[1,3,5,6,8]
     for( i=0; i<arr2.length; i++){
     	const arr5=arr2[i]
     	if(arr5 %2 !==0){
     		 console.log(arr5)
     	}
     }
// map method
     let object =[{name:"p1",	age:25 },
     {name:"p2",age:50},{
     	name:"p3",
     	age:100
     }
   
     ]
     object.forEach((ele)=>{
      console.log(ele.name)
     })
      // update method
      object3={
      	name:"p5"
      }
      object.unshift(object3)


       // push method object
       // create 
    	 object2 = {
     	name:"p4",
     	age:100
     }
      object.push(object2);
      // delete method
     
     // advance techniques in filter method
     const y= object.filter((obj)=>{
     	return obj.age>25;
     })
     console.log(y)
     // filter method old techniques
     const y= object.filter(function(obj){
     	return obj.age>25
     })
     console.log(y)
// map method
     .object.map((obj)=>{
     	return {obj.name,obj.age}
     	console.log(obj.name)
     })
delete method splice method

There are different methods and techniques you can use to remove elements from JavaScript arrays:

    pop - Removes from the End of an Array
    shift - Removes from the beginning of an Array
    splice - removes from a specific Array index
    filter - allows you to programatically remove elements from an Array
    example const array [1,2,5,6,7,8]
 1 array.length=2
	2 array.shift()- first elements remove.
	3 array of splice method- add and remove method first argument are location b/n adding or removing and second argument are number are remove.

	filter method
	 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const filtered = array.filter(function(value, index, arr){ 
        return value > 5;
    });

 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    for( i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === 5) { 
    
            arr.splice(i, 1); 
        }
    
    }

    // this method are simple 
    const arr =[1,3,5,6,8,9,10,12]
     function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    
    var result = arrayRemove(array, 6);
 
	// update method

	 1  array.unshift
	 2 array.push()

	  array.splice
	 Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);

// Json - javascript object notation ,
//JSON is a syntax for storing and exchanging data.
//lightweight  data interchange formate.
// it is easly human read and write.
//it is eazy to parse and generate,
// json nested structure

    Data is In name or value pairs
    Data is separated by comma
    Curly brackets hold objects
    Square bracket holds arrays
    JSON.stringify() converts an object into a JSON text and saves that JSON text in a string.
    JSON is mainly used to transfer data between server and web application.
    JSON can be used With modern programming language

 const praveen ={
  "array": [
    1,
    2,
    3
  ],
  "boolean": true,
  "color": "gold",
  "null": null,
  "number": 123,
  "object": {
    "a": "b",
    "c": "d"
  },
  "string": "Hello World"
}

  praveen.array.map((obj)=>{
	return obj

})



// explaination

for -	Marks a block of statements to be executed, as long as a condition is true
function -	Declares a function
if ... else -	Marks a block of statements to be executed, depending on a condition
return -	Exits a function
switch 	Marks a block of statements to be executed, depending on different cases
try ... catch 	Implements error handling to a block of statements
var 	Declares a variable

 function myFunction(a,b){
 	 return a+b=c

 }
 myFunction();
 // scope

 ES2015 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope variables (and constants) in JavaScript.

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope.

Global variables can be accessed from anywhere in a JavaScript program. 
global variable outside the function are global scope.
 var declares in side the function are local scope. or function scope - context are change  and function scope are change .

Variables declared with the let keyword can have Block Scope.

declared inside a block {} cannot be accessed from outside the block:

 block scope example
  var i=10;
  for(let i=0;i<15;i++){
  	 console.log(i)
  }
  console.log(1to14 print)
// closure concept

 var i=10;
   function myFunction(){
   	  i=5;
   	  console.log(i);
   }
// Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed:
 var a=5;// redeclaring
 var a=7;
 or
 let a=5;
 let a=7; // not redeclaring
 Scope variable

1 local scope
2 global scope
3 block scope case let -used 

let i =  1;
function a(){ 
	let i =  2;

	function b(){
		let i =  5;
		for ( let i=0; i<10; i++){
	 		console.log(i) // 0 to 9 print
		}
 		console.log(i) // 5 local scope
  	}
	console.log(i) // 2
	b();
}
console.log(i) // 1 global scope
a();

JavaScript Declarations are Hoisted

In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

// creating a function to calculate sum
function sum() {
    // read first input value 
    const firstNum1 = document.getElementById("firstNum1").value;
    // read second input value
    const secondNum2 = document.getElementById("secondNum2").value;
    //  find result in sum
    const sum = parseInt(firstNum1) + parseInt(secondNum2);
    // write output value
    document.getElementById("result").innerHTML = sum;
    console.log(sum)
}
// creating a function to calculate multiple
function multiple() {
    // read first input value
    const num1 = document.getElementById("num1").value;
    // read second input value
    const num2 = document.getElementById("num2").value;
    //   find result in multiple
    const multiple = parseInt(num1) * parseInt(num2);
    // write output value
    document.getElementById("resultmul").innerHTML = multiple;
    console.log(multiple)
}
// creating a function to calculate multiple
function bmi() {
    // read first input value   
    const mass = document.getElementById("mass").value;
    // read second input value
    const height = document.getElementById("height").value;
    // write output value
    document.getElementById("resultbmi").innerHTML = parseInt(mass) / (parseInt(height * height))
    console.log(parseInt(mass) / (parseInt(height * height)))
}

// creating a function to calculate factorial 

function factorial() {
    // declaring an arr to store the indexes
    let arr = [];

    // read input value
    const factorialNumber = document.getElementById("factorialNumber").value;

    // declaring a integer variable to store final factorial value
    let result = 1

    // creating a loop, starting from the input value, till greater than 0, and decremeting
    // by 1
    for (let i = factorialNumber; i > 0; i--) {

        // reads the previous results value and multipling with index, 
        // and finally writing to result
        result = result * i;

        arr.push(i);
    }
    document.getElementById("resultfactorial").innerHTML = arr + " - " + result;
}
// creating a function to calculate natural number
function naturalnumber() {
    // read input value
    const number = document.getElementById("number").value;
    // declaring a natural number to store in final value
    const x = 10
    // write output value
    document.getElementById("x").innerHTML = x;
    // createing a loop, starting from the input value
    for (let i = 1; i <= x; i++) {
        console.log(i);
    }
}
// creating a function to find even number 
function evennumber() {
    // read input value
    const evenNumber = document.getElementById("evenNumber").value;
    // declaring a even number to store final value
    const y = []
    document.getElementById("resulteven").innerHTML = y;
    for (let i = 1; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(i );
        }
    }
}

function Doublar(x){


return x*2

}
function even(y){

return y%2==0;
}
arr.map((x)=>{return x*2})
(7) [2, -2, 4, 6, -12, 6, 4]

function even(y){

return y%2==0;
}

undefined
arr.filter(even)
(3) [2, -6, 2]
function even(y){

return y%2!==0;
}

{this.props.data.filter((number, i) => {
        return number % 2 === 0;
       })
      .map((number, i) => {
       return (
       <div key={i}>
       {number}
        </div>
       )
  })}
SOLID stands for:

S - Single-responsiblity Principle
O - Open-closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle

What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

 session storage
 // Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();

JSON objects are surrounded by curly braces {}.

JSON objects are written in key/value pairs.

Keys must be strings, and values must be a valid JSON data type (string, number, object, array, boolean or null).

Keys and values are separated by a colon.

Each key/value pair is separated by a comma.

Nested Arrays in JSON Objects

myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 }


what is callback in react?
 callback function is invoked when setState finished and component get rendered.since
 setstate is  asynchronous the callback.
  what is state? 
  React components has a built-in state object.
  The state object is where you store property values that belongs to the component.
  When the state object changes, the component re-renders.
 state object are some infomation are hold when state object change ,the component re-render.
 

function x() {
    var dataArr = [{ "id": 1, "first_name": "Trevar", "last_name": "Pinks", "email": "tpinks0@liveinternet.ru", "gender": "Male", "ip_address": "85.188.23.108" },
    { "id": 2, "first_name": "Jillana", "last_name": "Sausman", "email": "jsausman1@delicious.com", "gender": "Female", "ip_address": "6.102.135.13" },
    { "id": 3, "first_name": "Danny", "last_name": "Sprull", "email": "dsprull2@cyberchimps.com", "gender": "Male", "ip_address": "4.252.82.15" },
    { "id": 4, "first_name": "Corenda", "last_name": "Redborn", "email": "credborn3@theguardian.com", "gender": "Female", "ip_address": "173.182.229.208" },
    { "id": 5, "first_name": "Arch", "last_name": "Pentlow", "email": "apentlow4@flavors.me", "gender": "Male", "ip_address": "126.111.91.140" },
    { "id": 6, "first_name": "Cosme", "last_name": "Dive", "email": "cdive5@latimes.com", "gender": "Male", "ip_address": "111.122.229.121" },
    { "id": 7, "first_name": "Jaclyn", "last_name": "Streeter", "email": "jstreeter6@drupal.org", "gender": "Female", "ip_address": "254.45.156.209" },
    { "id": 8, "first_name": "Jareb", "last_name": "Dimitrie", "email": "jdimitrie7@wordpress.org", "gender": "Male", "ip_address": "99.134.67.74" },
    { "id": 9, "first_name": "Matias", "last_name": "Easter", "email": "measter8@cargocollective.com", "gender": "Male", "ip_address": "220.62.142.176" },
    { "id": 10, "first_name": "Tabby", "last_name": "Fortoun", "email": "tfortoun9@free.fr", "gender": "Female", "ip_address": "13.18.120.120" }];
   // map 
    for (let i = 0; i < dataArr.length; i++) {
        let element = dataArr[i];
        element.push(dataArr[i]);

    }
    return element
}
// example

var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10

let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5

In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.

 javascript callback function 
 
 "I will call back later!"
 A callback is a function passed as an argument to another function
 This technique allows a function to call another function
 A callback function can run after another function has finished

function myDisplayer(some) {
function myFirst() {
  myDisplayer("Hello");
}
function mySecond() {
  myDisplayer("Goodbye");
}
  document.getElementById("demo").innerHTML = some;

}


When to Use a Callback?
The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait
 for another function (like waiting for a file to load).
 
 Asynchronous JavaScript?
 Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()

 function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


JavaScript Promises?
fetch("http://localhost3000")
.then(res=> res.json());
.then((res)=>{
  console.log(res)
})

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code

 let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
const url="http//localhost3000"
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

A JavaScript Promise object can be:

The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

JavaScript Async?

"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise

 async function myFunction() {
  return Promise.resolve("Hello");
}
 
 myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
 
 // event trickely down 
 // event propagation
document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("grandparent clicked")
    } ,true);//capturing
document.querySelector("#parent")
    .addEventListener("click", (e) => {
        console.log("parent clicked")
        e.stopPropagation();
    },false);//bubbling
document.querySelector("#child")
    .addEventListener("click", () => {
        console.log("child clicked")
    },false);//bubbling
 
 
 let obj = {
  "arr":[1,2,3],
  "praveen": {
     "name":"kumar",
     "age":25,
     "boolean": true,
  "color": "gold",
  "null": null,
 }

}
// object apply
for (let key in obj.arr)(console.log(key,obj.arr[key]))

 obj.arr.forEach(ele=>{console.log(ele)})
 // for(let key in obj)(console.log(key,obj[key]))

let arr =[1,2,3,4,5]
arr.map((ele)=>{
	return ele*2
})

example  array-key and index of element or object - key and value.

  let arr =[1,2,3,4,5]
 	 arr.filter((ele)=>{
 	 	console.log(ele)
  		 return ele % 2 ===0;
  })
     let array =["a","b","c","d",1,2,3,4,5]
    	array.map((ele)=>{
    		return ele %2 !==0;
    }) 
 example array of object
     let array =[{"name":"praveen","age":29,"id":1},{"name":"kumar","age":30,"id":1}]
     	 array.filter((ele)=>{
     	 	console.log(ele);
     	 	return ele.age>25
     	 })
example 
      array =[{"name":"praveen","age":29,"id":1},{"name":"kumar","age":30,"id":1}]
     // array.filter(ele => ele.age >=30);
     array.map(ele=>ele.age>=30)
    let a= {"name":"kumar","age":30,"id":1}
     console.log(a.name);

 	let a=["a","b"]
     a.map((ele)=>{
     	console.log(ele)
     	return ele
     })
//forEach
	let a =[1,2,3]
      a.forEach((ele)=>{
     	console.log(ele)
     })

    let array =[{"name":"praveen","age":29,"id":1},{"name":"kumar","age":30,"id":1}]
     array.forEach((ele)=>{
     	console.log(ele.name)
     })
//mockaroo
  myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 } 
 console.log(myObj.name)
  myObj.cars.map((ele)=>{
  	console.log(ele.models)
    return ele.models
  })
let a = [
    {
        "id": 1,
        "first_name": "Lauree",
        "last_name": "Dellow",
        "email": "ldellow0@ask.com",
        "gender": "Genderfluid",
        "ip_address": "139.227.166.177"
    },
    {
        "id": 2,
        "first_name": "Lion",
        "last_name": "Rook",
        "email": "lrook1@ebay.co.uk",
        "gender": "Agender",
        "ip_address": "135.224.175.117"
    },
    {
        "id": 3,
        "first_name": "Ginny",
        "last_name": "Wheelwright",
        "email": "gwheelwright2@yelp.com",
        "gender": "Male",
        "ip_address": "38.9.54.211"
    },
    {
        "id": 4,
        "first_name": "Doralin",
        "last_name": "Shwenn",
        "email": "dshwenn3@1und1.de",
        "gender": "Genderqueer",
        "ip_address": "85.238.54.150"
    },
    {
        "id": 5,
        "first_name": "Marybelle",
        "last_name": "Augur",
        "email": "maugur4@hubpages.com",
        "gender": "Agender",
        "ip_address": "42.121.38.252"
    },
    {
        "id": 6,
        "first_name": "Adrianna",
        "last_name": "O' Scallan",
        "email": "aoscallan5@example.com",
        "gender": "Polygender",
        "ip_address": "124.90.82.46"
    }
   
]
 const b=a.map((ele)=>{
 	return ele["name":ele.email]
 })
 console.log(b);

const b = a.filter((ele) => {
    return ele.gender === "Polygender"
}).map((ele) => {
    console.log(ele)
    return ele.first_name + " " + ele.last_name ;

})

console.log(b)

const b =a.map((ele)=>{
    return {
        "name":ele.first_name + " " + ele.last_name  ,
        "email":ele.email,
        "gender":ele.gender
    }
})
console.log(b)

const b=a.map((ele)=>{
    return ele["email"]
})
console.log(b)
	

const b=a.map((ele)=>{
    return [{"name":ele.email}]
})
console.log(b);
arary map-transform-2d map- array.array.type return 

const c =a.filter((ele)=>{
	console.log(ele)
    return  ele.email
})
.map((ele) => {
        // console.log(ele)
        return ele.email   
    })
    console.log(c)
 const c=a.map((ele)=>{
 	return ele["name:ele.email"]
 })


A Web API is a developers dream.

    It can extend the functionality of the browser
    It can greatly simplify complex functions
    It can provide easy syntax to complex code

    What is Web API?

API stands for Application Programming Interface.

A Web API is an application programming interface for the Web.

A Browser API can extend the functionality of a web browser.

A Server API can extend the functionality of a web server.
url-unifrom resource locator
date and time
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
} 
  setTimeout(function(){ alert("Hello"); }, 3000);
  let myVar;
// setInterval
function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert(" hello Praveen!");
}
myFunction()
// setInterval


 setInterval(function(){alert("praveen")},3000);

 Debouncing- search- flipkart and amazon technique are used
 
let timeoutId;
		function a() {
			if(timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(b, 2000);
		}
		function b() {
			console.log("b")
		} 
 
 
arary map-transform-2 dimension  map- array.array.type return or arrayofarraytype
structure-object{key and value}
 3 dimension array- create object.

 a.map((ele)=>{
 	console.log(ele)

 let m =ele.map((data)=>{
 	console.log(data)
 	return data.email
 })
 	return m
 })

update method -

import React, { useState, useEffect } from "react";

const UpdateTodo = (props) => {
    const [inputItemUpdateState, inputItemUpdateSetState] = useState()

    useEffect(() => {
        inputItemUpdateSetState(props?.updateObj?.value);
    }, [props]
    );

    const handleInputUpdate = (e) => {
        const inputItemUpdate = e.target.value
        inputItemUpdateSetState(inputItemUpdate)
    }

    const handleUpdateItem = () => {
        props.callbackHandleUpdate(props?.updateObj?.index, inputItemUpdateState)
    }


    return (

        <>
            <input value={inputItemUpdateState} onChange={handleInputUpdate.bind(this)}/> 
            <button type="button" 
            onClick={handleUpdateItem.bind()} >UpdateItem</button>
        </>
    )
  }
export default UpdateTodo;
const array=JSON.parse(JSON.stringify(state))-copy

// array added-
  const araay=[...state.array],
  array.push(data)
  setstate({array:array})
// delete method 
 handleDelete(i) {
        console.log(i)
        const array = [...this.state.dataList];
        array.splice(i, 1);
        this.setState({ array });
    }
    properties or checked =?

lifeCycle method
Notice how componentDidMount and componentWillUnmount need to mirror each other. 
Lifecycle methods force us to split this logic even though conceptually code in 
both of them is related to the same effect.

For componentDidMount
useEffect(() => {
  // Your code here
}, []);

For componentDidUpdate

useEffect(() => {
  // Your code here
}, [yourDependency]);

For componentWillUnmount

useEffect(() => {
  // componentWillUnmount
  return () => {
     // Your code here
  }
}, [yourDependency]);


ajax -XMLhttpRequest-send and recived data

httpRequest.onreadystatechange = function(){
	httpRequest.open('GET', 'http://www.example.org/some.file', true);
	httpRequest.send();

    // Process the server response here.

abcdefgh
switch-url full-from----unifrom resource locator

import React, { useState } from "react";

export default function Category() {
    const [bookState, setBookState] = useState(
        method1   
         let wholeArray = Object.keys(obj).map(key => obj[key]);
        console.log(wholeArray);

 method2  
        const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      console.log(arr);
    )
    // useEffect(() => {
    //     const url = ("https://www.bookswagon.com/architecture-books")
    //     fetch(url)
    //         .then(response => response.json())
    //         .then((response) => {
    //             setBookState({
    //                 "bookList": response
    //             })
    //         })

    // }, [])

    // const arr = Object.keys(bookState).map((key) => [key, bookState[key]]);

    // console.log(arr);
    <div className="w-50 p-3">
    
    return (
        <>
      
            <ul className="list-group">          
                for(let k in bookState){
                    console.log(bookState)                  
                }
                <div>
                    <li className="list-group-item"></li>
                    
                </div>
            </ul>

        </>
    )
}



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
// method 1

// <Router>
//     <App/>
// </Router>
//  method 2
// <Switch>
//  switch -one element view- path-component
//  <Route path="/" Component={About}/></Route>
//   <Route  exact path="/home" Component={Home}/></Route>
// <Route  exact path="/home/praveen" Component={Praveen}/></Route>
// </Switch>

// <Link exect to ="/">About</Link>
// or 
// <NavLink exect activeClassName="/">About</NavLink>

hide element in react
{ searchToggle ? <SearchByTopicAndInterest callback={handleSearchToggle} /> : null}

css 
postions
The position property specifies the type of positioning method used 
for an element (static, relative, fixed, absolute or sticky).
There are five different position values:

    static-HTML elements are positioned static by default.- fixed -top-botton-left-right not effected.
    relative-An element with position: relative; is positioned relative to its normal position.-position adjust.
    fixed- same as relative position.
    absolute-A "positioned" element is one whose position is anything except static.
    // sticky-An element with position: sticky; is positioned based on the user's scroll position.

//     div.relative {
//   position: relative;
//   width: 400px;
//   height: 200px;
//   border: 3px solid #73AD21;
// } 

// div.absolute {
//   position: absolute;
//   top: 80px;
//   right: 0;
//   width: 200px;
//   height: 100px;
//   border: 3px solid #73AD21;
// }

postman- api call- get,post,put/patch,delete.


immutable-
Immutable data cannot be changed once created, leading to much simpler application development,
 no defensive copying, and enabling advanced memoization and change detection techniques 
 with simple logic. Persistent data presents a mutative 
API which does not update the data in-place, but instead always yields new updated data.
Immutable.js provides many Persistent 
Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.
 stricter control over data---make its easier to Implements---undo/redo-timetravel debugging -optimistic updates==better performance.

 crud operation 
 delete-method
  useState
  const array=state.array
   array.splice(i,1)
   setstate({
       array:arary
   })


 useEffect(() => {
        if (props.data !== undefined) {
            console.log(props?.data)
            const dataList = [...state.dataList]
            dataList.push(props.data)
            setState({ dataList })
        }
    }, [props])

  useEffect(() => {
        if (props.data !== undefined) {
            if(props.data?.id!==undefined){
                // alert("update")
                const dataList =[...state.dataList];
                const index=props.data.id;
                const newValue=props.data.first_name;
                console.log(index,newValue);
                dataList[index]= newValue;
                setState({dataList})

            }else{
                console.log(props?.data)
                const dataList = [...state.dataList]
                dataList.push(props.data)
                setState({ dataList })
            }          
        }
    }, [props])


json method- crud operation
 const json={}-create
 json["key"] = newValue
 json["key"]=or json.key
 let arr=[]
 
 for(let k in json){
arr.push(json[k])
}
return arr

 let val = parseInt(ele[0]["dt"] + "000"); let d = new Date(val);
          console.log(d)
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          var dayName = days[d.getDay()];
          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = months[d.getMonth()];
          let temperatue = (ele[0]["main"].temp - 273.15).toFixed(2)
          let id = (ele[0]["weather"]["0"]["id"])
          let IconMap = {
            "802": "fa fa-cloud",
            "803": "fa fa-cloud",

          }
        <div className="card-title">{monthName} {d.toLocaleString()}</div>

<html>
	<head>
		<style>
			body{
				font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
				
				}
		 	li{
				list-style-position:inside;
				border: solid 1px #efefef;
				padding:10px;
			}
			.headingStyle{
				font-weight: bold;
				font-size: 16px;
			}
			.subHeadingStyle{
				font-size: 12px;
				color:gray;
			}
			table{
					width: 100%;
					margin: 12px;
			}
			td{
 				text-align: left;
 				padding: 10px;	
 				border-bottom: 1px solid #efefef;	
			}
			th{
				padding: 15px;				
 				text-align: left;
 				padding: 10px;	
 				border-bottom: 1px solid #000;			
			}
			
			/*.praveen  td{

 				 border: 1px solid #000;
			}
			table:nth-child(1) tr:nth-child(1) td:nth-child(4){ background: red; }


			tr:nth-child(3){  background: red;}
			td:nth-child(3){  background: red;}

			
		</style>
	</head>

	<body>
		<ol style="list-style-type:none; list-style-position: inside;" >
			<li>
				<div class="headingStyle"> Compiling for aarch64 architecture 
				</div>
				<div class="subHeadingStyle">  architecture 
				</div>
				
			</li>
			<li>
				<div class="headingStyle"> Compiling for aarch64 architecture 
				</div>
				<div class="subHeadingStyle">  architecture 
				</div>
				
			</li>

			<li>
				<div class="headingStyle"> Compiling for aarch64 architecture 
				</div>
				<div class="subHeadingStyle">  architecture 
				</div>
				
			</li>

		</ol>
		<table>
			<thead>
				<tr>
					<th>1.1</th>
					<th>1.2</th>
					<th>1.3</th>
					<th>2.4</th>
				<tr>
			</thead>
			<tbody>
				<tr>
					<td>1.1</td>
					<td>1.2</td>
					<td>1.3</td>
					<td>2.4</td>
				<tr>
					<td>2.1</td>
					<td>2.2</td>
					<td>2.3</td>
					<td>2.4</td>
				<tr>
					<td>3.1</td>
					<td>3.2</td>
					<td>3.3</td>
					<td>3.4</td>
				<tr>
					<td>4.1</td>
					<td>4.2</td>
					<td>4.3</td>
					<td>4.4</td>
				<tr>
			</tbody>
		</table>
		<table class="praveen">
			<thead>
				<tr >
					<th>1.1</th>
					<th>1.2</th>
					<th>1.3</th>
					<th>2.4</th>
				<tr>
			</thead>
			<tbody>
				<tr >
					<td>1.1</td>
					<td>1.2</td>
					<td>1.3</td>
					<td>2.4</td>
				</tr>
				<tr>
					<td>2.1</td>
					<td>2.2</td>
					<td>2.3</td>
					<td>2.4</td>
				</tr>
				<tr>
					<td>3.1</td>
					<td>3.2</td>
					<td>3.3</td>
					<td>3.4</td>
				</tr>
				<tr>
					<td>4.1</td>
					<td>4.2</td>
					<td>4.3</td>
					<td>4.4</td>
				</tr>
			</tbody>
		</table>
	</body>

</html>


get method-
 useEffect(()=>{
  getTodo()
 },[])
//function reuse
 const getTodo = ()=>{

  TodoServerMasterGet()
  .then(res=>res.json())
  .then((res)=>{
     setstate({
      "postList":res
  })
  })
 }
 //post method
  const handleTodoCreate = (post: Post) => {
        TodoServerMasterPost(post)
            .then(() => {
                getTodos();
            })
    }

const handleDelete=(id)=>{
  TodoServerMasterPost(id)
          .then(() => {
                getTodos();
            })
}
const handleUpdatePost =(post:Post)=>{
  TodoServerMasterPut(post)
  .then(()=>{
    getTodos()
    setToggle(!toggle)

  })
}
// switch case use 
 const [toggle, setToggle] = useState(true);

update(){
  setToggle(!toggle)
}
newUpdate(){
  setToggle(!toggle)

}
 return (
  {toggle?(
    <div>create delete </div>
    ):(
    <div>update</div>
    )} 
  )

table - show and hide
<h1> show post</h1>
  {props.postList.length>0 ?(<table></table>
    ):(
    <div> no post yet
    </div
    )>
}

// disabled case
 const [disabled, setDisabled] = useState(true);

 const isvalid=(post:Post)=>{
  if(post.comment.length===0){
    return(false)
  }
  if(post.email.length===0){
    return(false)
  }
  return(true)

 }
const handleOnchange=()=>{
  let prevPost = JSON.parse(JSON.stringify(post));
  prevPost[e.target.name] = e.target.value;
    setPost(prevPost);
     const valid = isValid(prevPost);
       if(valid === true){
        setDisabled(false);
       }else{
        setDisabled(true);
       }
}

 <div className="mb-3">
                <select className="form-select" aria-label="Default select example"
                    name="type" onChange={handleOnChange} value={post.type} >
                    <option selected>Type</option>
                    <option value="General Topic">General Topic</option>
                    <option value="Computer Technology">Computer Technology</option>
                    <option value="Science Technology"> Science Technology</option>
                </select>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                    checked={post.checked} id="flexCheckChecked" name="checked" onChange={handleOnChangeChecked} />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

             const handleOnChangeChecked = (e: { target: { name: string | number; checked: any; }; }) => {
        let prevPost = JSON.parse(JSON.stringify(post));
        prevPost[e.target.name] = e.target.checked;
        setPost(prevPost);

        const valid = isValid(prevPost);
        if (valid === true) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }
     Image file  component
  const handleOnchange = (e: any): void => {
        const files = Array.from(e.target.files)
        getBase64(files[0], (encodeData: any) => {
            props.callback(encodeData)
        })
    }
    const getBase64 = (file: any, cb: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
  <input type="file" className="form-control"  onChange={handleOnchange}></input>

  createBook- components
    const handleUploadImgData=(encodeData:string)=>{
      const prevBook=JSON.parse(JSON.stringify(book));
      prevbook.imgData=encodeData
      setBook(prevbook)

    }
    <ImgUpload callback={handleUploadImgData} />
    
  master components

  const bookCreate=(book:Book)=>{
    const image:Image={
      data:book.imgData
    }
    ImageServerMasterPost(image)
    .then(res=>res.json());
    .then((res:Image)=>{
      bookServerMasterPost(book)
      .then(()=>{
        getBook();
      })
    })

  }

  bookList components
  const initialImage:Image={
    data:""
  }

  const[image,setImage]=useState(initialImage)
  const ShowImage=(_id:string)=>{
    imageServerGetOne(_id)
    .then(res=>res.json())
    .then((imageArr:Image[])=>{
      setImage(imageArr[0])
    })
  }
  <button onClick={()=>{
    showImage(book.image)
  }}></button>

  <img src={image.data} alt="" width="500px"></img>
add to cart
api-call
 cart servicesexport function CartServerMasterGet() {
  return fetch("http://localhost:4000/v1/carts");
}
model cart
import { Book } from "../../../admin/modules/BookAdmin/ModelBook";

export interface ICart {
  id: string;
  bookId: string;
}
export interface ICartMaster {
  bookList: Book[];
}

export function CartServerMasterPost(bookId: string) {
  return fetch("http://localhost:4000/v1/cart", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bookId,
    }),
  });
}

// home
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center align-items-center">
        <div
          className="col-xl-8 col-lg-9 col-md-10 layer-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1 className="display-3">
            Manage Book Store
            <NavLink
              activeClassName={"active"}
              className="nav-link"
              to="/admin"
            >
              Admin
            </NavLink>
            <NavLink
              activeClassName={"active"}
              className="nav-link"
              to="/public"
            >
              Public
            </NavLink>
          </h1>
          <div className="mb-4">
            <p className="lead px-xl-5">
              Save countless hours of design and development and ship performant
              sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import { useState, useEffect } from "react";
import { BookServerMasterGetId } from "../../../../admin/modules/BookAdmin/BookServicesAdmin";
import { Book } from "../../../../admin/modules/BookAdmin/ModelBook";
import { Image } from "../../../../admin/shared/services/imageModel";
import { ImageServerMasterGetOne } from "../../../../admin/shared/services/ImageServices";
import { CartServerMasterGet } from "../CartServices";
import { ICartMaster } from "../ModelCart";
export default function Cart() {
  const initialState: ICartMaster = {
    bookList: [],
  };

  const [state, setState] = useState(initialState);

  const buildBook = (res: any) => {
    console.log(res.length);
    for (let index = 0; index < res.length; index++) {
      console.log("buildBook");
      fetchBook(res[index].bookId);
    }
  };

  const fetchBook = (bookId: string) => {
    BookServerMasterGetId(bookId)
      .then((res) => res.json())
      .then((bookResponse) => {
        console.log("fetchBook");

        fetchImage(bookResponse);
      });
  };

  const fetchImage = (bookResponse: any) => {
    ImageServerMasterGetOne(bookResponse.imgData)
      .then((res) => res.json())
      .then((imageArr: Image[]) => {
        setTimeout(() => {
          bookResponse.imgData = imageArr[0].data;
          let newBookList = [...state.bookList];
          newBookList.push(bookResponse);
          console.log(newBookList.length);
          setState({
            bookList: newBookList,
          });
        }, 200);
      });
  };

  useEffect(() => {
    CartServerMasterGet()
      .then((res) => res.json())
      .then((res) => {
        let filterArr = res.filter(
          (v: any, i: any, a: any) =>
            a.findIndex((t: any) => t.bookId === v.bookId) === i
        );
        buildBook(filterArr);
      });
  }, []);
  return (
    <div className="w-25 p-3">
      {state.bookList.map((book: Book) => {
        return (
          <div className="card" key={book._id}>
            <img src={book.imgData} className="card-img-top" alt=""></img>
            <div className="card-body">
              <p className="card-text">{book.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


