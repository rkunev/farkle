import { firebase } from './firebaseService';
import { isOffline } from './offlineService';
import * as userService from './userService';

export function isAuthenticated() {
    if (isOffline() || userService.isUsingAnonymousAccount()) {
        const isUserAuthenticated = userService.hasAnonymousUser();

        return Promise.resolve(isUserAuthenticated);
    } else {
        return new Promise(resolve => {
            function observer(user) {
                unsubscribe(); // Unsubscribe on first call
                resolve(!!user); // Resolve with current state
            }

            const unsubscribe = firebase.auth().onAuthStateChanged(observer);
        });
    }
}

export function createAndSignInAsAnonymous() {
    const user = userService.hasAnonymousUser()
        ? userService.getAnonymousUser()
        : userService.generateAnonymousUser() || userService.getAnonymousUser();

    userService.useAnonymousAccount(true);

    return Promise.resolve(user);
}

export function signIn() {
    let provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider)
        .then(result => {
            userService.useAnonymousAccount(false);

            return result.user;
        })
        .catch(error => console.log('Something went wrong while signing in with user\'s Google account', error));
}

export function signOut() {
    userService.removeAnonymousUser();

    return firebase.auth().signOut()
        .catch(error => console.log('Something went wrong while signing out the user', error));
}
