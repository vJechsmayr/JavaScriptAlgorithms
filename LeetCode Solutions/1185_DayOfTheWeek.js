var day = prompt("Day");
var month = prompt("Month");
var year = prompt("Year");

var date = new Date(day+"-"+month+"-"+year);

var day = date.getDay();

var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

alert(days[day].toString());
