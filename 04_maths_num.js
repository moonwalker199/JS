const score= 400  //print will be 400

const balance = new Number(100)
console.log(balance)  //print will be [Number:400]

console.log(balance.toString)
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //precision value 100.00  argument is the number of digits after decimals to be shown



const otherNumber = 23.669
console.log(otherNumber.toPrecision(4)) //kind of rounding off to 4 digits inclides exponential form and all for different tyoes of input


//******************Maths************//

console.log(Math.abs(-6))
console.log(Math.round(4.6)); 
console.log(Math.ceil(4.2)); //gif
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.sqrt(81))


console.log(Math.random())  //values always [0,1]

console.log((Math.random()*10)) //specific adjustments for specific values from random function

//eg random values from [10,20]

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)- min ))  //forma for random between two specific given numbers (floor for only integers😎) 




//other maths documentation



// *********DATES DATES DATES ************** //

let myDate =new Date
console.log(myDate)   //output not readable
console.log(myDate.toString()) //convert to string
console.log(myDate.toDateString()) 
console.log(myDate.toLocaleString())
console.log(typeof myDate) //object



// let myCreatedDate = new Date(2023, 0, 23) //month starts from javascript
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //4th and 5th arguments are time hour and min
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //milliseconds from 1/1/1970
// console.log(myCreatedDate.getTime());  milliseconds from mydate

// console.log(Math.floor(Date.now()/1000));  //in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) //+1 since month starts from 0




// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })

//done part1
