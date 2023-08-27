const $ = Selector => document.querySelector(Selector);
const $Container = $('#container');
const pokemon_count = 1015;



const colors = {
    Fuego: '#FF7878',
    Planta: '#A9ECA2',
	Electrico: '#E8E9A1',
	Agua: '#54BAB9',
	Tierra: '#E0C097',
	Roca: '#A97155',
	Hada: '#FFBCBC',
	Veneno: '#6E5773',
	Bicho: '#C6D57E',
	Dragon: '#BFA2DB',
	Psíquico: '#F6C6EA',
	Volador: '#CEE5D0',
	Lucha: '#E6BA95',
	Normal: '#D3CEDF',
    Siniestro: '#352F44',
    Fantasma: '#39375B',
    Acero: '#758184',
    Hielo: '#B5EAEA'
}

const main_types = Object.keys(colors);

const tipos = {
    fire: 'Fuego',
    grass: 'Planta',
    electric: 'Electrico',
    water: 'Agua',
    ground: 'Tierra',
    rock: 'Roca',
    fairy: 'Hada',
    poison: 'Veneno',
    bug: 'Bicho',
    dragon: 'Dragon',
    psychic: 'Psíquico',
    flying: 'Volador',
    fighting: 'Lucha',
    normal: 'Normal',
    dark: 'Siniestro',
    ghost: 'Fantasma',
    steel: 'Acero',
    ice: 'Hielo'
}


const getPokemon = async()=>{
    for(let i = 1; i <= pokemon_count; i++){
        await fetchData(i)
    }
}

const fetchData = async (id) =>{
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemonData = await data.json()
    console.log(pokemonData)
    await createPokemon(pokemonData)
}


const createPokemon =(pokemon)=>{
    const pokeContainer = document.createElement('div')
    pokeContainer.classList.add('pokemon')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type = pokemon.types.map(type => tipos[type.type.name]);
    const types = type.join(' ')
    const id = pokemon.id.toString().padStart(3,'0');
    const backgroundType = main_types.find(type => types.indexOf(type)  > -1);
    const color = colors[backgroundType]
    const newPokemon = `
    <h3 class='name'>${name}</h3>
    <img src=${pokemon.sprites.front_default} class='sprites'/>
        <b class='numero'>${id}</b>
    <p class='type__unico'>${types}</p>
    `
    pokeContainer.style.background = color
    pokeContainer.innerHTML = newPokemon;
    $Container.appendChild(pokeContainer)
}


    getPokemon()