/*let id          = document.getElementById('id');                    // THE EMPLOYEE ID TEXT BOX
let name        = document.getElementById('name');                  // THE FULL NAME TEXT BOX
let ext         = document.getElementById('ext');                   // THE EXTENSION TEXT BOX
let email       = document.getElementById('email');                 // THE EMAIL TEXT BOX
let department  = document.getElementById('department');            // THE DEPARTMENT TEXT BOX
let submit      = document.getElementById('submit');                // THE ADD EMPLOYEE BUTTON */

window.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // ✅ Debugging message

    const form = document.querySelector("#empForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // 🚀 Stops form from submitting

        // Get form values
        const id = document.querySelector("#id").value;
        const name = document.querySelector("#name").value;
        const ext = document.querySelector("#ext").value;
        const email = document.querySelector("#email").value;
        const department = document.querySelector("#department").value;

        // Log values
        console.log({ id, name, ext, email, department });

        // Optional: Clear form after submission
        form.reset();
    });
});
