import { register } from '../api/auth/register.mjs';
import { Register_URL } from '../api/auth/constants.mjs';

/**
 * API call to register the user
 * @param {string} url
 * @param {object} userData
 */

export function registerListener() {
  const form = document.querySelector('#registrationForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    register(Register_URL, profile);
  });
}
