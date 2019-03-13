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