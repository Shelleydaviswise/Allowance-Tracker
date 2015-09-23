



var initialDate = new Date(2012, 11, 1); // Attention: month is zero-based
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);
alert(daysSince); // 80