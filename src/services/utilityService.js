export function generateUniqueId(salt = _generateRandomString()) {
    const shortSalt = salt.slice(0, 2);
    const shortTimestamp = ((new Date()).getTime()).toString().slice(-4);

    return btoa(shortSalt + shortTimestamp).replace(/\//g, '-');
}

function _generateRandomString(len = 4) {
    return Math.random().toString().slice(2, 2 + len);
}
