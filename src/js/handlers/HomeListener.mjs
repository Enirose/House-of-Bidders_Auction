import { getPosts } from '../api/post/getAllList.mjs';
import { signOut } from '../functions/functions.mjs';

export async function runHomePage() {
  async function getAllPosts() {
    userPosts = await getPosts();
    buildPostContainer(userPosts);
  }

  let userPosts = [];

  function buildPostContainer(posts) {
    const AllPostContainer = document.querySelector('#postsContainer');
    AllPostContainer.innerHTML = '';

    posts.forEach(function (post) {
      const { id, title, media, description, _count } = post;

      let img = '';
      if (media !== '' && media != null) {
        img = `<img
                  src="${media}"
                  class="card-img-top"
                  alt="Bid image"
                />`;
      }

      // let avatar = '';
      // if (seller.avatar !== '' && seller.avatar != null) {
      //   avatar = seller.avatar;
      // }

      AllPostContainer.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <a href="list.html?id=${id}">
                                <p class="mt-3 mb-4 pb-2">${img}</p>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">
                                ${description}
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">
                                <form action="/action_page.php">
                                    <label for="auction">Bidding Ends: ${_count}</label>
                                    <input type="datetime-local" id="endBidding"
                                    class"form-control">
                                </form>
                                </small>
                            </div>
                        </div>
                    </div>
            `;
    });
  }
  getAllPosts();

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
