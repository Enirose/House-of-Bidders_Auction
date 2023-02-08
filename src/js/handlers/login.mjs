import { API_Login } from "../api/auth/constants.mjs";
import { login } from "../api/auth/login.mjs";

export function loginListener() {
    const form = document.querySelector('#loginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new formData(form);
        const profile = Object.fromEntries(formData.entries());

        login(API_Login, profile);
    });
};

// Other version of loginListener function

// export function loginListener() {
//     const form = document.querySelector('#registrationForm');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         const profile = {
//             email: email,
//             password: password,
//         };

//         login(API_Login, profile);
//     });
    
// }