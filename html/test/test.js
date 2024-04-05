function getPokemonByType(type) {
    return Pokemon.all_pokemons.filter(pokemon => pokemon.type.find((_type) => _type.type == type)) 
}

function getPokemonsByAttackName(attackName) {
    return Pokemon.all_pokemons.filter(pokemon => (pokemon.charged_moves.find((_move) => _move.name == attackName)) || (pokemon.fast_moves.find((_move) => {
        if(_move != undefined) {
            return _move.name == attackName
        }
    })))
}

function getAttackByType(type) {
    return Attack.all_attacks.filter(attack => attack.type.type == type)
}

function sortPokemonByName() {
    return Pokemon.all_pokemons.sort((a, b) => {
        if(a.pokemon_name < b.pokemon_name) { 
            return -1
        } else if(a.pokemon_name > b.pokemon_name) {
            return 1
        } else {
            return 0
        }
    })
}

function sortPokemonByStamina() {
    return Pokemon.all_pokemons.sort((a, b) => {
        return a.base_stamina - b.base_stamina
    })

}

function getWeakestEnemies(attack) {
    let currentAttackType = Attack.all_attacks.find(_attack => _attack.name == attack).type.Type_effectiveness
    console.log(currentAttackType)
    let WeakestPokemons = Pokemon.all_pokemons.filter(pokemon => {

        let multiplier = 1
        pokemon.type.forEach(element => {
            multiplier *= currentAttackType[element.type]
        })
        
        if(multiplier > 1) {
            return pokemon
        }
    })

    console.log(WeakestPokemons)
}


function handlePokemonType() {
    let type = document.getElementById("type").value
    let pokemons = getPokemonByType(type)
    console.table(pokemons)

}

function handlePokemonByAttackName() {
    let attack = document.getElementById("attack").value
    let pokemons = getPokemonsByAttackName(attack)
    console.table(pokemons)
}

function handleAttackByType() {
    let type = document.getElementById("type").value
    let attacks = getAttackByType(type)
    console.table(attacks)
}

function handleSortPokemonByName() {
    let pokemons = sortPokemonByName()
    console.table(pokemons)
}

function handleSortPokemonByStamina() {
    let pokemons = sortPokemonByStamina()
    console.table(pokemons)
}

function handleWeakestEnemies() {
    let attack = document.getElementById("attack").value
    let pokemons = getWeakestEnemies(attack)

}


/* function getBestAttackTypesForEnemy(name) {
    let bestAttack = Pokemon.all_pokemons.find(pokemon => pokemon.pokemon_name == name).type.map((_type) => {

        type_effectiveness.forEach((type) => {
            if(type.type == _type.type) {
                _type.effectiveness = type
                console.log(_type)
            }
        })
        
        let attacks = Attack.all_attacks.filter(attack => attack.type.type == type);
        attacks.sort((a, b) => b.power - a.power);
        return attacks[0];
    });

    return bestAttack;
} */

function getBestAttackTypesForEnemy(name) {
    let bestAttackTypes = Pokemon.all_pokemons.find(_pokemon => _pokemon.pokemon_name == name).type.map((currentPokemonType) => {
        let attackTypes = []
        Attack.all_attacks.forEach(attack => {
            let multiplier = 1
            multiplier *= attack.type.Type_effectiveness[currentPokemonType.type]

            Pokemon.all_pokemons.find(_pokemon => _pokemon.pokemon_name == name).type.map((currentPokemonType2) => {
                if(currentPokemonType2 != currentPokemonType) {
                    multiplier *= attack.type.Type_effectiveness[currentPokemonType2.type]
                }
            })
            if(attack.type.Type_effectiveness[currentPokemonType.type + 1] != undefined) {
                multiplier *= attack.type.Type_effectiveness[currentPokemonType.type + 1]
            }
            
            if(multiplier > 1) {
                attackTypes.push(attack.type.type)
            }
        })
        return attackTypes
})
bestAttackTypes = [... new Set(bestAttackTypes.flat())]
console.table(bestAttackTypes)
}

function handleBestAttackTypesForEnemy() {
    let pokemon_name = document.getElementById("pokemon_name").value
    let bestAttack = getBestAttackTypesForEnemy(pokemon_name)
    console.table(bestAttack)
}