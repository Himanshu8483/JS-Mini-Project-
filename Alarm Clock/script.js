
// Function to display the current time on the webpage
let current = () => {  // Define a function to show the current time
    let show = document.querySelector("#time");  // Select the element with id "time" to display the time
    let now = new Date();  // Create a new Date object to get the current time
    let time = now.toLocaleTimeString();  // Convert the time to a readable format (like 12:05:30 PM)
    show.innerHTML = `Current Time: ${time}`;  // Display the current time inside the HTML element
};
setInterval(current, 1000);  // Run the 'current' function every second to update the time


// Alarm Functionality 
let setAlarm = () => {  // Define a function to set an alarm
    let alarmTime = document.querySelector("#alarm").value;  // Get the alarm time input from the user
    let int = setInterval(() => {  // Check every second if the current time matches the alarm time
        let show = document.querySelector("#message");  // Select the element to show alarm messages
        show.innerHTML = `Alarm set for ${alarmTime}`;  // Display a message with the alarm time

        let time = new Date();  // Get the current time
        time = `${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`;  // Format the time as 'HH:MM'

        if (alarmTime == time) {  // Check if the current time matches the alarm time
            show.innerHTML = "Alarm Snoozing";  // Show a message indicating the alarm is ringing
            document.querySelector("#ring").play();  // Play the alarm sound
            show.style.color = "black" // Change the message color to black

            setTimeout(() => {  // Stop the alarm after 6 seconds
                document.querySelector("#ring").pause();  // Pause the alarm sound
                clearInterval(int);  // Stop checking the time
                show.innerHTML = "Alarm Stopped";  // Update the message to indicate the alarm has stopped
            }, 6000);  // Stop the alarm sound after 6 seconds
        }
    }, 1000);  // Check the time every second
};



