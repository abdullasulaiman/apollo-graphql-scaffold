const GRAPHQL_URL = "http://127.0.0.1:9000";

async function fetchGreeting() {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query : `
                query {
                    greeting
                }
            `
        })
    })
    const { data } = await response.json();
    return data;

}
fetchGreeting().then(({ greeting } ) => {
    const h1 = document.querySelector('h1');
    h1.textContent = greeting;
})