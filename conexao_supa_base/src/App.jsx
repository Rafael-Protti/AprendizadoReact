import { supabase } from "./supabase"

function App() {

  async function buscarDados() {
    const { data, error } = await supabase.from('produtos').select()
    console.log(data)
  } 

  return (
    <div>
      <h1>Conexão com Supabase</h1>
      <button onClick={buscarDados}>Buscar Dados</button>
    </div>
  )
}

export default App

/* ffc -> estruturação - requer extenção */
