import { load } from '../../localStorage/localStorage.mjs';
import { Base_URL } from '../auth/constants.mjs';

const method = 'post';
const querySelector = document.location.search;
const params = new URLSearchParams(querySelector);
let id = params.get('id');

export async function CreateBid(bidTotal) {
  const token = load('token');
  const createBidUrl = `${Base_URL}listings/${id}/bids`;

  let bidAmount = {
    amount: bidTotal,
  };

  const response = await fetch(createBidUrl, {
    method,
    headers: {
      'Content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bidAmount),
  });

  const postData = await response.json();
  if (response.ok) {
    window.location.reload();
    return postData;
  } else {
    alert('Something went wrong!');
  }
}
