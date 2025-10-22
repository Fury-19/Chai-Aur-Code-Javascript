const accountId = 144553
let accountEmail = "fury@googly.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 23546 -> Not Allowed!!

accountEmail = "fury@microsoft.com"

accountPassword = "34514"

accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Other Method for Output!! -> console.table([...]) => Gives data in tabular form!!

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// Prefer not to use var because of issue in block scope and functional scope!!