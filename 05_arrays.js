const myArr=[0,1,2,3,4,5, true, "string", [0,1]]
const myArr2= new Array(0,1,2,5,8)


console.log(myArr[8])  //zero-based indexing as expected
console.log(myArr.length)

//array methods

// myArr.push(6)
// // myArr.pop()  //deletes the last 
// myArr.unshift(7)  //add 9 at the start //not good method
// myArr.shift() //deletes the element added from unshift

console.log(myArr.includes(9))  //false



//SLICE, SPLICE

console.log("A",myArr)

const myn1=myArr.slice(0,3)   //start from index 1 and end at (3-1)=2
console.log(myn1)

const myn2=myArr.splice(0,3) //inclides last index also
console.log(myn2)

//note that splice manupulates the original array also 💀
//printing myn2 after splicing will print the array without the sliced indexed elements

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//array ke andar array


// all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("name"))
console.log(Array.from("name"))
console.log(Array.from({name: "name"})) // need to mention we need arrays of keys or keyvalues???

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



