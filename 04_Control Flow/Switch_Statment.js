// SWITCH Statement:

// Basic syntax:-

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Example:
const month = 3;

// Assume you have a key to a lock (here month acts as key) then you have to go from top to bottom along
// with checking if a particualr lock is able to get unlocked and executed!!

switch (month) {
    case 1: // This means if month is equal to '1'
        console.log("January");
        break;
    case 2: // This means if month is equal to '2'
        console.log("February");
        break;
    case 3: // This means if month is equal to '3'
        console.log("March");
        break;
    case 4: // This means if month is equal to '4'
        console.log("April");
        break;
    case 5: // This means if month is equal to '5'
        console.log("May");
        break;
    case 6: // This means if month is equal to '6'
        console.log("June");
        break;
    case 7: // This means if month is equal to '7'
        console.log("July");
        break;
    case 8: // This means if month is equal to '8'
        console.log("August");
        break;
    case 9: // This means if month is equal to '9'
        console.log("September");
        break;
    case 10: // This means if month is equal to '10'
        console.log("October");
        break;
    case 11: // This means if month is equal to '11'
        console.log("November");
        break;
    case 12: // This means if month is equal to '12'
        console.log("December");
        break;

    default:
        console.log("Not Valid Month Number!!");
        break;
}