class Type {
    constructor(
        form,
        pokemon_id,
        type
    ) {
        this.form = form;
        this.pokemon_id = pokemon_id;
        this.type = type;
    }

    toString() {
        return `${this.form} ${this.type}`;
    }
}

console.log(type[0]);

let t1 = new Type("Normal", 1, "Grass");