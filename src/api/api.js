async function get(url) {
    const response = await fetch(url, {
        method: 'GET',
        cors: 'cors',
    }).catch(error => console.log(error))

    return await response.json()
}

export { get };