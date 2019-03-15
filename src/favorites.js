import loadHeader from './header-component.js';
import loadCards from './list-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import { convertObjectToArray } from './convert-object-to-array.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        let cards = null;
        if(value) {
            cards = convertObjectToArray(value);
        }
        loadCards(cards);
    });
});