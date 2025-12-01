async function obtenerNombrePokemon() {
    const pokemonId = prompt("Por favor, ingresa el ID de un Pokémon (ej. 25 para Pikachu):");

    if (!pokemonId) {
        console.log("No se ingresó ningún ID.");
        return;
    }

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error: Pokémon con ID ${pokemonId} no encontrado (${res.status})`);
        }

        const data = await res.json();
        
        console.log(`El nombre del Pokémon con ID ${pokemonId} es: ${data.name}`); 

    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }
}

obtenerNombrePokemon();