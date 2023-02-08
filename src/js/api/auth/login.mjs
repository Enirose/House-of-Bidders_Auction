import * as storage from '../../localStorage'

const method = 'post';

export async function login (url, profile) {
    const response = await fetch (url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    const json = await response.json();
    const {accessToken, ...user} = json;

    if (response.ok){
        storage.save('token', accessToken);
        storage.save('profile', user);
        alert('You are logged in!');

        window.location.replace('/profile.html');
    } else {
        alert('Something went wrong! Try again!');
    };
};