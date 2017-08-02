const NAV_STORAGE_KEY = 'farkle-nav-drawer'

export function isTabletAndUp() {
    return window.matchMedia('(min-width: 960px)').matches;
}

export function getMenuState() {
    return !!JSON.parse(localStorage.getItem(NAV_STORAGE_KEY));
}

export function saveMenuState(isOpened) {
    localStorage.setItem(NAV_STORAGE_KEY, isOpened);
}
