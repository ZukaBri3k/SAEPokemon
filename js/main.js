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
}

console.log(pokemon[0]);

let p1 = new Pokemon(1, "Bulbasaur", "Normal", 90, 126, 118);