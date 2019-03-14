
export function makeListTemplate(card) {
    const html = /*html*/ `
        <li>
            <h2>${card.name}</h2>
            <p>${card.manaCost}</p>
            <img src="${card.imageUrl}">
            <p>${card.text}</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}