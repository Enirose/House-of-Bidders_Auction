export function getUserInfo() {
  const userData = localStorage.getItem('userData');
  if (userData) {
    const parseUser = JSON.parse(userData);
    const {
      name: userName,
      email: userEmail,
      credits: userCredits,
      avatar: userAvatar,
    } = parseUser;
    return { userName, userEmail, userCredits, userAvatar };
  } else {
    return false;
  }
}
