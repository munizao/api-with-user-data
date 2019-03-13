
export function makeListTemplate(card) {
    const html = /*html*/ `
        <li>
            <h2>Festering Goblin</h2>
            <p>{B}</p>
            <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129546">
            <p>When Festering Goblin di…1/-1 until end of turn.</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}