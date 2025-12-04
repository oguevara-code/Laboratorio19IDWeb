async function listarPrimeros20Pokemon() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20"); // 
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        console.log("--- Ejercicio 7: Primeros 20 Pokémon ---");
        data.results.forEach((pokemon, index) => {
            console.log(`${index + 1}. Nombre: ${pokemon.name}`);
        });
    } catch (error) {
        console.error("Error Ejercicio 7:", error.message);
    }
}
listarPrimeros20Pokemon();