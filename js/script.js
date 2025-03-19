/*let id          = document.getElementById('id');                    // THE EMPLOYEE ID TEXT BOX
let name        = document.getElementById('name');                  // THE FULL NAME TEXT BOX
let ext         = document.getElementById('ext');                   // THE EXTENSION TEXT BOX
let email       = document.getElementById('email');                 // THE EMAIL TEXT BOX
let department  = document.getElementById('department');            // THE DEPARTMENT TEXT BOX
let submit      = document.getElementById('submit');                // THE ADD EMPLOYEE BUTTON */

window.addEventListener("load", () => {
    console.log("Script loaded"); // Debugging

    const form = document.getElementById("empForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Stops the form from submitting
        console.log("Form submission prevented"); // Debugging

        // Collect form data
        const formData = {
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            ext: document.getElementById("ext").value,
            email: document.getElementById("email").value,
            department: document.getElementById("department").value
        };

        console.log("Form Data:", formData); // Display values in console
    });
});
