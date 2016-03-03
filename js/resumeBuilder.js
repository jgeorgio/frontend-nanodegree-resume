/*  Testing append() and replace() methods


$("#main").append(["John Georgiou"])

var email = "john.georgiou@outlook.com";
var newEmail =
    email.replace("outlook", "fourseasons");

console.log(email);


var awesomeThoughts = "I am John and I am AWESOME!";
var funThoughts =
	awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

console.log(funThoughts);

*/

var name = "John Georgiou";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "IT Support Analyst"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);