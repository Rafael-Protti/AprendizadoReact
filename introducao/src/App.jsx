import { useState } from "react";

function App() {

  let nome = "Protttttttttttti"
  let sobrenome = "Rafael"
  let nome_completo = nome + " " + sobrenome
  const [cliques, setCliques] = useState(0) //useState

  function contarClique(){
    setCliques(cliques + 1)
  }

  return (
    <div>
      <h1>Olá Mundo</h1>
      <p>Estou aprendendo React!!!!!! :P</p>
      <hr/>
      <p>Meu nome é {nome_completo}</p>
      <hr/>

      <p>Você clicou {cliques} vezes</p>
      <button onClick={contarClique}>Clique aqui</button>

    </div>
  )
}

export default App
