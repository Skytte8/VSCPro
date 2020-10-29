// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const userUrl2 = 'https://jsonplaceholder.typicode.com/users/11';
const userUrl3 = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let test = await get(url)
        console.log(test);
    }
    catch (e) {
        console.log('Fejl/exception: ' + e);
    }
}

// main(userUrl);
// main(userUrl2);
// main(userUrl3);


function get2(url) {
    fetch(url)
        .then(Response => Response.json())
        .then(data => { console.log(data) })
        .catch(e => console.log('Fejl/exception: ' + e))
}

function main2(url) {
    get2(url)
}

main2(userUrl);
main2(userUrl2);
main2(userUrl3);
