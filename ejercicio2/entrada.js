const pokemon = "pikachu";

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(res => {
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
    })

    .then(data => {
        console.log(`--- Datos de ${pokemon.toUpperCase()} ---`);
        console.log("Altura (decímetros):", data.height);
        console.log("Peso (hectogramos):", data.weight); 
    })

    .catch(err => console.error("Error en Ejercicio 4:", err));