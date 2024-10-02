// const JsUser={
//     name: "name",
//     "name_new": "name2",
//     age: 18,
//     location: "Remote",
//     email: "name@vscode.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
//   }

// console.log(JsUser.email)
// console.log(JsUser["email"]) //another method for accessing objects ** use string in [] because keys are stored as strings by default

// //console.log(JsUser.full name) //cant be accessed 
// console.log(JsUser["full name"]) //so use this way

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//****** objects declaration using constructor/singleton **************//

// const user = new Object()
// console.log(user)

//or

const user={}
user.id = "123abc"
user.name = "name"
user.isLoggedIn=false
console.log(user)

//declaraing objects inside objects

const user2={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(user2.fullname)
console.log(user2.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

console.log(users[0].email)


console.log(user.hasOwnProperty("a"))  //a=property/key name --returns boolean as expeced 


//****OBJECT DE-STRUCTURING*******//

const course = {
    coursename: "js",
    price: 999,
    courseInstructor: "youtube"
}

console.log(course.coursename) //usual way 

const {coursename} = course  //use this if you need to access multiple times. write object name after =
console.log(coursename) //simpler syntax may be
  
const {courseInstructor: educator} = course  

console.log(educator) //output will be youtube 


/*******API**********/

//json
{

}

[
    {}, {}
]