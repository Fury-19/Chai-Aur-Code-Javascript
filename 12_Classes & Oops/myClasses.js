class User
{
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword()
    {
        return `${this.password}abc`;
    }

    changeUsername ()
    {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("Nick", "nick@avengers.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// BTS If classes weren't avaiaible!!

function user (username, email, password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function ()
{
    return `${this.username.toUpperCase()}`; 
}

// Other method of function can also be declared using similar method!!
