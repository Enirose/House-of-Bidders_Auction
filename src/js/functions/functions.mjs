import { load } from '../localStorage/localStorage.mjs';

/**
 * Fetch user
 * @returns
 */
export function getUserInfo() {
  const user = load('profile');
  return user;
}

export function getUserName() {
  const user = getUserInfo('profile');
  // const profilePage = document.querySelector('#profilePage');
  // profilePage.href += `?name= ${user.name}`;
  return user.name;
}

/**
 * Fetch or replace user's avatar
 */
export function replaceAvatar() {
  const user = getUserInfo();
  if (user.avatar != null && user.avatar != '') {
    const currentAvatar = document.querySelector('#currentAvatar');
    currentAvatar.src = user.avatar;
  }
}

/**
 * Remove data
 */

export function signOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  localStorage.removeItem('credits');
  window.location.replace8('/login.html');
}

// Formatted countDown timer
// export function endDate(timer) {
//   const date = new Date(timer.endsAt);
//   const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };
//   const formmattedDate = date.toLocaleDateString('en-GB', options);
//   document.querySelector('#ending').innerHTML = formmattedDate;
// }
