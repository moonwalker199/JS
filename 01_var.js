console.log("hello")
const accountId = 144553 //const can be changed
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


accountEmail = "hc@hc.com"  
accountPassword = "21212121"  
accountCity = "Bengaluru"

console.log(accountId);



/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

