function createCard(pokemon) {
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

    
    $(".card-image").attr('src', `../webp/images/${pokemon_image}`);

    $('.id').append(`${pokemon.pokemon_id}`);

    $('.generation').append(`${pokemon.generation}`);

    $('.name').append(document.createTextNode(pokemon.pokemon_name));

    $('.type').append(document.createTextNode(type));

    $('.stamina').append(document.createTextNode(pokemon.base_stamina));

    $('.defense').append(document.createTextNode(pokemon.base_defense));

    $('.attaque').append(document.createTextNode(pokemon.base_attack));
    
}

const allPokemons = Pokemon.all_pokemons;
createCard(allPokemons[1]);

console.log(allPokemons[1]);