const reqURL = 'https://api.github.com/users/hiteshchoudhary';

const xhr = new XMLHttpRequest();
xhr.open('GET', reqURL);

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4)
    {
        const data = this.responseText;

        console.log(typeof data); // Currently the data will be in form of string, we need to parse it to JSON!!

        console.log(data.followers); // Undefined behaviour due to string data type!
        
        // Firstly we need to parse the data to JSON!

        const actData = JSON.parse(this.responseText); // Now object data type!

        console.log(typeof actData);

        console.log(actData.followers);
    }
};

xhr.send()