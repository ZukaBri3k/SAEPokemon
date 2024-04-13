function arrowSortAsc(id) {
    let conteneur = document.getElementById(id);
    conteneur = conteneur.querySelector('div');
    let arrow = conteneur.querySelector('svg');

    conteneur.removeChild(arrow);
    conteneur.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>`;
}

function arrowSortDesc(id) {
    let conteneur = document.getElementById(id);
    conteneur = conteneur.querySelector('div');
    let arrow = conteneur.querySelector('svg');

    conteneur.removeChild(arrow);
    conteneur.innerHTML += `<?xml version="1.0" ?><svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"/></svg>`;
}

function arrowReset() {
    let conteneurs = document.querySelectorAll('.sort');
    conteneurs.forEach((conteneur) => {

        conteneur.style.backgroundColor = '';
        conteneur = conteneur.querySelector('div');
        conteneur.style.fontWeight = 'normal';
        let arrow = conteneur.querySelector('svg');
        if(arrow) {
            conteneur.removeChild(arrow);
            conteneur.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></svg>`
        }
    })

}

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
    arrowReset();
    triNom.style.backgroundColor = 'teal';
    triNom.querySelector("div").style.fontWeight = 'bold';

    if(estTrieNom) {
        estTrieNom = false
        sortPokemonByNameAsc();
        arrowSortAsc('nom');
    } else {
        estTrieNom = true
        sortPokemonByNameDesc();
        arrowSortDesc('nom');
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
    arrowReset();
    triId.style.backgroundColor = 'teal';
    triId.querySelector("div").style.fontWeight = 'bold';

    if(estTrieId) {
        estTrieId = false
        sortPokemonByIdAsc();
        arrowSortAsc('id');
    } else {
        estTrieId = true
        sortPokemonByIdDesc();
        arrowSortDesc('id');
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})


//tri par génération
function sortPokemonByGenerationAsc() {
    let gens = Object.keys(generation).map((gen) => generation[gen][0].generation_number)
    let res = []
    let tmp

    gens.forEach((gen) => {
        tmp = allPokemons.filter((p) => p.generation == gen)
        tmp = tmp.sort((a, b) => {
            if(a.pokemon_name < b.pokemon_name) { 
                return -1
            } else if(a.pokemon_name > b.pokemon_name) {
                return 1
            } else {
                return 0
            }
        })
        res = res.concat(tmp)
    })
    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

function sortPokemonByGenerationDesc() {
    let gens = Object.keys(generation).map((gen) => generation[gen][0].generation_number)
    let res = []
    let tmp

    for(let i = gens.length - 1; i >= 0; i--) {
        let gen = gens[i]
        tmp = allPokemons.filter((p) => p.generation == gen)
        tmp = tmp.sort((a, b) => {
            if(a.pokemon_name < b.pokemon_name) { 
                return -1
            } else if(a.pokemon_name > b.pokemon_name) {
                return 1
            } else {
                return 0
            }
        })
        res = res.concat(tmp)
    }
    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

let triGeneration = document.getElementById('generationTri');
let estTrieGeneration = true

triGeneration.addEventListener('click', function() {
    arrowReset();
    triGeneration.style.backgroundColor = 'teal';
    triGeneration.querySelector("div").style.fontWeight = 'bold';

    if(estTrieGeneration) {
        estTrieGeneration = false
        sortPokemonByGenerationAsc();
        arrowSortAsc('generationTri');
    } else {
        estTrieGeneration = true
        sortPokemonByGenerationDesc();
        arrowSortDesc('generationTri');
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})

//tri par défense

function sortPokemonByDefenseAsc() {
    let tmp = allPokemons.sort((a, b) => {
        return a.base_defense - b.base_defense
    })
    let test
    let res = []

    for(let i = 0; i <= tmp[tmp.length - 1].base_defense; i++) {
        test = tmp.filter((p) => p.base_defense == i)
        if(test.length > 0) {
            test = test.sort((a, b) => {
                if(a.pokemon_name < b.pokemon_name) { 
                    return -1
                } else if(a.pokemon_name > b.pokemon_name) {
                    return 1
                } else {
                    return 0
                }
            })
            res = res.concat(test)
        } else if (test.length == 1) {
            res.push(test)
        }
    }

    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

function sortPokemonByDefenseDesc() {
    let tmp = allPokemons.sort((a, b) => {
        return b.base_defense - a.base_defense
    })
    let test
    let res = []

    for(let i = tmp[0].base_defense; i >= 0; i--) {
        test = tmp.filter((p) => p.base_defense == i)

        if(test.length > 0) {
            test = test.sort((a, b) => {
                if(a.pokemon_name < b.pokemon_name) { 
                    return -1
                } else if(a.pokemon_name > b.pokemon_name) {
                    return 1
                } else {
                    return 0
                }
            })
            res = res.concat(test)
        } else if (test.length == 1) {
            res.push(test[0])
        }
    }

    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

let triDefense = document.getElementById('defense');
let estTrieDefense = true

triDefense.addEventListener('click', function() {
    arrowReset();
    triDefense.style.backgroundColor = 'teal';
    triDefense.querySelector("div").style.fontWeight = 'bold';

    if(estTrieDefense) {
        estTrieDefense = false
        sortPokemonByDefenseAsc();
        arrowSortAsc('defense');
    } else {
        estTrieDefense = true
        sortPokemonByDefenseDesc();
        arrowSortDesc('defense');
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})


//tri par stamina

function sortPokemonByStaminaAsc() {
    let tmp = allPokemons.sort((a, b) => {
        return a.base_stamina - b.base_stamina
    })
    let test
    let res = []

    for(let i = 0; i <= tmp[tmp.length - 1].base_stamina; i++) {
        test = tmp.filter((p) => p.base_stamina == i)

        if(test.length > 0) {
            test = test.sort((a, b) => {
                if(a.pokemon_name < b.pokemon_name) { 
                    return -1
                } else if(a.pokemon_name > b.pokemon_name) {
                    return 1
                } else {
                    return 0
                }
            })
            res = res.concat(test)
        } else if (test.length == 1) {
            res.push(test)
        }
    }

    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

function sortPokemonByStaminaDesc() {
    let tmp = allPokemons.sort((a, b) => {
        return b.base_stamina - a.base_stamina
    })
    let test
    let res = []

    for(let i = tmp[0].base_stamina; i >= 0; i--) {
        test = tmp.filter((p) => p.base_stamina == i)

        if(test.length > 0) {
            test = test.sort((a, b) => {
                if(a.pokemon_name < b.pokemon_name) { 
                    return -1
                } else if(a.pokemon_name > b.pokemon_name) {
                    return 1
                } else {
                    return 0
                }
            })
            res = res.concat(test)
        } else if (test.length == 1) {
            res.push(test[0])
        }
    }

    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

let triStamina = document.getElementById('stamina');
let estTrieStamina = true

triStamina.addEventListener('click', function() {
    arrowReset();
    triStamina.style.backgroundColor = 'teal';
    triStamina.querySelector("div").style.fontWeight = 'bold';

    if(estTrieStamina) {
        estTrieStamina = false
        sortPokemonByStaminaAsc();
        arrowSortAsc('stamina');
    } else {
        estTrieStamina = true
        sortPokemonByStaminaDesc();
        arrowSortDesc('stamina');
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})


//tri par stamina

function sortPokemonByAttackAsc() {
    let tmp = allPokemons.sort((a, b) => {
        return a.base_attack - b.base_attack
    })
    let test
    let res = []

    for(let i = 0; i <= tmp[tmp.length - 1].base_attack; i++) {
        test = tmp.filter((p) => p.base_attack == i)

        if(test.length > 0) {
            test = test.sort((a, b) => {
                if(a.pokemon_name < b.pokemon_name) { 
                    return -1
                } else if(a.pokemon_name > b.pokemon_name) {
                    return 1
                } else {
                    return 0
                }
            })
            res = res.concat(test)
        } else if (test.length == 1) {
            res.push(test)
        }
    }

    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

function sortPokemonByAttackDesc() {
    let tmp = allPokemons.sort((a, b) => {
        return b.base_attack - a.base_attack
    })
    let test
    let res = []

    for(let i = tmp[0].base_attack; i >= 0; i--) {
        test = tmp.filter((p) => p.base_attack == i)

        if(test.length > 0) {
            test = test.sort((a, b) => {
                if(a.pokemon_name < b.pokemon_name) { 
                    return -1
                } else if(a.pokemon_name > b.pokemon_name) {
                    return 1
                } else {
                    return 0
                }
            })
            res = res.concat(test)
        } else if (test.length == 1) {
            res.push(test[0])
        }
    }

    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

let triAttack = document.getElementById('attack');
let estTrieAttack = true

triAttack.addEventListener('click', function() {
    arrowReset();
    triAttack.style.backgroundColor = 'teal';
    triAttack.querySelector("div").style.fontWeight = 'bold';

    if(estTrieAttack) {
        estTrieAttack = false
        sortPokemonByAttackAsc();
        arrowSortAsc('attack');
    } else {
        estTrieAttack = true
        sortPokemonByAttackDesc();
        arrowSortDesc('attack');
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})


//tri par type

function sortPokemonByTypeAsc() {
    let types = Type.all_types
    let res = []
    let tmp

    types.forEach((type) => {
        tmp = allPokemons.filter((p) => p.type[0].type == type)
        tmp = tmp.sort((a, b) => {
            if(a.pokemon_name < b.pokemon_name) { 
                return -1
            } else if(a.pokemon_name > b.pokemon_name) {
                return 1
            } else {
                return 0
            }
        })
        res = res.concat(tmp)
    })

    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

function sortPokemonByTypeDesc() {
    let types = Type.all_types
    let res = []
    let tmp

    for(let i = types.length - 1; i >= 0; i--) {
        let type = types[i]
        tmp = allPokemons.filter((p) => p.type[0].type == type)
        tmp = tmp.sort((a, b) => {
            if(a.pokemon_name < b.pokemon_name) { 
                return -1
            } else if(a.pokemon_name > b.pokemon_name) {
                return 1
            } else {
                return 0
            }
        })
        res = res.concat(tmp)
    }
    
    allPokemons = []
    allPokemons = allPokemons.concat(res)
}

let triType = document.getElementById('typeTri');
let estTrieType = true

triType.addEventListener('click', function() {
    arrowReset();
    triType.style.backgroundColor = 'teal';
    triType.querySelector("div").style.fontWeight = 'bold';

    if(estTrieType) {
        estTrieType = false
        sortPokemonByTypeAsc();
        arrowSortAsc('typeTri');
    } else {
        estTrieType = true
        sortPokemonByTypeDesc();
        arrowSortDesc('typeTri');
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})