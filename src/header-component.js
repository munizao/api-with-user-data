export function makeHeader() {
    const html = /*html*/ `
        <header>
            <h1>Find your favorite Magic: The Gathering cards</h1>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = /*html*/ `
        <div class="profile">
            <img src="${user.photoUrl}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
