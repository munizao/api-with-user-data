export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const queryOptions = {
        name: searchParams.get('name'),
        page: parseInt(searchParams.get('page'))
    };
    return queryOptions;
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function writeSearchToQuery(existingQuery, searchOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchOptions.name);
    searchParams.set('page', 1);
    return searchParams.toString();
}