import * as storage from '../../localStorage/localStorage.mjs';
/**
 * Login user
 * @param {string} url
 * @param {object} profile
 * @returns
 */

const method = 'post';
const errorMsg = document.querySelector('.errorMessage');

export async function login(url, profile) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });

  const json = await response.json();
  const { accessToken, ...user } = json;

  if (response.ok) {
    storage.save('token', accessToken);
    storage.save('profile', user);

    window.location.replace('/profile.html');
    return response;
  } else {
    errorMsg.classList.add('alert-warning');
    errorMsg.innerHTML += `Something went wrong, try another email or password!`;
    // alert('Please enter your valid email or password');
  }
}
