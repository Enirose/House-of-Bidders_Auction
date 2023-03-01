import { getPostId } from '../api/post/getSinglePostById.mjs';
import { getUserProfile } from '../api/post/getUserProfile.mjs';
import { getUserInfo, getUserName } from '../functions/functions.mjs';
import { createBidListener } from './createBidListener.mjs';

export async function runSinglePost() {
  const signedInUser = getUserInfo('accessToken');
  if (!signedInUser) {
    window.location.replace('/login.html');
  }

  const querySelector = document.location.search;
  const params = new URLSearchParams(querySelector);
  let id = params.get('id');

  // get/fetch single post by id

  async function getSinglePost() {
    const singlePost = await getPostId(id);
    buildSinglePostHTML(singlePost);
  }

  // Fetching/ getting logged in user's info
  async function getProfile() {
    const userInfo = getUserName();
    const userData = await getUserProfile(userInfo);
    userProfileData(userData);
  }
  getProfile();

  // display logged in user info
  async function userProfileData(userInfo) {
    const { credits } = userInfo;
    console.log(credits);
    const UserCredits = document.querySelector('#User_Credits');

    UserCredits.innerHTML = credits;
  }

  // Fetching user's post by name, email, descriptions, media etc.

  function buildSinglePostHTML(post) {
    // const singleContainer = document.querySelector('#singleContainer');
    const { title, seller, description, media, endsAt, bids, _count } = post;

    // singleContainer.innerHTML = '';

    // check if user has a media to display
    let img = '';
    if (media !== '' && media != null) {
      img = `<img
                  src="${media}"
                  class="img-fluid my-5"
                  alt="Bid image"
                />`;
    }

    const finalDate = new Date(endsAt).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    console.log(post);

    document.querySelector('#auctionDescription').innerText =
      description || 'N/A';
    document.querySelector('#sellersName').innerText = seller.name || 'N/A';
    document.querySelector('#bid_count').innerText = _count.bids || 'N/A';
    document.querySelector('#sellersName').innerText = seller.name || 'N/A';
    document.querySelector('#endingDate').innerText = finalDate;
    document.querySelector('#auctionImg').innerHTML = img;
    document.querySelector('#auctionTitle').innerText = title || 'N/A';

    let highestBid = {
      amount: 0,
      bidder: 'N/A',
    };

    // const sortedBids = bids.sort((a, b) => {
    //   if (a.amount > b.amount) return -1;
    //   if (a.amount < b.amount) return 1;
    //   else return 0;
    // });

    bids.forEach((bid) => {
      if (bid.amount > highestBid.amount) {
        highestBid.amount = bid.amount;
        highestBid.bidder = bid.bidderName;
      }
    });

    document.querySelector('#bidderName').innerText = highestBid.bidder; //sortedBids[0].bidderName; //
    document.querySelector('#highest_bid').innerText = highestBid.amount; //sortedBids[0].amount;

    createBidListener();

    // singleContainer.innerHTML += ``;
  }

  // const button = document.querySelector('#bid_Btn');
  // document.querySelector('#bidderName').innerText = bids.bidderName;
  // const highestBid = document.querySelector('#highest_bid');
  // document.querySelector('#bid_count').innerText = _count.bids;
  // document.querySelector('#bid_count').innerText = _count.bids;
  // document.querySelector('#bid_count').innerText = _count.bids;

  // button.addEventListener('click', () => {
  //   console.log('SUP');
  // });

  getSinglePost();
  createBidListener();
}
