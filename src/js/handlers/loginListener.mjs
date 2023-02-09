import { login } from '../api/auth/login.mjs';

export function loginListener() {
  const form = document.querySelector('#loginForm');

  form.addEventListener('submit', (e) => {
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    login(profile);
  });
}
