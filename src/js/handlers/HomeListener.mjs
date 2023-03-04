import { getPosts } from '../api/post/getAllList.mjs';
import { getUserInfo, signOut } from '../functions/functions.mjs';

export async function runHomePage() {
  const signedInUser = getUserInfo('accessToken');
  if (!signedInUser) {
    const navButton = document.querySelector('#navBtn');
    navButton.remove();
  } else {
    const loggedIn = document.querySelector('#loggedInBtn');
    loggedIn.remove();
  }

  async function getAllPosts() {
    userPosts = await getPosts();
    buildPostContainer(userPosts);
  }

  let userPosts = [];

  function buildPostContainer(posts) {
    const AllPostContainer = document.querySelector('#postsContainer');
    AllPostContainer.innerHTML = '';

    posts.forEach(function (post) {
      const { id, seller, title, media, description, endsAt, _count } = post;

      // let img = '';
      // if (media !== '' && media != null) {
      //   img = `<img
      //             src="${media}"
      //             class="card-img-top"
      //             alt="Bid image"
      //             style="width: 100%; height: 30vh; object-fit:cover"
      //           />`;
      // }

      const img = `
        <img src="${media[0] ?? 'https://placehold.co/600x400'}"
        class="card-img-top"
        alt="Bid image"
        style="width: 100%; height: 30vh; object-fit:cover"
      />`;

      const finalDate = new Date(endsAt).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      // let avatar = '';
      // if (seller.avatar !== '' && seller.avatar != null) {s
      //   avatar = seller.avatar;
      // }

      AllPostContainer.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <a href="list.html?id=${id}">
                                <p class="mb-4 pb-2">${img}</p>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">
                                ${description}
                                </p>
                                <h6>Seller: ${seller.name}</h6>
                                <h6>Bids: ${_count.bids}</h6>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">
                                <p id='ending'>Ends at ${finalDate}</p>
                                </small>
                            </div>
                        </div>
                    </div>`;
    });
  }
  getAllPosts();

  // search input
  let term = [];

  const search = document.querySelector('#searchForm');
  search.oninput = function () {
    term = search.value.toLowerCase();
    if (term != '') {
      const filteredSearchPosts = userPosts.filter((post) => {
        const { title, seller, description } = post;

        return (
          title.toLowerCase().includes(term) ||
          seller.name.toLowerCase().includes(term) ||
          (description != null && description.toLowerCase().includes(term))
        );
      });
      buildPostContainer(filteredSearchPosts, true);
    } else {
      buildPostContainer(userPosts, true);
    }
  };

  getAllPosts();

  const logout = document.querySelector('#signOut');
  logout.onclick = signOut;
}
