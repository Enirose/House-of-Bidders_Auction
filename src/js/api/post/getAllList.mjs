import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'get';
const AllListUrl = `listings?&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`;

export async function getPosts() {
  const token = load('token');

  const getpostUrl = `${Base_URL}${AllListUrl}`;

  const response = await fetch(getpostUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  return result;
}
