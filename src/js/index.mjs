import * as listener from './handlers';

window.runPage = listener;

if (path === '/register.html'){
    runPage.register();
} else if (path === '/login.html'){
    runPage.login();
}