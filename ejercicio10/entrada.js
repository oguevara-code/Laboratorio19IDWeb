async function mostrarStatsConsola(nombrePokemon) {
    console.log(`\n--- Ejercicio 12: Estadísticas de ${nombrePokemon.toUpperCase()} ---`);
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);

        if (!res.ok) {
            throw new Error(`Pokémon "${nombrePokemon}" no encontrado.`);
        }

        const data = await res.json();

        console.log(`Nombre: ${data.name.toUpperCase()}`);
        
        data.stats.forEach(statInfo => { 
            const statName = statInfo.stat.name;
            const baseStat = statInfo.base_stat;
            console.log(`- ${statName.replace('-', ' ')}: ${baseStat}`);
        });

    } catch (error) {
        console.error("Error Ejercicio 12:", error.message);
    }
}

mostrarStatsConsola("charizard");