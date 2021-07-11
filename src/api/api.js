async function get(url) {
    const response = await fetch(url).catch(error => console.log(error))

    return await response.json()
}

export { get };