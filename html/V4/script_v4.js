//creation des inputs

let filtreGeneration = document.getElementById('generation');
let i = 1;

Object.keys(generation).forEach((_generation) => {
    let option = document.createElement('option');
    option.value = i;
    i++;
    option.text = _generation;
    filtreGeneration.appendChild(option);
})


let filtreType = document.getElementById('type');

Type.all_types.forEach((_type) => {
    let option = document.createElement('option');
    option.value = _type;
    option.text = _type;
    filtreType.appendChild(option);
})

let filtreRecherche = document.getElementById('recherche');


//fonctions de filtre

function filtrerParGeneration(generation) {
    return allPokemons.filter(pokemon => pokemon.generation == generation);
}

function filtrerParType(type) {
    return allPokemons.filter(pokemon => pokemon.type.find(t => t.type == type));
}

function filtrerRecherche(recherche) {
    recherche = recherche.trim();
    return allPokemons.filter(pokemon => pokemon.pokemon_name.toLowerCase().includes(recherche.toLowerCase()));
}


//ajout des event listeners
let typeFiltre = filtreType.value;
let generationFiltre = filtreGeneration.value;
let rechercheFiltre = filtreRecherche.value;


filtreGeneration.addEventListener('change', function() {
    currentPage = 0;
    generationFiltre = filtreGeneration.value;

    allPokemons = Pokemon.all_pokemons;
        
    if(typeFiltre != 'vide') {
        allPokemons = filtrerParType(typeFiltre);
    }

    if(rechercheFiltre != '') {
        allPokemons = filtrerRecherche(rechercheFiltre);
    }

    if(generationFiltre != 'vide') {
        allPokemons = filtrerParGeneration(generationFiltre);
    }

    clearTable();
    afficherPage();
    desactiverBouton();
});


filtreType.addEventListener('change', function() {
    currentPage = 0;
    typeFiltre = filtreType.value;
    
    allPokemons = Pokemon.all_pokemons;
        
    if(generationFiltre != 'vide') {
        allPokemons = filtrerParGeneration(generationFiltre);
    }

    if(rechercheFiltre != '') {
        allPokemons = filtrerRecherche(rechercheFiltre);
    }

    if(typeFiltre != 'vide') {
        allPokemons = filtrerParType(typeFiltre);
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})

filtreRecherche.addEventListener('input', function() {
    currentPage = 0;
    rechercheFiltre = filtreRecherche.value;
    allPokemons = Pokemon.all_pokemons;

    if(generationFiltre != 'vide') {
        allPokemons = filtrerParGeneration(generationFiltre);
    }
    if(typeFiltre != 'vide') {
        allPokemons = filtrerParType(typeFiltre);
    }

    if(rechercheFiltre != '') {
        allPokemons = filtrerRecherche(rechercheFiltre);
    }

    clearTable();
    afficherPage();
    desactiverBouton();
})