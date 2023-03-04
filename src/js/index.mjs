import { registerListener } from './handlers/registerListener.mjs';
import { loginListener } from './handlers/loginListener.mjs';
import { runHomePage } from './handlers/HomeListener.mjs';
import { runProfilePage } from './handlers/profileListener.mjs';
import { runSinglePost } from './handlers/singlePostListener.mjs';
import { avatarListener } from './handlers/avatarListener.mjs';
import { runCreatePostListener } from './handlers/createPostListener.mjs';
// import { createBidListener } from './handlers/createBidListener.mjs';

const path = location.pathname;
switch (path) {
  case '/':
  case '/index.html':
    runHomePage();
    break;
  case '/login.html':
    loginListener();
    break;
  case '/register.html':
    registerListener();
    break;
  case '/list.html':
    runSinglePost();
    break;
  case '/profile.html':
    runProfilePage();
    avatarListener();
    runCreatePostListener();
    break;
}

// if (path === '/index.html' || path === '/') {
//   runHomePage();
// } else if (path === '/login.html') {
//   loginListener();
// } else if (path === '/register.html') {
//   registerListener();
// } else if (path === '/profile.html') {
//   runProfilePage();
//   avatarListener();
//   runCreatePostListener();
// } else if (path === '/list.html') {
//   runSinglePost();
//   // createBidListener();
// }
