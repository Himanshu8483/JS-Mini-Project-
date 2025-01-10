
// Function to calculate age based on the entered birth year
let age = () => {
    let show = document.querySelector("#text").value; // Get the birth year from the input
    let time = new Date(); // Get the current date
    let result = time.getFullYear() - show; // Calculate age (current year - birth year)
    let show1 = document.querySelector("#totalAge"); // Select the paragraph to display the result
    show1.innerHTML = `You Are ${result} Year's Old`; // Display the calculated age
    show1.style.color="#26317B"
    
    if(show=="" || show.length!==4){
        show1.innerHTML="Please Enter Valid Birth Year"
    }
};
let reset = ()=>{
    let show1 = document.querySelector("#totalAge"); // Select the paragraph to display the result
    show1.innerHTML=""  // Clear the paragraph text
    document.querySelector("#text").value = ""; // Clear the input field
}



