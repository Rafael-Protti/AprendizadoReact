import { useEffect, useState } from "react";

function App() {

    let pronome = "Sr."

    function verificarPronome(usuario) {
        if (usuario.gender === "male") {
            pronome = "Sr."
        } else {
            pronome = "Sra."
        }

        return pronome
    }

    const [usuarios, setUsuarios] = useState([])
    const [pesquisa, setPesquisa] = useState("")

    async function buscarTodos() {
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        setUsuarios(data.users)
    }

    async function buscarNome(nome) {
        const response = await fetch(`https://dummyjson.com/users/search?q=${nome}`)
        const data = await response.json()
        console.log(data)
        setUsuarios(data.users)
    }

    function mostrarInformacoes(usuario) {
        alert("Telefone" + usuario.phone + "\n" + "Email: " + usuario.email + "\n" + "Mora em: " + usuario.address.city)
    }

    useEffect(() => { 
        buscarTodos()
    }, [])

    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados da API DummyJSON</p>

            <hr />
            <input onChange={e => setPesquisa(e.target.value)} placeholder="Digite um nome.." />
            <button onClick={() => buscarNome(pesquisa)}>🔍Pesquisar</button>

            <ul>
                {
                    usuarios.length == 0 ?
                        <button onClick={buscarTodos}>Carregar Usuários</button>
                    :
                        usuarios.map(
                            i => <li><img src={`https://api.dicebear.com/10.x/initials/svg?seed=${i.firstName} ${i.lastName}`} width="50" height="50" alt="Avatar" /> {verificarPronome(i)} {i.firstName} tem {i.age} anos <button onClick={() => mostrarInformacoes(i)}>Ver informações</button></li>
                        )
                }
            </ul>

        </div>
    );
}

export default App;

// Shift + Alt + F para formatar documento (indentação)
// let: variável de escopo local
// var: variável de escopo global
// const: variável de escopo local, mas não pode ser reatribuída