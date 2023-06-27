# JavaScript Alarm Clock

This is a simple JavaScript alarm clock application that allows users to set alarms and receive alerts when the alarm time matches the current time.

## Features

- Display current time in 12-hour format
- Set an alarm by entering the hour, minute, and second values
- Validate input values for the alarm time
- Display a list of set alarms
- Delete alarms from the list
- Trigger alerts when the alarm time matches the current time

## Usage

To use the JavaScript alarm clock, follow these steps:

1. Open the `index.html` file in a web browser.
2. The current time will be displayed at the top of the page.
3. Enter the desired alarm time in the input fields for hour, minute, and second.
4. Select either 'AM' or 'PM' from the dropdown for specifying the time period.
5. Click the "Set Alarm" button to add the alarm to the list below.
6. The set alarms will be displayed in a list format with a "Delete" button next to each alarm.
7. To delete an alarm, click the corresponding "Delete" button.
8. When the current time matches any of the set alarm times, an alert will be triggered saying "Wake Up !!!".

## Code Explanation

- The `displayTime()` function is responsible for displaying the current time in 12-hour format and is called every second using `setInterval`.
- The `setAlarm()` function retrieves the input values for the hour, minute, second, and time period (AM/PM). It performs input validation and adds the alarm time to the alarms list.
- The `checkAlarms()` function checks the alarms list every second and triggers an alert if the current time matches any of the set alarm times.
- The `formatTime()` function is a helper function to format the time in 12-hour format.
- `setInterval` is used to update the clock and check alarms every second.


## Browser Compatibility

This JavaScript alarm clock is compatible with modern web browsers that support JavaScript.
