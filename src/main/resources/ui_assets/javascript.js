function sendQuery() {
    var query = document.getElementById('queryInput').value;
    fetch('/procesar_datos', {
        method: 'POST',
        body: JSON.stringify({ searchQuery: query }),
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
