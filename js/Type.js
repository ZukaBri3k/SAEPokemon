class Type {

    static all_types = [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ]    

    constructor(
        pokemon_id,
    ) {
        this.pokemon_id = pokemon_id;
    }

    toString() {
        return pokemon_types[this.pokemon_id];
    }
}

//console.log(pokemon_types[0]);

let t1 = new Type(3);

console.log(t1.toString());