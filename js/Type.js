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
        type
    ) {
        this.Type_effectiveness = type_effectiveness[type]
        this.type = type
    }

    toString() {
        return `type : ${this.type}, type_effectiveness : ${this.Type_effectiveness}`;
    }
}

function import_type() {
    let all_types = [];

    pokemon_types.forEach((p) => {

        if(p.form == "Normal") {
            all_types[p.pokemon_id] = p.type.map((type) => new Type(type));
        }
    })

    return all_types;
}

/* console.log(pokemon_types[0]); */

/* console.log(import_type()); */
