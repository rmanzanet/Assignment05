let id          = document.getElementById('id');                    // THE EMPLOYEE ID TEXT BOX
let name        = document.getElementById('name');                  // THE FULL NAME TEXT BOX
let ext         = document.getElementById('ext');                   // THE EXTENSION TEXT BOX
let email       = document.getElementById('email');                 // THE EMAIL TEXT BOX
let department  = document.getElementById('department');            // THE DEPARTMENT TEXT BOX
let submit      = document.getElementById('submit');                // THE ADD EMPLOYEE BUTTON

window.addEventListener("load", () => {
    const $ = (id) => document.getElementById(id); // Helper function

    $("empForm").addEventListener("submit", (e) => {
        e.preventDefault(); // Prevents the form from actually submitting

        // Collect and log form data
        console.log({
            id: $("id").value,
            name: $("name").value,
            ext: $("ext").value,
            email: $("email").value,
            department: $("department").value
        });
    });
});

