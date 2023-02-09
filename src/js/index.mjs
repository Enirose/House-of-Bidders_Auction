import { registerListener } from './handlers/registerListener.mjs';

if (location.pathname === '/register.html') {
  registerListener();
}
