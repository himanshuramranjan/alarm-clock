// Function to display current time in 12-hour format
function displayTime() {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // Convert the hour to 12-hour format
  hour = hour % 12 || 12;

  const timeElement = document.getElementById('time');
  timeElement.textContent = `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
}

// Function to update the clock every second
setInterval(displayTime, 1000);

// Function to set an alarm
function setAlarm() {
  const hourInput = document.getElementById('hour');
  const minuteInput = document.getElementById('minute');
  const secondInput = document.getElementById('second');
  const amPm = document.getElementById('am-pm').value;

  const hour = parseInt(hourInput.value);
  const minute = parseInt(minuteInput.value);
  const second = parseInt(secondInput.value);

  // Check if the hour input is valid
  if (hour < 0 || hour > 12 || isNaN(hour)) {
    alert('Invalid hour value! Please enter a number between 0 and 12.');
    hourInput.value = '';
    return;
  }

  // Check if the minute input is valid
  if (minute < 0 || minute >= 60 || isNaN(minute)) {
    alert('Invalid minute value! Please enter a number between 0 and 59.');
    minuteInput.value = '';
    return;
  }

  // Check if the second input is valid
  if (second < 0 || second >= 60 || isNaN(second)) {
    alert('Invalid second value! Please enter a number between 0 and 59.');
    secondInput.value = '';
    return;
  }

  // Convert the hour to 24-hour format for internal use
  const hour12 = amPm === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour);
  const alarmTime = formatTime(hour12, minute, second, amPm);

  const alarmsList = document.getElementById('alarms');
  const alarmItem = document.createElement('li');
  alarmItem.textContent = alarmTime;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button'; 

  // Event handler for deleting the alarm
  deleteButton.onclick = function() {
    this.parentElement.remove();
  };

  // Append the delete button to the alarm item
  alarmItem.appendChild(deleteButton);
  alarmsList.appendChild(alarmItem);

  // Clear input fields after setting the alarm
  hourInput.value = '';
  minuteInput.value = '';
  secondInput.value = '';

  // Clear am-pm selection
  document.getElementById('am-pm').value = 'AM';
}

// Helper function to format time in 12-hour format
function formatTime(hour, minute, second, amPm) {
  return `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
}

// Function to check alarms and trigger alerts
function checkAlarms() {
  const now = new Date();
  const currentHour = now.getHours() % 12 || 12;
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();
  const currentAmPm = now.getHours() >= 12 ? 'PM' : 'AM';
  // Determine the current time in 12-hour format
  const currentTime = formatTime(currentHour, currentMinute, currentSecond, currentAmPm);

  const alarms = document.getElementById('alarms').getElementsByTagName('li');
  for (let i = 0; i < alarms.length; i++) {
    let alarmTime = alarms[i].textContent;

    // Extract the alarm time from the alarm item text
    alarmTime = alarmTime.slice(0, -6);

    // Compare the alarm time with the current time
    if (String(alarmTime) === String(currentTime)) {
      alert('Wake Up!!!');
    }
  }
}

// Function to check alarms every second
setInterval(checkAlarms, 1000);
