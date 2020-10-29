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

async function generateUserTable(earthquake) {
    let template = await getText('/earthquake.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({earthquake});
}

async function main() {
    try {
        let earthquake = await get('/earthquake');
        document.body.innerHTML = await generateUserTable(earthquake);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main();