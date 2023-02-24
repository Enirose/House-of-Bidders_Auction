import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'post';
const createUrl = `listings`;

export async function createpost(listingData) {
  const token = load('token');
  const createPostUrl = `${Base_URL}${createUrl}`;

  const response = await fetch(createPostUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(listingData),
  });

  const postResult = await response.json();

  if (response.ok) {
    window.location.reload();
    return postResult;
  } else {
    alert('Please use URL with publicly accessible images !');
  }
}
