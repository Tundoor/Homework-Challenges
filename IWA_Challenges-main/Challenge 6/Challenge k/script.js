const nickname= "Timmy";
const firstname = "Timothy";
let greeting = nickname ? nickname : firstname
if (nickname === "" && firstname === "") {
    console.log("Good Morning!")
} else {
console.log(`Good Morning, ${greeting}!`)}
 