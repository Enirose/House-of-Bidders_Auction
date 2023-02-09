import { registerListener } from './handlers/registerListener.mjs';
import { loginListener } from './handlers/loginListener.mjs';

if (location.pathname === '/register.html') {
  registerListener();
} else if (location.pathname === '/login.html') {
  loginListener();
}
