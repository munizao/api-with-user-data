import { makeListTemplate } from '../src/list-component.js';

const test = QUnit.test;


test('Make Card List Template', assert => {
    //arrange
    const expected = /*html*/ `
        <li>
            <span class="favorite-star">❋</span>
            <h2>Festering Goblin</h2>
            <p>{B}</p>
            <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129546">
            <p>When Festering Goblin di…1/-1 until end of turn.</p>
        </li>
    `;
    const card = {
        name: 'Festering Goblin',
        manaCost: '{B}',
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129546',
        text: 'When Festering Goblin di…1/-1 until end of turn.'
    };

    //act
    const result = makeListTemplate(card);
    //assert
    assert.htmlEqual(result, expected);
});