import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;

test('make header template', assert => {
    const expected = `
        <header>
            <h1>Find your favorite Magic: The Gathering cards</h1>
        </header>
    `;

    const result = makeHeader();

    assert.htmlEqual(result, expected);
});


test ('make profile', assert => {
    const user = {
        displayName: 'Alexandre Muniz',
        photoURL: '/'
    };

    const expected = /*html*/`
        <div class="profile">
            <img src="/">
            <span>Alexandre Muniz</span>
            <button>Sign Out</button>
        </div>
    `;

    const result = makeProfile(user);

    assert.htmlEqual(result, expected);
});