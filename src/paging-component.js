import { writePageToQuery } from '../src/hash-query.js';
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');


let currentPageNumber = 1;

export function updatePaging(searchOptions, totalCardsCount) {
    currentPage.textContent = searchOptions.page;
    const totalPageCount = Math.ceil(totalCardsCount / 100);
    totalPages.textContent = totalPageCount;
    previousButton.disabled = searchOptions.page === 1;
    nextButton.deisabled = searchOptions.page === totalPageCount;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});