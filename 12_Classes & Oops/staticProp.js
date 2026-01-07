class User {
    constructor (username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // While making any entity instance of other if we want to prevent any part to be instance of other then we can use static keyword!!
    // Example:-
    static createId() {
        return `123`;
    }
}
const fury = new User ("fury");
// console.log(fury.createId());

class teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId());