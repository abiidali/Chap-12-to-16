//  Chap 12 - 13

// Question #1

// var character = prompt("Enter a character:");

// function checkCharacterType(char) {
//     if (!isNaN(parseInt(char))) {
//     document.write(char + " is a number.");
//     }
//     else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//         document.write(char + " is an uppercase letter.");
//     }
//     else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//         document.write(char + " is a lowercase letter.");
//     }
//     else {
//         document.write(char + " is neither a number nor a letter.");
//     }
// }

// checkCharacterType(character);

// Question #2

// var integer1 = parseInt(prompt("Enter the first integer:"));
// var integer2 = parseInt(prompt("Enter the second integer:"));

// if (integer1 > integer2) {
//     console.log(integer1 + " is larger than " + integer2);
// } else if (integer1 < integer2) {
//     console.log(integer2 + " is larger than " + integer1);
// } else {
//     console.log("Both integers are equal.");
// }

// Question #3

// var number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// Question #4

// function isVowel(char) {
//     var lowerChar = char.toLowerCase();
//     return lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u';
// }

// var character = prompt("Enter a character:");
// var result = isVowel(character);

// alert("Is the character a vowel? " + result);

// Question #5

// var correctPassword = "password123";
// var userPassword = prompt("Enter your password:");
// if (userPassword === "") {
//     document.write("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password.");
// } else {
//     document.write("Incorrect password.");
// }

// Question #6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// if (condition) {
// } else {
// }

// Question #7

// var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7:00 PM):"));
// var hour, minute, period;

// if (time >= 0 && time <= 2359) {
//     hour = Math.floor(time / 100);
//     minute = time % 100;

//     if (hour >= 12) {
//         period = "PM";
//         if (hour > 12) {
//             hour -= 12;
//         }
//     } else {
//         period = "AM";
//         if (hour === 0) {
//             hour = 12;
//         }
//     }

//     alert("The time in 12-hour clock format is: " + hour + ":" + (minute < 10 ? '0' : '') + minute + " " + period);
// } else {
//     alert("Invalid time format. Please enter a time in the range 0000 to 2359.");
// }

// Chap 14 - 16

// Question #1

//    var studentNames = [];

// Question #2

// var studentNames = {
//     names: []
// };

// Question #3

// var stringsArray = ["football", "cricket", "boxing", "tennis"];

// Question #4

// var numbersArray = [1, 2, 3, 4, 5];

// Question #5

// var booleanArray = [true, false, true, false];

// Question #6

// var mixedArray = ["ball", 123, true, null, { name: "Abid", age: 20 }];

// Question #7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// var qualificationsDiv = document.getElementById("qualifications");

// var ul = document.createElement("ul");

// qualifications.forEach(function(qualification) {
//     var li = document.createElement("li");
//     li.textContent = qualification;
//     ul.appendChild(li);
// });

// qualificationsDiv.appendChild(ul);

// Question #8

// var studentNames = ["Abid", "Kabeer", "Meer", "Shay"];

// var scores = [430, 380, 450];

// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     console.log(studentNames[i] + ": Scored " + scores[i] + " out of " + totalMarks + ", Percentage: " + percentage.toFixed(2) + "%");
// }

// Question #9

// var colors = ["Red", "Green", "Blue"];

// document.write("<h3>Original Array:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);

// document.write("<h3>Array after adding color to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// document.write("<h3>Array after adding color to the end:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// colors.unshift("Yellow", "Orange");

// document.write("<h3>Array after adding two colors to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");
// colors.shift();

// document.write("<h3>Array after deleting the first color:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// colors.pop();

// document.write("<h3>Array after deleting the last color:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);

// document.write("<h3>Array after adding a color at a desired position:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// var numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numToDelete);

// document.write("<h3>Array after deleting color(s) at a desired position:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// Question #10

// var studentScores = [85, 72, 93, 64, 78];

// studentScores.sort(function(a, b) {
//     return a - b;
// });

// console.log("Sorted student scores in ascending order: " + studentScores.join(", "));

// Question #11

// var cities = ["karachi", "kpk", "rawalpindi", "peshawar", "lahore"];

// var selectedCities = cities.slice(0, 3);

// console.log("Selected cities: " + selectedCities.join(", "));

// Question #12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);

// Question #13

// var fifoArray = [];

// fifoArray.push("value1");
// fifoArray.push("value2");
// fifoArray.push("value3");

// var firstValue = fifoArray.shift();
// var secondValue = fifoArray.shift();
// var thirdValue = fifoArray.shift();

// console.log("First value: " + firstValue);
// console.log("Second value: " + secondValue);
// console.log("Third value: " + thirdValue);

// Question #14

// var lifoArray = [];

// lifoArray.push("value1");
// lifoArray.push("value2");
// lifoArray.push("value3");

// var lastValue = lifoArray.pop();
// var secondLastValue = lifoArray.pop();
// var thirdLastValue = lifoArray.pop();

// console.log("Last value: " + lastValue);
// console.log("Second last value: " + secondLastValue);
// console.log("Third last value: " + thirdLastValue);

// Question #15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var selectHTML = "<select>";

// for (var i = 0; i < manufacturers.length; i++) {
//     selectHTML += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
// }

// selectHTML += "</select>";

// document.write(selectHTML);
