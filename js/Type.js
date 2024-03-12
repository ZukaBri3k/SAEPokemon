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
        type
    ) {
        this.pokemon_id = pokemon_id;
        let test = pokemon_types.find((_type) => _type.pokemon_id === pokemon_id && _type.form === "Normal");
        this.type = test.type;
    }

    toString() {
        return pokemon_types[this.pokemon_id];
    }
}

function import_type() {
    let all_types = [];

    pokemon_types.forEach((p) => {

        if(p.form == "Normal") {
            all_types[p.pokemon_id] = new Type(p.pokemon_id, p.type);
        }
    })

    return all_types;
}

//console.log(pokemon_types[0]);

/* console.log(import_type()); */
