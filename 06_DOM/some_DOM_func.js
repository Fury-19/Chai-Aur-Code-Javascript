// Basic difference in .innerText and .innerContent :-

// .innerText: It gives only the visible text on webpage of a particular class or id!

// .textContent: It gives all the text data visible or not visible(i.e. css property -> display: none) on a webpage!

// .innerHTML: It gives complete HTML code in a particular tag of HTML!

// Some Important Query Selectors:=

// querySelector(): It gives the first occuring of the passed argument tag or any other query!!

// If we want to pass an id in arguments of such functons we need to use '#' in front of passing id name!!

// If we want to pass an class in arguments of such functons we need to use '.' in front of passing class name!!

// We can also pass many kind of tags through these functions like: <input> tag etc.!

// By using querySelectorAll() we will get all the tags related to passed argument in the complete document!
// The returnes data type by this fucntion is not actually an array but it is similar to an array!!

// The dataType returned is known as nodeList but it need to be converted to array to employ availaibility of map()!

// There are also some type of get...... functons like getElementsByClassName() they return data in form of an 
// HTML Collection which is different from array and there is no function to iterate over that dataType.
// So to get iteration ability we need to convert that dataType into an array!

// To Convert that data type we can use : Array.from(argument)!