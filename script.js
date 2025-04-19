// Obtaining the checkbutton, clearbutton, results, and input from HTML

const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const input = document.getElementById("user-input");

// Regex Declaration
const regex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

// Presence and Validation Check

const presenceCheck = () => {
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }

    const digitsOnly = input.value.replace(/\D/g, "");
    const digitCount = digitsOnly.length;

    if ((digitCount === 10 || digitCount === 11) && regex.test(input.value)) {
        results.innerHTML += `<p class="valid">Valid US Number: ${input.value}</p>`;
    } else {
        results.innerHTML += `<p class="invalid">Invalid US Number: ${input.value}</p>`;
    }
};

// Check Button

checkButton.addEventListener("click", () => {
    presenceCheck();
    input.value = ""; // clear the input field after checking whether number is valid or not //
});

// Enter Key

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        presenceCheck();
        input.value = ""; // clear the input field after checking whether number is valid or not //
    }
});

// Clear Button

clearButton.addEventListener("click", () => {
    results.innerHTML = "";  // Clears the appended results
    input.value = ""; // clear the input field after checking whether number is valid or not //
});
