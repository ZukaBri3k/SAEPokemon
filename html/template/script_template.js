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
    
    let charged_moves = '';
    pokemon.charged_moves.forEach(move => {
        charged_moves += `${move.name}`;

        charged_moves += `- Critical Chance : ${move.critical_chance}\n`;
        charged_moves += `- Duration : ${move.duration}\n`;
        charged_moves += `- Energy Delta : ${move.energy_delta}\n`;
        charged_moves += `- Power : ${move.power}\n`;
        charged_moves += `- Stamina Loss Scaler : ${move.stamina_loss_scaler}\n`;
        charged_moves += `- Type : ${move.type.type}\n`;

        if(move != pokemon.charged_moves[pokemon.charged_moves.length - 1]) {
            charged_moves += ' | ';
            charged_moves += '<br>';
        }
    });

    let fast_moves = '';
    pokemon.fast_moves.forEach(move => {
        fast_moves += `${move.name}`;

        fast_moves += `- Critical Chance : ${move.critical_chance}\n`;
        fast_moves += `- Duration : ${move.duration}\n`;
        fast_moves += `- Energy Delta : ${move.energy_delta}\n`;
        fast_moves += `- Power : ${move.power}\n`;
        fast_moves += `- Stamina Loss Scaler : ${move.stamina_loss_scaler}\n`;
        fast_moves += `- Type : ${move.type.type}\n`;

        if(move != pokemon.fast_moves[pokemon.fast_moves.length - 1]) {
            fast_moves += ' | ';
            fast_moves += '<br>';
        }
    });

    let type = '';
    pokemon.type.forEach(t => {
        type += `${t.type}`;
        if(t != pokemon.type[pokemon.type.length - 1]) {
            type += ' | ';
        }
    });

    
    $('#main').append(`<img src="../webp/images/${pokemon_image}" alt="${pokemon.name}">`);

    $('#id').append(`${pokemon.pokemon_id}`);

    $('#name').append(`${pokemon.name}`);

    
}

const allPokemons = Pokemon.all_pokemons;
allPokemons.forEach(pokemon => {
    const card = createCard(pokemon);
    let main = document.querySelector('main');
    main.appendChild(card);
});