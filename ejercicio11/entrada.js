async function buscarStatsHTMLSimple() {
    const input = document.getElementById("statsInput");
    const resultadoDiv = document.getElementById("statsResultado");
    const nombreOId = input.value.toLowerCase().trim();

    if (!nombreOId) {
        resultadoDiv.innerHTML = "Ingrese un nombre.";
        return;
    }

    resultadoDiv.innerHTML = "Cargando...";

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreOId}`);
        if (!res.ok) {
            throw new Error(`Pokémon "${nombreOId}" no existe.`);
        }
        
        const data = await res.json();
        
        let listaStats = `<h2>Stats de ${data.name.toUpperCase()}</h2><ul>`;
        
        data.stats.forEach(s => {
            listaStats += `<li><strong>${s.stat.name.replace('-', ' ')}:</strong> ${s.base_stat}</li>`;
        });
        
        listaStats += '</ul>';
        resultadoDiv.innerHTML = listaStats;
        
    } catch (error) {
        resultadoDiv.innerHTML = `Error: ${error.message}`;
    }
}