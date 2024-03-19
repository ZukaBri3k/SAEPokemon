class Type {

    static all_types = Type.import_type();   
 
    constructor(
        type
    ) {
        this.Type_effectiveness = type_effectiveness[type]
        this.type = type
    }

    toString() {
        return `type : ${this.type}, type_effectiveness : ${this.Type_effectiveness}`;
    }

    static import_type() {
        let all_types = [];
    
        pokemon_types.forEach((p) => {
    
            if(p.form == "Normal") {
                all_types[p.pokemon_id] = p.type.map((type) => new Type(type));
            }
        })
    
        return all_types;
    }
}
