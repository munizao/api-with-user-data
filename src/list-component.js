import { auth, favoritesByUserRef } from './firebase.js';


export function makeListTemplate(card) {
    const html = /*html*/ `
        <li>
            <span class ="favorite-star">❋</span>
            <h2>${card.name}</h2>
            <p>${card.manaCost || ' '}</p>
            <img src="${card.imageUrl || './assets/placeholder-image.jpg'}">
            <p>${card.text || ' '}</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const cardList = document.getElementById('card-list');

export default function loadCards(cards) {
    while(cardList.firstChild) {
        cardList.firstChild.remove();
    }
    if(!cards) {
        return;
    }
    cards.forEach(card => {
        const dom = makeListTemplate(card);
        const favoriteStar = dom.querySelector('.favorite-star');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCardRef = userFavoritesRef.child(card.id);
        userFavoriteCardRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite() {
                    isFavorite = true;
                    favoriteStar.classList.add('favorite');
                }

                function removeFavorite() {
                    isFavorite = false;
                    favoriteStar.classList.remove('favorite');
                }

                favoriteStar.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteCardRef.remove();
                        removeFavorite();
                    }
                    else {
                        const cardObject = {
                            id: card.id,
                            name: card.name,
                            manaCost: card.manaCost || ' ',
                            text: card.text || ' ',
                            imageUrl: card.imageUrl || 'placeholder'
                        };
                        userFavoriteCardRef.set(cardObject);
                        addFavorite();
                    }
                });
            });
        cardList.appendChild(dom);
    });
}