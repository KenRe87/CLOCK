// var time = new Date();
// how to get the current date
// new date object
// console.log(time.getHours()%12);
// will divide the given hour by 12 after 12pm
// console logs everything to the system: Hours, minutes, and seconds
// you will get the date in the 24 hour cycle. You can adjust that
// by adding a modifier '%' to divide the 24 hour cycle into 12
// notes above
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// these allow javascript to have access to all of these methods, 
// you can also check to make sure that your javascript is linked 
// by opening 'inspect' in the chrome browser.
// accessing text content of the clock:
var clock= document.getElementById('clock');
// this is pulling the 'clock'element from the linked HTML file
function pinkClock() {
	var time = new Date();
	var hours = (time.getHours()%12).toString();
// remember this is being divided by 12 if it is over the 12 hour span
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
// the above code just makes sure that the clock displays correctly
// using the double-digit format. So if a number is less than two digits
// it gets a zero added to it.
	}

	var clockStr = hours + ':' + minutes + ':' + seconds;

	clock.textContent = clockStr;
}
pinkClock();//first console.log statement that insures the function
// happens.


setInterval(pinkClock, 1000); //executes the fucntion every 1000 milliseseconds
// setInterval tells you how many times your function (action) is happening.
// this code without anything else works, but it will pause before 
// the function starts, resulting in white space. the function has to
// be run once befor we set the intervals to allow for smooth
// transition.
setTimeout(function(){
    alert("alert box");
}, 0);


