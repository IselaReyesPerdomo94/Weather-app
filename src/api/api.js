async function get(url) {
    const response = await fetch(url, {
        method: 'GET',
        cors: 'no-cors',
    }).catch(error => console.log(error))

    return await response
}

export { get };