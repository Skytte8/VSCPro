// index.js
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

async function generateUserTable(users) {
    let template = await getText('/users.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({users});
}

async function main() {
    try {
        let users = await get('/users');
        document.body.innerHTML = await generateUserTable(users);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main();