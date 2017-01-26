import { firebase } from './firebaseService';
import offlineService from './offlineService';

const STORAGE_KEY_USER = 'farkle-user';
const STORAGE_KEY_USER_TYPE = 'farkle-user-isAnonymous';
const fakeUser = {"uid":"YG7vUMMRzLe92frrYicTEOfCoEu2","displayName":"Offline","photoURL":"https://lh4.googleusercontent.com/-OImtR3zhKfA/AAAAAAAAAAI/AAAAAAAAAAo/C4dEq_tasTE/photo.jpg","email":"rosen.kanev@mentormate.com","emailVerified":true,"isAnonymous":false,"providerData":[{"uid":"112699139710890075342","displayName":"Rosen Kanev","photoURL":"https://lh4.googleusercontent.com/-OImtR3zhKfA/AAAAAAAAAAI/AAAAAAAAAAo/C4dEq_tasTE/photo.jpg","email":"rosen.kanev@mentormate.com","providerId":"google.com"}],"apiKey":"AIzaSyByUNtfBfxAlj-sPTv2IBzDM5BOHvyXl6o","appName":"[DEFAULT]","authDomain":"farkle-845de.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyByUNtfBfxAlj-sPTv2IBzDM5BOHvyXl6o","refreshToken":"ADDl5SGUcQ6NreByc4pa6iTfH5hux7PMDcF1_fmZTv4CUXQB8m4P76WVIokUXtJWbE06WwDy0w0tDKRqi023tx4C-CiB3ucKcpN8nv7D2Bk_V86pc-zDZL11-ee4eniMbQMYo9hwYulCok6XxioRDlZdChF8SHDnKyVQNm0cjotH-whiQ8EOpEmMQ_QriEQelOA4mD4etuyG-E_Fa9aHNnW0V18Vr_M9apL7o6q9BZezyR87JAfdZs46FMS7LCKyibvBJmqtnGeXrsAQAZrtWMKZfLNhSvrT7ctyyBccuKvkSHEmSRj91Fn1iLPmbusgLQ8wi1zr79vYHtiM0kqGIRw8nnyiewh63PNRxT9VR4DrXfgqfaD1rsg","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjU5YTFiYzg5ZGY4MDQ1MzIxZjU0YzM0ZWEyNjJhMDlkMGNiZGJhYTUifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFya2xlLTg0NWRlIiwibmFtZSI6IlJvc2VuIEthbmV2IiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tT0ltdFIzemhLZkEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQW8vQzRkRXFfdGFzVEUvcGhvdG8uanBnIiwiYXVkIjoiZmFya2xlLTg0NWRlIiwiYXV0aF90aW1lIjoxNDg0NjU4NzUwLCJ1c2VyX2lkIjoiWUc3dlVNTVJ6TGU5MmZycllpY1RFT2ZDb0V1MiIsInN1YiI6IllHN3ZVTU1SekxlOTJmcnJZaWNURU9mQ29FdTIiLCJpYXQiOjE0ODQ2NTg3NTAsImV4cCI6MTQ4NDY2MjM1MCwiZW1haWwiOiJyb3Nlbi5rYW5ldkBtZW50b3JtYXRlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEyNjk5MTM5NzEwODkwMDc1MzQyIl0sImVtYWlsIjpbInJvc2VuLmthbmV2QG1lbnRvcm1hdGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.FrgP9Q_mWxaWEz_fRnxbvRRfLKnnJsyvoWRzMWlkaElKuypAuaBLkE5KdhOc-1uRFsWX_FHbw7ha1MpdQTTcIDuB2MUbT9T7QA2Nlg7FsnT1iA1KRH6DMrKb8nVFcrHQEI5-8_OOLbDT4mlFcn7H4FJCEWQtJSU-KmAlem22dmEr2leVC3dCcBVDvLUH0nlUcAye2yfRseUZfz5grrFJFPZBY9ehboIUit-Kcq8FJRNK0O4NebdnwIROya9VO_pYxXOHRwwfbofqtX1wJehlo23avZee_29obLiaBBMhUFmMP1WZs5lqM5j2U4GYoj1DKjlcosWX9YJWfTz74Fgjjw","expirationTime":1484662350684},"redirectEventId":null};

export function getCurrentUser() {
    return (offlineService.isOffline() || isUsingAnonymousAccount())
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
