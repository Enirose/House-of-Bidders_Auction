export function save (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function get (key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        console.error('failed to load localStorage');
        return null
    }
}

export function remove (key) {
    localStorage.removeItem("accessToken");
}