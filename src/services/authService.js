import { firebase } from './firebaseService';
import offlineService from './offlineService';
import userService from './userService';

class AuthService {
    isAuthenticated() {
        if (offlineService.isOffline() || userService.isUsingAnonymousAccount()) {
            return Promise.resolve(userService.getAnonymousUser());
        } else {
            return new Promise(resolve => {
                function observer(user) {
                    unsubscribe(); // Unsubscribe on first call
                    resolve(user); // Resolve with current state
                }

                const unsubscribe = firebase.auth().onAuthStateChanged(observer);
            });
        }
    }

    createAndSignInAsAnonymous() {
        const user = userService.hasAnonymousUser()
            ? userService.getAnonymousUser()
            : userService.generateAnonymousUser() || userService.getAnonymousUser();

        userService.useAnonymousAccount(true);

        return Promise.resolve(user);
    }

    signIn() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(result => {
                userService.useAnonymousAccount(false);

                return result.user;
            })
            .catch(error => console.log('Something went wrong while signing in with user\'s Google account', error));
    }

    signOut() {
        userService.removeAnonymousUser();

        return firebase.auth().signOut()
            .catch(error => console.log('Something went wrong while signing out the user', error));
    }
}

export default new AuthService();
