import { remove } from '../../localStorage/localStorage.mjs';

export function signOut() {
  remove('profile');
  remove('token');
}

export function SignedOut() {
  const logoutBtn = document.querySelector('#signoutBtn');
  logoutBtn.onclick = signOut;
}
