import { getUserPosts } from '../api/post/getUserPosts.mjs';
import { getUserProfile } from '../api/post/getUserProfile.mjs';
import {
  newProfileUser,
  replaceAvatar,
  signOut,
} from '../functions/functions.mjs';

export async function runProfilePage() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  let name = params.get('name');

  // Fetching user's Profile from API
  async function getProfile() {
    const postData = await getUserProfile(name);
    UserProfileData(postData);
  }
  getProfile();

  replaceAvatar();
  newProfileUser();

  async function UserProfileData(userInfo) {
    const { name, email, avatar } = userInfo;

    const UserName = document.querySelector('#user-name');
    const UserAvatar = document.querySelector('#currentAvatar');
    const UserEmail = document.querySelector('#user-email');
    // const UserBidders = document.querySelector('#bidders');
    // const UserCredits = Document.querySelector('#profileCredit');

    UserName.innerHTML = name;
    UserEmail.innerHTML = email;
    // UserCredits.innerHTML = credits;

    if (avatar != null && avatar != '') {
      UserAvatar.src = avatar;
    }

    // let biddertext = 'Bidder';
    // if (_count.bid > 1 || _count.bid === 0) {
    //   biddertext += 's';
    // }

    // UserBidders.innerHTML = `${biddertext}${_count.bid}`;
  }

  // Fetching / getting user's post by name
  async function buildUserProfileHTML() {
    const postInfo = await getUserPosts(name);

    const UserSinglePost = document.querySelector('#profileContainer');
    UserSinglePost.innerHTML = '';

    postInfo.forEach(function (post) {
      const { id, title, description, media } = post;

      let img = '';
      if (media != '' && media != null) {
        img = `<img
                    src="${media}"
                    class="card-img-top"
                    alt="Bid image"
                    />`;
      }

      UserSinglePost.innerHTML += `
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <a href="list.html?id=${id}">
                                <p class="mt-3 mb-4 pb-2">${img}</p>
                            </a>
                            <div class="p-2">
                                <h5 class="card-title">${title}</h5>
                                <p class="text-justify">
                                ${description}
                                </p>
                                <hr />
                                <div class="d-flex justify-content-between align-items-center">
                                    <p id="bidders"></p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">
                                    <form action="/action_page.php">
                                        <label for="auction">Bidding Ends:</label>
                                        <input
                                        type="datetime-local"
                                        id="endBidding"
                                        class="form-control"
                                        />
                                    </form>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
  }
  buildUserProfileHTML();

  const logout = document.querySelector('#signOut');
  logout.onclick = signOut;
}
