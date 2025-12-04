async function obtenerPokemonAleatorio() {
    try {
        
        const idAleatorio = Math.floor(Math.random() * 898) + 1;
        console.log(`\n--- Ejercicio 8: Buscando Pokémon con ID: ${idAleatorio} ---`);
        
        const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        
        const data = await res.json();
        console.log(`Pokémon Aleatorio: ${data.name.toUpperCase()} (ID: ${data.id})`);
    } catch (error) {
        console.error("Error Ejercicio 8:", error.message);
    }
}
obtenerPokemonAleatorio();