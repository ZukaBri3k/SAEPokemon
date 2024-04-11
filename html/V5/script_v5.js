//tri par nom
function sortPokemonByNameAsc() {
    return allPokemons.sort((a, b) => {
        if(a.pokemon_name < b.pokemon_name) { 
            return -1
        } else if(a.pokemon_name > b.pokemon_name) {
            return 1
        } else {
            return 0
        }
    })
}

function sortPokemonByNameDesc() {
    return allPokemons.sort((a, b) => {
        if(a.pokemon_name > b.pokemon_name) { 
            return -1
        } else if(a.pokemon_name < b.pokemon_name) {
            return 1
        } else {
            return 0
        }
    })
}

let triNom = document.getElementById('nom');
let estTrieNom = true

triNom.addEventListener('click', function() {
    
    if(estTrieNom) {
        estTrieNom = false
        sortPokemonByNameAsc();
    } else {
        estTrieNom = true
        sortPokemonByNameDesc();
    }

    clearTable();
    afficherPage();
    desactiverBouton();
});


//tri par id
function sortPokemonByIdAsc() {
    return allPokemons.sort((a, b) => {
        return a.pokemon_id - b.pokemon_id
    })
}

function sortPokemonByIdDesc() {
    return allPokemons.sort((a, b) => {
        return b.pokemon_id - a.pokemon_id
    })
}

let triId = document.getElementById('id');
let estTrieId = true

triId.addEventListener('click', function() {

    if(estTrieId) {
        estTrieId = false
        sortPokemonByIdAsc();
    } else {
        estTrieId = true
        sortPokemonByIdDesc();
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})


//tri par génération
function sortPokemonByGenerationAsc() {
    return allPokemons.sort((a, b) => {
        if(a == b) {
            
        }
    })
}

function sortPokemonByGenerationDesc() {
    return allPokemons.sort((a, b) => {
        return b.generation - a.generation
    })
}

let triGeneration = document.getElementById('generationTri');
let estTrieGeneration = true

triGeneration.addEventListener('click', function() {
    console.log('click generation')
    if(estTrieGeneration) {
        estTrieGeneration = false
        sortPokemonByGenerationAsc();
    } else {
        estTrieGeneration = true
        sortPokemonByGenerationDesc();
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})