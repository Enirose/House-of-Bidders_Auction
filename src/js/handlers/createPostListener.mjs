import { createpost } from '../api/post/createPost.mjs';

export function runCreatePostListener() {
  const form = document.querySelector('#create-listing');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      const title = formData.get('title');
      const description = formData.get('description');
      const media = formData.get('media').split(',');
      const endsAt = formData.get('endsAt');

      const formListing = {
        title,
        description,
        media,
        endsAt,
      };

      createpost(formListing);
    });
  }
}
