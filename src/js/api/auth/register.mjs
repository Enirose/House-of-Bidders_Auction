/**
 * User Register
 * @param {string} url
 *@param {object} profile
 @returns
 */

const method = 'post';
const errorMsg = document.querySelector('.errorMessage');

export async function register(url, profile) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });

  const result = await response.json();

  if (response.ok) {
    window.location.replace('/login.html');
    return result;
  } else {
    errorMsg.classList.add('alert-warning');
    errorMsg.innerHTML += `That account already exist! Please create a new one.`;
    return false;
  }
}
