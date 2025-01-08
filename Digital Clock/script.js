// Digital Clock
setInterval(() => {
    let show = document.querySelector("#display"); // Select the element to display the digital clock
    let time = new Date(); // Get the current date and time
    let currentTime = `${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}:${time.getSeconds().toString().padStart(2,"0")}`;  // Format time as HH:MM:SS
    show.innerHTML = currentTime; // Display the current time
}, 1000); // Update the digital clock every second

// Function to display the current day name
    let show = document.querySelector("#target"); // Select the paragraph to display the result
    let time = new Date(); // Get the current date
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    show.innerHTML = arr[time.getDay()]; // Display the name of the current day
    show.style.color="#0d4f7f"