class Pokemon {
    constructor(
        pokemon_id,
        pokemon_name,
        base_stamina,
        base_defense,
        base_attack,
        charged_moves,
        fast_moves
    ) {
        this.pokemon_id = pokemon_id;
        this.pokemon_name = pokemon_name;
        this.form = "Normal";
        this.base_stamina = base_stamina;
        this.base_defense = base_defense;
        this.base_attack = base_attack;
        this.charged_moves = charged_moves
        this.fast_moves = fast_moves
    }

    toString() {
        return `${this.pokemon_name} ${this.form}`;
    }

    get_attacks() {
        return {...this.charged_moves, ...this.fast_moves}
    }
}

function import_pokemon() {
    let all_pokemons = [];

    pokemon.forEach((p) => {

        if(p.form == "Normal") {

            let pokemon_attack = pokemon_generations.find((_pokemon_attack) => _pokemon_attack.pokemon_name == p.pokemon_name)
            
            let charged_moves_pokemon = pokemon_attack.charged_moves.map((_pokemon_move) => {
                let res = charged_moves.find((_move) => _move.name == _pokemon_move)
                res = new Attack(res.name, res.duration, res.critical_chance, res.energy_delta, res.move_id, res.power, res.stamina_loss_scaler, res.type)

                if (!Attack.all_attacks.includes(res)) {
                    Attack.all_attacks.push(res)
                }

                return res
            })


            let fast_moves_pokemon = pokemon_attack.fast_moves.map((_pokemon_move) => {

                let res = fast_moves.find((_move) => _move.name == _pokemon_move)

                if(res != undefined) {
                    res = new Attack(res.name, res.duration, res.critical_chance, res.energy_delta, res.move_id, res.power, res.stamina_loss_scaler, res.type)

                    if (!Attack.all_attacks.includes(res)) {
                        Attack.all_attacks.push(res)
                    }
                }

                return res
            })

            all_pokemons[p.pokemon_id] = new Pokemon(p.pokemon_id, p.pokemon_name, p.base_stamina, p.base_defense, p.base_attack, charged_moves_pokemon, fast_moves_pokemon);
        }
    })

    return all_pokemons;
}

let allPokemons = import_pokemon()

function getPokemonsByAttackName(attackName) {
    return allPokemons.filter(pokemon => (pokemon.charged_moves.find((_move) => _move.name == attackName)) || (pokemon.fast_moves.find((_move) => {
        if(_move != undefined) {
            return _move.name == attackName
        }
    })))
}

console.log(allPokemons)
console.log(getPokemonsByAttackName("Vine Whip"))