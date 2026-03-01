const url = 'YouAreNotTheHero.json'

// Function to fetch data and update HTML
async function fetchAndDisplayProducts() {

    // Fetch the JSON file
    const response = await fetch(url);

    const attributes = await response.json();
    
    document.getElementById('title').innerHTML = attributes["title"];
    document.getElementById('role').innerHTML = attributes["role"];
    document.getElementById('team').innerHTML = attributes["team"];
    document.getElementById('description').innerHTML = attributes["description"];
    document.getElementById('reflection').innerHTML = attributes["reflection"];
    document.getElementById('focus').innerHTML = attributes["focus"]
}

// Call the function to display the data
fetchAndDisplayProducts();