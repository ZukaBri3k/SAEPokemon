let currentPage = 0;
const itemsPerPage = 25;

// Divide the pokemons into pages
let pages = [];
for (let i = 0; i < allPokemons.length; i += itemsPerPage) {
    pages.push(allPokemons.slice(i, i + itemsPerPage));
}

// Function to display a page
function displayPage(pageNumber) {

    let pokemon_image;
        if(pokemon.pokemon_id <= 9) {
            pokemon_image = "00" + pokemon.pokemon_id + ".webp";
        } else if(pokemon.pokemon_id < 99) {
            pokemon_image = "0" + pokemon.pokemon_id + ".webp";
        } else {
            pokemon_image = pokemon.pokemon_id + ".webp";
        }

        let type = '';
        pokemon.type.forEach(t => {
            type += `${t.type}`;
            if(t != pokemon.type[pokemon.type.length - 1]) {
                type += ' | ';
            }
        });
    // Clear the tbody
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = `
        <td class="name">${pokemon.pokemon_name}</td>
        <td class="id">${pokemon.pokemon_id}</td>
        <td class="generation">${pokemon.generation}</td>
        <td class="type">${type}</td>
        <td class="defense">${pokemon.base_stamina}</td>
        <td class="stamina">${pokemon.base_stamina}</td>
        <td class="attaque">${pokemon.base_attack}</td>
        <td><img class="card-image" src="../webp/images/${pokemon_image}" alt="pokemon"></td>
    `;

    // Display the pokemons of the page
    pages[pageNumber].forEach(pokemon => {
        const card = createTableau(pokemon);
        tbody.appendChild(card);
    });
}


document.getElementById('previousPage').addEventListener('click', previousPage);
document.getElementById('nextPage').addEventListener('click', nextPage);

// Display the first page
displayPage(currentPage);

// Function to go to the next page
function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        displayPage(currentPage);
    }
}

// Function to go to the previous page
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayPage(currentPage);
    }
}