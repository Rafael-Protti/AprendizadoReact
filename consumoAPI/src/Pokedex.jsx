import { useEffect, useState } from "react";

function Pokedex() {
    
    const [pokemon, setPokemon] = useState([])
    const [pesquisa, setPesquisa] = useState("pikachu")

    async function buscarPokemon(pokemon) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        console.log(data)
        setPokemon(data)
    }

    useEffect(() => { 
        buscarPokemon(pesquisa)
    }, [])

    console.log(pokemon.sprites?.other["official-artwork"].front_default)

    return ( 
        <div>
            <h1>Pokédex</h1>
            <p>Procure um Pokemon</p>

            <input onChange={e => setPesquisa(e.target.value)} type="text" placeholder="Digite o nome do Pokemon..." />
            <button onClick={() => buscarPokemon(pesquisa)}>🔎 Pesquisar</button>
            <hr />

            <div>
                <h2>Nome: {pokemon.name}</h2>
                <p>Tipo: {pokemon.types?.map(type => type.type.name).join(', ')}</p>
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} width="200" />
            </div>
        </div>
     );
}

export default Pokedex;