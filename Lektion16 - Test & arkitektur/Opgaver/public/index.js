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

async function generateUserTable(beskeder) {
    let template = await getText('/beskeder.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({beskeder});
}

async function main() {
    try {
        let beskeder = await get('/besked');
        document.body.innerHTML = await generateUserTable(beskeder);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main();