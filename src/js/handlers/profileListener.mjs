import { getUserPosts } from '../api/post/getUserPosts.mjs';
import { getUserProfile } from '../api/post/getUserProfile.mjs';
import { getUserName, signOut } from '../functions/functions.mjs';

export async function runProfilePage() {
  // Fetching user's Profile from API
  async function getProfile() {
    const userInfo = getUserName();
    const postData = await getUserProfile(userInfo);
    UserProfileData(postData);
  }
  getProfile();

  async function UserProfileData(userInfo) {
    const { name, email, avatar, credits } = userInfo;

    const UserName = document.querySelector('#user-name');
    const UserAvatar = document.querySelector('#currentAvatar');
    const UserEmail = document.querySelector('#user-email');
    // const UserBidders = document.querySelector('#bidders');
    const UserCredits = document.querySelector('#user-credits');

    UserName.innerHTML = name;
    UserEmail.innerHTML = email;
    UserCredits.innerHTML = credits;

    if (avatar != null && avatar != '') {
      UserAvatar.src = avatar;
    }

    // let biddertext = 'Bidder';
    // if (_count.bid > 1 || _count.bid === 0) {
    //   biddertext += 's';
    // }

    // UserBidders.innerHTML = `${biddertext}: ${_count.bid}`;
  }

  // Fetching / getting user's post by name
  async function buildUserProfileHTML() {
    const name = getUserName();
    const postInfo = await getUserPosts(name);

    const UserSinglePost = document.querySelector('#profileContainer');
    UserSinglePost.innerHTML = '';

    postInfo.forEach(function (post) {
      const { id, title, description, media, endsAt, _count } = post;

      let img = '';
      if (media != '' && media != null) {
        img = `<img
                    src="${media}"
                    class="card-img-top"
                    alt="Bid image"
                    />`;
      }

      UserSinglePost.innerHTML += `
                    <div class="col vh-100">
                        <div class="card">
                            <a href="list.html?id=${id}">
                                <p class="mt-3 mb-4 pb-2">${img}</p>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">
                                ${description}
                                </p>
                                <hr />
                                <h6>Bids: ${_count}</h6>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">
                                <p id='ending'>Ends at ${endsAt}</p>
                                </small>
                            </div>
                        </div>
                    </div>`;
    });
  }
  buildUserProfileHTML();

  const logout = document.querySelector('#signOut');
  logout.onclick = signOut;
}
