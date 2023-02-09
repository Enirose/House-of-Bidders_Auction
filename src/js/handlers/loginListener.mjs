import { login } from '../api/auth/login.mjs';
import { Login_URL } from '../api/auth/constants.mjs';

export function loginListener() {
  const form = document.querySelector('#loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    login(Login_URL, profile);
  });
}
