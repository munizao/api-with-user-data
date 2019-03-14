import { readFromQuery } from './hash-query.js';
import loadCards from './list-component.js';
import { makeSearchURL } from './card-api.js';
import './search-component.js';

window.addEventListener('hashchange', loadQuery);



function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeSearchURL(searchOptions);
    console.log('url');
    fetch(url)
        .then(response => Promise.all([response.json(), response.headers.get('total-count')]))
        .then(responses => {
            loadCards(responses[0].cards);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error(err);
        });
}