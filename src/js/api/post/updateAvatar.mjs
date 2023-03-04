import { getUserName } from '../../functions/functions.mjs';
import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'put';
const avatarUrl = `profiles/`;
const errormsg = document.querySelector('#errorMessage');

/**
 * User update avatar on profile page
 * @param {*}
 */

export async function updateAvatar(avatarData) {
  try {
    const token = load('token');
    const name = await getUserName('profile');

    const updateAvatarUrl = `${Base_URL}${avatarUrl}${name}/media`;

    const response = await fetch(updateAvatarUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(avatarData),
    });

    const result = await response.json();
    window.location.reload();

    if (result.statusCode) {
      errormsg.innerHTML = 'Invalid image URL. Please enter valid Url!';
    }
  } catch (error) {
    console.log(error);
  }
}
