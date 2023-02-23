import { remove } from '../../localStorage/localStorage.mjs';

export function signOut() {
  remove('profile');
  remove('token');
}
