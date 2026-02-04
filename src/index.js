// Random number generator function
function getRandom(max) {
    return Math.floor(Math.random() * max); 
}

// Strings for password generation
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const symbols = "!@#$%&*+?";                
const numbers = "0123456789";               

// Function to generate password
function generatePassword(length = 5) {
    let password = "";

    for (let i = 0; i < length; i++) {
        const type = getRandom(4); // 0-3

        if (type === 0) {
            password += alphabet[getRandom(alphabet.length)]; // Uppercase letter
        } 
        else if (type === 1) {
            password += alphabet[getRandom(alphabet.length)].toLowerCase(); // Lowercase letter
        } 
        else if (type === 2) {
            password += symbols[getRandom(symbols.length)]; // Symbol
        } 
        else {
            password += numbers[getRandom(numbers.length)]; // Number
        }
    }

    return password;
}

// DOM elements
const passwordDisplay = document.getElementById("H1");
const refreshBtn = document.getElementById("refreshBtn");
const copyBtn = document.getElementById("copyBtn");

// Event listener for generating password
refreshBtn.addEventListener("click", () => {
    const newPassword = generatePassword(8); // 8 character password
    passwordDisplay.textContent = newPassword;
});

// Event listener for copying password
copyBtn.addEventListener("click", () => {
    const password = passwordDisplay.textContent;
    if(password !== "------") {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy password");
        });
    }
});
