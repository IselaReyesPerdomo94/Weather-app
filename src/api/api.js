async function get(url) {
    try {
        const response = await fetch(url)
        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

export { get };