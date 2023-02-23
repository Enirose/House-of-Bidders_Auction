import { updateAvatar } from '../api/post/updateAvatar.mjs';

export async function avatarListener() {
  const avatarForm = document.querySelector('#avatar-image');

  avatarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const avatarForm = e.target;
    const formData = new FormData(avatarForm);
    const avatar = Object.fromEntries(formData.entries());

    updateAvatar(avatar);
  });
}
