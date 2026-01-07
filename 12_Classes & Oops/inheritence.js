class User {
    constructor(username) {
        this.username = username;
    }

    logMe () {
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username); // No need to use .call due to super() keyword!!
        this.email = email;
        this.password = password;
    }

    addCourse () {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("FURY", "fury@avengers.com", "1234");

chai.addCourse();

chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai === teacher);
console.log(chai instanceof teacher);
console.log(chai instanceof User);