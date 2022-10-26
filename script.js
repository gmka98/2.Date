Function Timeworld(){
const str = new Date().toLocaleString('en-US', { timeZone: 'America/Anchorage' });
console.log(str);

const str = new Date().toLocaleString('en-US', { timeZone: 'Europe/Reykjavik' });
console.log(str);

const str = new Date().toLocaleString('en-US', { timeZone: 'Europe/Saint-Petersburg' });
console.log(str);
}
		
	
window.onload = displayClock();
function displayClock(){
  var display = new Date().toString();
  document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
}

//Exercice 2

function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }


  var date0 = new Date(2022, 9, 24); // 24 oct 2022
var date1 = new Date(1975, 11, 10); // 10 dec 1975

var numberOfDays = Math.ceil((date1 - date0) / 8.64e7); // 31


//Exercice 3

var date = new Date;
date.setTime(result_from_Date_getTime);

var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();

var year = date.getFullYear();
var month = date.getMonth(); 
var day = date.getDate();

var dayOfWeek = date.getDay(); 
var milliSeconds = date.getMilliseconds();



