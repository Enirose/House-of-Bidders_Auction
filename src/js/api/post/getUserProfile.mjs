import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'get';
const profileUrl = `profiles/`;

export async function getUserProfile(name) {
  console.log(name);
  const token = load('token');

  const singleProfileUrl = `${Base_URL}${profileUrl}${name}?_listings=true`;
  const response = await fetch(singleProfileUrl, {
    method,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const postResult = await response.json();
  return postResult;
}
