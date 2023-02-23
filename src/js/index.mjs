import { registerListener } from './handlers/registerListener.mjs';
import { loginListener } from './handlers/loginListener.mjs';
import { runHomePage } from './handlers/HomeListener.mjs';
import { runProfilePage } from './handlers/profileListener.mjs';
import { runSinglePost } from './handlers/singlePostListener.mjs';
import { avatarListener } from './handlers/avatarListener.mjs';
import { runCreatePostListener } from './handlers/createPostListener.mjs';

const path = location.pathname;

if (path === '/register.html') {
  registerListener();
} else if (path === '/login.html') {
  loginListener();
} else if (path === '/index.html') {
  runHomePage();
} else if (path === '/profile.html') {
  runProfilePage();
  avatarListener();
  runCreatePostListener();
} else if (path === '/list.html') {
  runSinglePost();
}
