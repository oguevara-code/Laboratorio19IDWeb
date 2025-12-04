async function buscarPokemonConTipos() {
    const resultadoDiv = document.getElementById("resultadoTipos");
    const inputBusqueda = document.getElementById("pokemonBusqueda");
  
    const nombreOId = inputBusqueda.value.toLowerCase().trim(); 

    if (!nombreOId) {
        resultadoDiv.innerHTML = "<h3>Por favor, ingresa el nombre o ID de un Pokémon.</h3>";
        return;
    }

    resultadoDiv.innerHTML = "<h3>Buscando...</h3>";
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreOId}`);
        
        if (!res.ok) {
            throw new Error(`Pokémon "${nombreOId}" no encontrado (Código: ${res.status})`);
        }
        
        const data = await res.json();
       
        const tipos = data.types.map(tipoInfo => tipoInfo.type.name); 

        const tiposStr = tipos.join(", "); 
        
        resultadoDiv.innerHTML = `
            <h2>#${data.id} - ${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" style="width: 150px;">
            <p><strong>Tipos:</strong> ${tiposStr}</p>
        `;
        
    } catch (error) {
        resultadoDiv.innerHTML = `<h3>Error: ${error.message}</h3>`;
    }
}