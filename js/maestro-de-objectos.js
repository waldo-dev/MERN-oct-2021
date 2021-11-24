const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const dPor3 = (pokemon) => {
  const { id } = pokemon;
  if (id % 3 === 0) return true;
  return false;
};

const divisiblePorTres = (arr) => arr.filter((pokemon) => !(pokemon.id % 3));

const tieneFuego = (p) => {
  let resultado = false;

  for (let i = 0; i < p.types.length; i++) {
    if (p.types[i] === "fire") resultado = true;
  }

  return resultado;
};

const tiposDeFuego = (arr) => arr.filter((p) => p.types.includes("fire"));

const muchosTipos = (p) => p.types.length > 1;

const variosTipos = (arr) => arr.filter((p) => p.types.length > 1);

const sacaNombre = (p) => {
  const { name } = p;
  return name;
};

const soloNombres = (arr) => arr.map(({ name }) => name);

console.log({
  divisiblePorTres: divisiblePorTres(pokemon),
  tiposDeFuego: tiposDeFuego(pokemon),
  soloNombres: soloNombres(pokemon),
  variosTipos: variosTipos(pokemon),
});
