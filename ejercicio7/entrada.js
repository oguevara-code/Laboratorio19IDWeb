async function buscarPokemonPorId() {
    const card = document.getElementById("card");
    const inputId = document.getElementById("pokemonId");
    const id = inputId.value;

    if (!id || id < 1 || id > 898) {
        card.innerHTML = "<h3>Por favor, ingresa un ID de Pokémon válido (1-898).</h3>";
        return;
    }
    
    card.innerHTML = "<h3>Cargando...</h3>";
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!res.ok) {
            throw new Error(`Pokémon con ID ${id} no encontrado (Código: ${res.status})`);
        }
        
        const data = await res.json();
        
        
        const habilidades = data.abilities.map(a => a.ability.name).join(", ");
        
        
        card.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}"> <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Peso:</strong> ${data.weight}</p>
            <p><strong>Altura:</strong> ${data.height}</p>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
        `;
        
    } catch (error) {
        card.innerHTML = `<h3>Error: ${error.message}</h3>`; 
    }
}