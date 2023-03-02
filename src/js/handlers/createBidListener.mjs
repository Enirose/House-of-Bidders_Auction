import { CreateBid } from '../api/post/createBid.mjs';

export async function createBidListener() {
  const bidBtn = document.querySelector('#bid_Btn');

  bidBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const bidForm = document.querySelector('#bidInput');

    const inputCredit = parseInt(bidForm.value);

    // const inputCredit = {
    //   amount : Number(bidForm.value),
    // };

    CreateBid(inputCredit);
    console.log(CreateBid);
  });
}
