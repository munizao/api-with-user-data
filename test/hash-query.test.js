const test = QUnit.test;

function writeSearchToQuery(existingQuery, searchOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchOptions.name);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('Write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const expected = 'name=goblin&page=1';
    const searchOptions = {
        name: 'goblin',
        page: 1
    };

    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);

    //assert
    assert.equal(result, expected);
});

test ('writing search to existing query changes search and resets page', assert => {
    //arrange
    const existingQuery = 'name=goblin&page=2';
    const expected = 'name=dragon&page=1';
    const searchOptions = {
        name: 'dragon'
    };
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    //assert
    assert.equal(result, expected);
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test ('write page to existing query', assert => {
    //arrange
    const existingQuery = 'name=goblin&page=1';
    const page = 3;
    const expected = 'name=goblin&page=3';

    //act
    const result = writePageToQuery(existingQuery, page);

    //assert
    assert.equal(result, expected);
});

function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const queryOptions = {
        name: searchParams.get('name'),
        page: parseInt(searchParams.get('page'))
    };
    return queryOptions;
}

test ('Read options from query', assert => {
    const query = 'name=goblin&page=3';
    const expected = {
        name: 'goblin',
        page: 3
    };
    //act
    const result = readFromQuery(query);
    assert.deepEqual(result, expected);
});