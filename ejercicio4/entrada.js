async function obtenerSpriteCharizard() {
    const pokemon = "charizard";

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error: Pokémon ${pokemon} no encontrado (Código: ${res.status})`);
        }

        const data = await res.json(); 
        
        const spriteUrl = data.sprites.front_default; 

        console.log(`--- Sprite de ${pokemon.toUpperCase()} ---`);
        console.log("URL de sprites.front_default:", spriteUrl); 

    } catch (err) {
        console.error("Error en Ejercicio 6:", err.message);
    }
}

obtenerSpriteCharizard();