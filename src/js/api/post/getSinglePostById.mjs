import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'get';
const allListId = `listings/`;

export async function getPostId(id) {
  const token = load('token');
  const getPostUrl = `${Base_URL}${allListId}${id}?_seller=true&_bids=true`;

  const response = await fetch(getPostUrl, {
    method,
    headers: {
      'Content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  const postResult = await response.json();
  return postResult;
}
