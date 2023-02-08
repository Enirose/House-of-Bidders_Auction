import { API_Register } from "../api/auth/constants.mjs";
import { register } from "../api/auth/register.mjs";

export function registerListener() {
    const form = document.querySelector('#registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        register(API_Register, profile);
    });

}


// Other version of registerListener function

// export function registerListener() {
//     const form = document.querySelector('#registrationForm');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const name = form.name.value;
//         const password = form.password.value;
//         const profile = {
//             name: name,
//             email: email,
//             password: password,
//         };

//         register(API_Register, profile);
//     });
    
// }