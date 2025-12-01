async function obtenerDatosPikachu() {
    const pokemon = "pikachu";

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); 

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.status} - No se pudo encontrar el Pokémon.`);
        }

        const data = await res.json();

        console.log(`--- Datos de ${pokemon.toUpperCase()} ---`);
        console.log("Altura (decímetros):", data.height);
        console.log("Peso (hectogramos):", data.weight); 

    [cite_start]} catch (err) {
        console.error("Error en Ejercicio 5:", err.message);
    }
}

obtenerDatosPikachu();