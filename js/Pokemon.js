class Pokemon {
    constructor(
        pokemon_id,
        pokemon_name,
        base_stamina,
        base_defense,
        base_attack
    ) {
        this.pokemon_id = pokemon_id;
        this.pokemon_name = pokemon_name;
        this.form = "Normal";
        this.base_stamina = base_stamina;
        this.base_defense = base_defense;
        this.base_attack = base_attack;
    }

    toString() {
        return `${this.pokemon_name} ${this.form}`;
    }

    getTypes() {
        return pokemon_types[this.pokemon_id];
    }
}

function import_pokemon() {
    let all_pokemons = [];

    pokemon.forEach((p) => {

        if(p.form == "Normal") {
            all_pokemons[p.pokemon_id] = new Pokemon(p.pokemon_id, p.pokemon_name, p.base_stamina, p.base_defense, p.base_attack);
        }
    })

    return all_pokemons;
}

console.log(import_pokemon());

let p1 = new Pokemon(1, "Bulbasaur", "Normal", 90, 126, 118);
console.log(p1.getTypes());