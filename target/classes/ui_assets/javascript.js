function sendQuery() {
    var query = document.getElementById('queryInput').value;
    fetch('/search', {
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
}

function displayResults(data) {
    // Lógica para mostrar los resultados en la página
}
