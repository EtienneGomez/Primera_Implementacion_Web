fetch('/procesar_datos', {
    method: 'POST',
    body: JSON.stringify({ query: query }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        displayResults(data);
    })
    .catch(error => console.error('Error:', error));
