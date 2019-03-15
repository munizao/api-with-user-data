import { readFromQuery } from './hash-query.js';
import loadCards from './list-component.js';
import { makeSearchURL } from './card-api.js';
import './search-component.js';
import './paging-component.js';
import { updatePaging } from './paging-component.js';
import loadHeader from './header-component.js';
import { auth } from './firebase.js';

window.addEventListener('hashchange', loadQuery);

loadHeader();

auth.onAuthStateChanged(() => {
    loadQuery();
});

const cardListContainer = document.getElementById('card-list-container');
const prompt = document.getElementById('prompt');

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeSearchURL(searchOptions);
    console.log(url);
    if(!url) {
        prompt.classList.remove('hidden');
        cardListContainer.classList.add('hidden');
    }
    else {
        prompt.classList.add('hidden');
        cardListContainer.classList.remove('hidden');
    }

    fetch(url)
        .then(response => Promise.all([response.json(), response.headers.get('total-count')]))
        .then(responses => {
            loadCards(responses[0].cards);
            updatePaging(searchOptions, responses[1]);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error(err);
        });
}