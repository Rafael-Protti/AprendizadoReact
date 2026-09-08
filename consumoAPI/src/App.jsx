import { useState } from "react";

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

    async function buscarTodos() {
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        setUsuarios(data.users)
    }

    function mostrarInformacoes(usuario) {
        alert("Telefone" + usuario.phone + "\n" + "Email: " + usuario.email + "\n" + "Mora em: " + usuario.address.city)
    }

    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados da API DummyJSON</p>

            <ul>
                {
                    usuarios.length == 0 ?
                        <button onClick={buscarTodos}>Carregar Usuários</button>
                    :
                        usuarios.map(
                            i => <li><img src={`https://ui-avatars.com/api/?name=${i.firstName}+${i.lastName}&background=random&size=128`} width="50" height="50" alt="Avatar" /> {verificarPronome(i)} {i.firstName} tem {i.age} anos <button onClick={() => mostrarInformacoes(i)}>Ver informações</button></li>
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