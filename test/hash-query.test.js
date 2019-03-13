import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js'

const test = QUnit.test;

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