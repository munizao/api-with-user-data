export function makeSearchURL(searchOptions) {
    const BASE_URL = 'https://api.magicthegathering.io/v1/cards';

    if(!searchOptions.name) {
        return '';
    }
    const url = new URL(BASE_URL);
    url.searchParams.set('name', searchOptions.name);
    url.searchParams.set('page', searchOptions.page);
    return url.toString();
}
