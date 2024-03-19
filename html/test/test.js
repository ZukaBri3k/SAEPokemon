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
    let weakestType = attack.type.Type_Effectiveness.sort((a, b) => {
        return a.damage - b.damage
    })
}


function handlePokemonType() {
    let type = document.getElementById("type").value
    console.log(type)
    let pokemons = getPokemonByType(type)
    console.table(pokemons)

}

console.log("Récupérer les pokémons ayant l'attaque 'Poison Jab'")
console.log(getPokemonsByAttackName("Poison Jab"))
console.log("------------------------------------------------------------")

console.log("Récupérer les attaques de type 'Poison'")
console.log(getAttackByType("Poison"))
console.log("------------------------------------------------------------")

console.log("Trier les pokémons par nom")
console.log(sortPokemonByName())
console.log("------------------------------------------------------------")

console.log("Trier les pokémons par stamina")
console.log(sortPokemonByStamina())
console.log("------------------------------------------------------------")