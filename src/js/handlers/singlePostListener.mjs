import { getPostId } from '../api/post/getSinglePostById.mjs';
import { getUserProfile } from '../api/post/getUserProfile.mjs';
import { getUserName } from '../functions/functions.mjs';

export async function runSinglePost() {
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
    const singleContainer = document.querySelector('#singleContainer');
    const { title, seller, description, media, credits, endsAt } = post;

    singleContainer.innerHTML = '';

    // check if user has a media to display
    let img = '';
    if (media !== '' && media != null) {
      img = `<img
                  src="${media}"
                  class="img-fluid my-5"
                  alt="Bid image"
                />`;
    }

    singleContainer.innerHTML += `<div class="col col-lg-8 mb-4 mb-lg-0">
              <div class="card mb-3" style="border-radius: 0.5rem">
                <div class="row g-0">
                  <div
                    class="col-md-4 px-2 gradient-custom text-center text-black"
                  >
                    <p class="text-muted">${img}</p>
                    <div class="card-footer">
                    <small class="text-muted">
                      <form>
                        <label for="auction">Bidding Ends: ${endsAt}</label>
                        <input type="datetime-local" id="endBidding"
                          class"form-control">
                      </form>
                    </small>
                  </div>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <hr class="mt-0 mb-2" />
                      <div class="row pt-1">
                        <div class="col-6 mb-2">
                          <h5>${seller.name}</h5>
                        </div>
                        <div class="col-6 mb-2">
                          <p alt="Avatar"
                            class="rounded-circle img-fluid my-2"
                            style="width: 70px">
                          </p>
                        </div>
                      </div>
                      <h6>${title}</h6>
                      <p>${description}</p>
                      <hr class="mt-0 mb-2" />
                      <div class="row pt-1">
                        <div class="col-6 mb-1">
                          <h6>Bidder</h6>
                          <p class="text-muted">Lorem ipsum</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Highest Bid</h6>
                          <p class="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <form action="mt-4">
                        <h6>Your credits:</h6>
                        <p class="text-muted" id="User_Credits">${credits}</p>
                        <input
                          type="number"
                          placeholder="Place your bid"
                          class="form-control me-2 w-40"
                          min="125"
                        />
                        <button type="button" class="btn btn-primary mb-2">
                          Place Bid
                        </button>
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }
  getSinglePost();
}
