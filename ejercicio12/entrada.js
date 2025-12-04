const allPokemon = [];
let currentIdx = 0;   

function createCard(data) {
    return `
        <div style="border: 1px solid #ccc; padding: 10px; width: 150px; text-align: center;">
            <img src="${data.sprites.front_default}" style="width: 100px;">
            <h4>${data.name.toUpperCase()} (#${data.id})</h4>
        </div>
    `;
}

async function initGallery() {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if (res.ok) {
            allPokemon.push(await res.json()); 
        }
    }
    showGroup();
}

function showGroup() {
    const container = document.getElementById("container");
    container.style.display = 'flex'; 
    container.innerHTML = '';
    
    const currentGroup = allPokemon.slice(currentIdx, currentIdx + 3);

    currentGroup.forEach(data => {
        container.innerHTML += createCard(data);
    });

    document.getElementById('btnAnterior').disabled = (currentIdx === 0);
    document.getElementById('btnSiguiente').disabled = (currentIdx + 3 >= allPokemon.length);
}

function cambiarGrupo(direction) {
    currentIdx += direction * 3; 
    showGroup();
}

initGallery();