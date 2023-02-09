import * as storage from "../../localStorage/localStorage.mjs"


const method =  "post";

export async function login(url, profile) {

    const response = await fetch (url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });

    if (response.ok) {
        storage.save("token", accessToken);
        storage.save("profile", user);

        window.location.replace("/profile.html")
        return response;
    } else {
        return false;
    }
}