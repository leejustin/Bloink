//Callback for triggering an alarm
chrome.alarms.onAlarm.addListener(function( alarm ) {
	console.log("DEBUG: Alarm has triggered!", alarm);
});


//TODO create the alarm event