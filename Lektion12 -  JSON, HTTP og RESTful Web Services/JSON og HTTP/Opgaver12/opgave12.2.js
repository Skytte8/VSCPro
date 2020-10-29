const browserurl = "https://dipchat.herokuapp.com/";

// async function post(url, objekt) {
//     const respons = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(objekt),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     if (respons.status !== 201) // Created
//         throw new Error(respons.status);
//     return await respons.json();
// }

// async function mainPost(url) {
//     try {
//         let respons = await put(url, updateUser);
//         console.log(respons);
//     } catch (fejl) {
//         console.log(fejl);
//     }
// }

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return await respons.json();
}

async function mainGet(url) {
  try {
    let respons = await get(url);
    console.log(respons);
  } catch (fejl) {
    console.log(fejl);
  }
}

mainGet(browserurl);
