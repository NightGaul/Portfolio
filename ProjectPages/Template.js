const url = 'Template.json'

// Function to fetch data and update HTML
async function fetchAndDisplayProducts() {

    // Fetch the JSON file
    const response = await fetch(url);

    const attributes = await response.json();

    document.getElementById('title').innerHTML = attributes["Title"];
    document.getElementById('role').innerHTML = attributes["Role"];
    document.getElementById('team').innerHTML = attributes["Team"];
    document.getElementById('description').innerHTML = attributes["Description"];
    document.getElementById('reflection').innerHTML = attributes["Reflection"];
    document.getElementById('focus').innerHTML = attributes["Focus"]
}

// Call the function to display the data
fetchAndDisplayProducts();