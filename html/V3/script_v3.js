let currentPage = 0;
const itemsPerPage = 25;

function createTableau(pokemon) {
    const tableau = document.createElement('tr');
    tableau.classList.add('tr');

    // Définition de l'attribut data-pokemon-id
    tableau.setAttribute('data-pokemon-id', pokemon.pokemon_id);

    let pokemon_image;
    if(pokemon.pokemon_id <= 9) {
        pokemon_image = "00" + pokemon.pokemon_id + ".webp";
    } else if(pokemon.pokemon_id <= 99) {
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

    tableau.innerHTML = `
        <td class="name">${pokemon.pokemon_name}</td>
        <td class="id">${pokemon.pokemon_id}</td>
        <td class="generation">${pokemon.generation}</td>
        <td class="type">${type}</td>
        <td class="defense">${pokemon.base_stamina}</td>
        <td class="stamina">${pokemon.base_stamina}</td>
        <td class="attaque">${pokemon.base_attack}</td>
        <td><img class="card-image" src="../webp/images/${pokemon_image}" alt="pokemon"></td>
    `;

    tableau.addEventListener('click', showPokemonDetails);

    tbody.appendChild(tableau);
}


function afficherPage() {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    
    for(let i = (currentPage * itemsPerPage) + 1; i < ((currentPage + 1) * itemsPerPage) + 1; i++) {
        if(Pokemon.all_pokemons[i] !== undefined) {
            createTableau(Pokemon.all_pokemons[i]);
        }
    }
}

afficherPage()

document.getElementById('previousPage').addEventListener('click', previousPage);
document.getElementById('nextPage').addEventListener('click', nextPage);
function nextPage() {
    if (currentPage < Math.floor(Pokemon.all_pokemons.length / itemsPerPage)) {
        currentPage++;
        desactiverBouton();
        afficherPage();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        desactiverBouton();
        afficherPage();
    }
}

let boutonSuivant = document.getElementById('nextPage');
let boutonRetour = document.getElementById('previousPage');

function desactiverBouton() {
    if (currentPage === 0) {
        boutonRetour.disabled = true;
    } else {
        boutonRetour.disabled = false;
    }
    
    if (currentPage === Math.floor(Pokemon.all_pokemons.length / itemsPerPage)) {
        boutonSuivant.disabled = true;
    } else {
        boutonSuivant.disabled = false;
    }
}

desactiverBouton();

function showPokemonDetails(event) {
    document.body.style.overflow = 'hidden';
    const pokemonId = event.currentTarget.getAttribute('data-pokemon-id');
    const pokemon = Pokemon.all_pokemons[pokemonId - 1];

    const modal = document.getElementById("pokemonDetails");
    const modalContent = document.getElementById("pokemonName");
    const attackDetails = document.getElementById("attackDetails");

    modalContent.textContent = `Détails de ${pokemon.pokemon_name}`;

    let pokemon_image;
    if(pokemon.pokemon_id <= 9) {
        pokemon_image = "00" + pokemon.pokemon_id + ".webp";
    } else if(pokemon.pokemon_id <= 99) {
        pokemon_image = "0" + pokemon.pokemon_id + ".webp";
    } else {
        pokemon_image = pokemon.pokemon_id + ".webp";
    }

    const pokemonImageElement = document.getElementById("pokemonImage");
    pokemonImageElement.src = `../webp/images/${pokemon_image}`;
    pokemonImageElement.alt = pokemon.pokemon_name;

    let attackHTML = "";

    if (pokemon.charged_moves.length > 0) {
        pokemon.charged_moves.forEach(move => {
            attackHTML += "<tr>";
            attackHTML += `<td>${move.name}</td>`;
            attackHTML += `<td>${move.critical_chance}</td>`;
            attackHTML += `<td>${move.duration}</td>`;
            attackHTML += `<td>${move.energy_delta}</td>`;
            attackHTML += `<td>${move.power}</td>`;
            attackHTML += `<td>${move.stamina_loss_scaler}</td>`;
            attackHTML += `<td>${move.type.type}</td>`;
            attackHTML += '<td>✅</td>'
            attackHTML += '<td>❌</td>'
            attackHTML += "</tr>";
        });
    }

    if (pokemon.fast_moves.length > 0) {
        pokemon.fast_moves.forEach(move => {
            attackHTML += "<tr>";
            attackHTML += `<td>${move.name}</td>`;
            attackHTML += `<td>${move.critical_chance}</td>`;
            attackHTML += `<td>${move.duration}</td>`;
            attackHTML += `<td>${move.energy_delta}</td>`;
            attackHTML += `<td>${move.power}</td>`;
            attackHTML += `<td>${move.stamina_loss_scaler}</td>`;
            attackHTML += `<td>${move.type.type}</td>`;
            attackHTML += '<td>❌</td>'
            attackHTML += '<td>✅</td>'
            attackHTML += "</tr>";
        });
    }

    attackDetails.innerHTML = attackHTML;
    modal.style.display = "block";
}


const closeModalButton = document.getElementById("closeModal");

closeModalButton.addEventListener("click", function() {
    const modal = document.getElementById("pokemonDetails");
    document.body.style.overflow = 'auto';
    modal.style.display = "none";
});