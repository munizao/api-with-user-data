import { app } from '../src/firebase.js';
import './html-equal.js';
import './list-template.test.js';
import './hash-query.test.js';
import './header-component.test.js';
import './convert-object-to-array.test.js';

QUnit.done(() => {
    app.delete();
});
