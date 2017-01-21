const SW = 'sw.js';

export default {
    initServiceWorker: initServiceWorker,
    isOffline: isOffline,
}

function isOffline() {
    return !navigator.onLine;
}

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        if (process.env.NODE_ENV === 'production') {
            console.log('Offline module activated');
            _register();
        } else {
            _deregister();
        }
    }
}

function _register() {
    navigator.serviceWorker.register(SW);
}

function _deregister() {
    navigator.serviceWorker.getRegistrations()
        .then(function(registrations) {
            for (let registration of registrations) {
                registration.unregister();
                console.log('Removing registration', registration);
            }
        });
}
