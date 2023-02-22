import { updateAvatar } from '../api/post/updateAvatar.mjs';

export async function avatarListener() {
  const form = document.querySelector('#avatar-image');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());

      let profileAvatar = {
        avatar: avatar,
      };

      updateAvatar(profileAvatar);
    });
  }
}
avatarListener();
