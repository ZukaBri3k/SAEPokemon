function createTableau(pokemon) {
    const tableau = document.createElement('tr');
    tbody.appendChild(tableau);
    tableau.classList.add('tr');

    let pokemon_image;
    if(pokemon.pokemon_id < 9) {
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

    tableau.innerHTML = `
        <td class="name">${pokemon.pokemon_name}</td>
        <td class="id">${pokemon.pokemon_id}</td>
        <td class="generation"></td>
        <td class="type">${type}</td>
        <td class="defense">${pokemon.pokemon_defense}</td>
        <td class="stamina">${pokemon.pokemon_stamina}</td>
        <td class="attaque">${pokemon.pokemon_attack}</td>
        <td><img class="card-image" src="../webp/images/${pokemon_image}" alt="pokemon"></td>
    `;
    return tableau;
}

const allPokemons = Pokemon.all_pokemons;
allPokemons.forEach(pokemon => {
    const card = createTableau(pokemon);
    let main = document.querySelector('tbody');
    main.appendChild(card);
});