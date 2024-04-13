function voirPokemonDetails(event) {
    document.body.style.overflow = 'hidden';
    const pokemonId = event.currentTarget.getAttribute('data-pokemon-id');
    const pokemon = Pokemon.all_pokemons[pokemonId - 1];

    const modal = document.getElementById("pokemonDetails");
    const modalContent = document.getElementById("pokemonName");
    const attackDetails = document.getElementById("attackDetails");

    let pokemonTout = allPokemons.find(pokemon => pokemonId == pokemon.pokemon_id);

    modalContent.textContent = `Détails de ${pokemonTout.pokemon_name}`;

    let pokemon_image;
    if(pokemonId <= 9) {
        pokemon_image = "00" + pokemonId + ".webp";
    } else if(pokemonId <= 99) {
        pokemon_image = "0" + pokemonId + ".webp";
    } else {
        pokemon_image = pokemonId + ".webp";
    }

    const pokemonImageElement = document.getElementById("pokemonImage");
    pokemonImageElement.src = `../webp/images/${pokemon_image}`;
    pokemonImageElement.alt = pokemonTout.pokemon_name;

    let attackHTML = "";

    if (pokemonTout.charged_moves.length > 0) {
        pokemonTout.charged_moves.forEach(move => {
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

    if (pokemonTout.fast_moves.length > 0) {
        pokemonTout.fast_moves.forEach(move => {
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