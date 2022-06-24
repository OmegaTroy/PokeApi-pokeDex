const pokemon_count = 898;
const div = document.getElementById('div')

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
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++){
        await getPokemon(i);
    }
}


const getPokemon = async (id) => {
    let url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let data = await url.json();
    createPokemon(data);
}

const createPokemon = (pokemon) => {
    const pokeEl = document.createElement('div');
    const pokeInfo = document.getElementsByClassName('info');
    pokeEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3,'0');
    const types = pokemon.types.map(type => tipos[type.type.name]);
    const type = main_types.find(type => types.indexOf(type)  > -1);
    const dosType = types.join('  ')
    const color = colors[type];

    const pokeInnerHTML =`
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" class="img">
    <span class="numero">${id}</span>
    <h2 class="name">${name}</h2>
    <small class="type">Type: <span class="type__unico">${dosType}</span></small>
    `; 
    pokeEl.style.backgroundColor = color;
    pokeEl.innerHTML = pokeInnerHTML;
    div.appendChild(pokeEl);
}

fetchPokemons()