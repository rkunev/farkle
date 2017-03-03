import { firebase } from './firebaseService';
import { isOffline } from './offlineService';
import store from 'src/store';

const STORAGE_KEY_USER = 'farkle-user';
const STORAGE_KEY_USER_TYPE = 'farkle-user-isAnonymous';
const fakeUser = {"uid":"cm85Mjky","displayName":"Offline","avatar":"","email":"rosen.kanev@mentormate.com"};

/**
 * Get a user by id. Can be used to display player information.
 * Returns a promise which resolves to the found user or `null`
 *
 * @param  {String} id
 *
 * @return {Promise}   Resolves to either user Object or Null
 */
export function getUserById(id) {
    let user;

    if (isUsingAnonymousAccount() && store.getters.userId === id) {
        user = Promise.resolve(getAnonymousUser());
    } else {
        if (isOffline()) {
            user = Promise.resolve(null);
        } else {
            // user is online and is requesting other profile
            user = firebase.database()
                .ref('/players/' + id)
                .once('value')
                .then(snap => snap.val())
        }
    }

    return user;
}

/**
 * Updates the user in '/players' firebase database reference
 *
 * @todo Better function naming
 *
 * @param  {Object} user
 *
 * @return {Promise}      Resolves with the passed user
 */
export function updateUser(user) {
    return firebase.database()
        .ref('/players/' + user.uid)
        .update({
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL
        })
        .then(function() {
            store.dispatch('updateUser', user);

            return user;
        });
}

export function getCurrentUser() {
    return (isOffline() || isUsingAnonymousAccount())
        ? getAnonymousUser()
        : firebase.auth().currentUser;
}

export function generateAnonymousUser() {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(fakeUser));
}

export function getAnonymousUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_USER)) || {};
}

export function hasAnonymousUser() {
    const user = getAnonymousUser();

    return !!user.email;
}

export function removeAnonymousUser() {
    localStorage.removeItem(STORAGE_KEY_USER);
}

export function useAnonymousAccount(isAnonymous = true) {
    localStorage.setItem(STORAGE_KEY_USER_TYPE, isAnonymous);
}

/**
 * Checks if the signed in user is anonymous or a real user using localStorage.
 *
 * @return {Boolean} If `STORAGE_KEY_USER_TYPE` is `null` will default to anonymous user
 */
export function isUsingAnonymousAccount() {
    const userType = JSON.parse(localStorage.getItem(STORAGE_KEY_USER_TYPE));

    if (userType == null) {
        return true;
    } else {
        return userType;
    }
}
