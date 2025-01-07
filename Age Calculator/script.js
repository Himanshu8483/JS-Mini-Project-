
// Function to calculate age based on the entered birth year
let age = () => {
    let show = document.querySelector("#text").value; // Get the birth year from the input
    let time = new Date(); // Get the current date
    let result = time.getFullYear() - show; // Calculate age (current year - birth year)
    let show1 = document.querySelector("#totalAge"); // Select the paragraph to display the result
    show1.innerHTML = `<h2>You Are ${result} Year's Old</h2>`; // Display the calculated age
    show1.style.color="#26317B"
};
