import { updateAvatar } from '../api/post/updateAvatar.mjs';

export async function avatarListener() {
  const avatarUrl = document.querySelector('#avatar-image');
  const updateAvatarBTN = document.querySelector('#updateBtn');

  updateAvatarBTN.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputAvatarUrl = avatarUrl.value.trim();

    let avatarInfo = {
      avatar: inputAvatarUrl,
    };

    updateAvatar(avatarInfo);
  });
}
