import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'post';
const createUrl = `listings`;

export async function createpost() {
  const token = load('token');
  const createPostUrl = `${Base_URL}${createUrl}`;

  const response = await fetch(createPostUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  });
  const postResult = await response.json();
  console.log(postResult);
  return postResult;
}
