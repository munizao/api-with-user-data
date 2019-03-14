import { auth, favoritesByUserRef } from './firebase.js';


export function makeListTemplate(card) {
    const html = /*html*/ `
        <li>
            <span class ="favorite">❋</span>
            <h2>${card.name}</h2>
            <p>${card.manaCost}</p>
            <img src="${card.imageUrl}">
            <p>${card.text}</p>
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
    cards.forEach(card => {
        const dom = makeListTemplate(card);
        const favoriteStar = dom.querySelector('.favorite');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCardRef = userFavoritesRef.child(card.id);

        favoriteStar.addEventListener('click', () => {
            console.log(card);
            userFavoriteCardRef.set({
                id: card.multiverseid,
                name: card.name,
                manaCost: card.manaCost || ' ',
                text: card.text || ' ',
                imageUrl: card.imageUrl || 'placeholder'
            });
        });

        cardList.appendChild(dom);
    });
}