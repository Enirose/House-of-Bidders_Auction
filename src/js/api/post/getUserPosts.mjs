import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'get';

export async function getUserPosts(name) {
  const token = load('token');
  const UserPostUrl = `${Base_URL}profiles/${name}/listings?_seller=true&_bids=true&sort=created&sortOrder=desc`;

  const response = await fetch(UserPostUrl, {
    method,
    header: {
      'Content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  const postResult = await response.json();
  return postResult;
}
