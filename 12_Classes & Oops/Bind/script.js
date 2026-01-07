class react {
    constructor() {
        this.library = "React";
        this.server = "https://localhost:300";

        // Requirement:-
        document.querySelector('button')
        .addEventListener('click', this.handleclick.bind(this));
    }
    handleclick() {
        console.log("Button Clicked");
        console.log(this.server);
    }
}

const app = new react();