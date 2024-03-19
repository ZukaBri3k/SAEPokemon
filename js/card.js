function createCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    let pokemon_image;
    if(pokemon.pokemon_id < 9) {
        pokemon_image = "00" + pokemon.pokemon_id + ".webp";
    } else if(pokemon.pokemon_id < 99) {
        pokemon_image = "0" + pokemon.pokemon_id + ".webp";
    } else {
        pokemon_image = pokemon.pokemon_id + ".webp";
    }

    
    card.innerHTML = `
        <p class="name">${pokemon.pokemon_name}</p>
        <img src="../img/images/${pokemon_image}" alt="${pokemon.pokemon_name}" class="card-image">
        <table class="${pokemon.pokemon_type}">
            <tbody>
            <tr>
                <th>Pokemon ID</th>
                <td class="id">${pokemon.pokemon_id}</td>
            </tr>
                <th>Charged moves</th>
                <td class="charged_moves">${pokemon.charged_moves}</td>
            </tr>
                <th>Fast moves</th>
                <td class="fast_moves">${pokemon.fast_moves}</td>
            </tr>
                <th>Form</th>
                <td class="form">${pokemon.form}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td class="id">${pokemon.pokemon_type}</td>
            </tr>
            </tbody>
        </table>
    `;
    return card;
}

allPokemons.forEach(pokemon => {
    const card = createCard(pokemon);
    let main = document.querySelector('main');
    main.appendChild(card);
});