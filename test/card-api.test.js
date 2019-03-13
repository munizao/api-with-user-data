import makeSearchURL from '../src/card-api.js';

const test = QUnit.test;


test('Make API URL', assert => {
    //arrange
    const expected = 'https://api.magicthegathering.io/v1/cards?name=goblin+king&page=1';
    const searchOptions = {
        name: 'goblin king',
        page: 1
    };

    //act
    const result = makeSearchURL(searchOptions);
    //assert
    assert.equal(result, expected);
});