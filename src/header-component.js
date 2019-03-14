import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/ `
        <header>
            <h1>Find your favorite Magic: The Gathering cards</h1>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = /*html*/ `
        <div class="profile">
            <img src="${user.photoUrl}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    const dom = makeHeader();

    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
                window.location.hash = '';
            });
            header.appendChild(userDom);
        }
        else {
            window.location = './auth.html' + window.location.hash;
        }
    });
}