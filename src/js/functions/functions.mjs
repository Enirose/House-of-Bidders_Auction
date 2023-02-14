/**
 * Fetch user
 * @returns
 */
export function getUserInfo() {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}

export function newProfileUser() {
  const user = getUserInfo();
  const profilePage = document.querySelector('#profilePage');
  profilePage.href += `?name=${user.name}`;
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
