var config = {
    apiKey: 'AIzaSyApq5qo94jtFgtKDgoh4w8vKRH5RnelCV8',
    authDomain: 'auth-test-3342d.firebaseapp.com',
    databaseURL: 'https://auth-test-3342d.firebaseio.com',
    projectId: 'auth-test-3342d',
    storageBucket: 'auth-test-3342d.appspot.com',
    messagingSenderId: '381284056290'
};
firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');