// Create a new Date object
var dt = new Date();
// Set the inner HTML of the element with the ID "datetime" to the localized string representation of the date and time
document.getElementById("datetime").innerHTML = dt.toLocaleString();