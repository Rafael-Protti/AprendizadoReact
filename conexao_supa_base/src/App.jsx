import { useState } from "react"
import { supabase } from "./supabase"
import { useEffect } from "react"

function App() {

  const [produtos, alteraProdutos] = useState([])

  const [nome, alteraNome] = useState('')
  const [preco, alteraPreco] = useState('')
  const [descricao, alteraDescricao] = useState('')
  const [tamanho, alteraTamanho] = useState('')

  async function buscaTodos() {
    const { data, error } = await supabase.from('produtos').select().order('id', { ascending: false })
    console.log(data)
    alteraProdutos(data)
  } 

  async function inserir() {

    const obj = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      tamanho: tamanho
    }

    const { data, error } = await supabase.from('produtos').insert(obj)

    alert("Produto cadastrado com sucesso!")

    document.location.reload() //Não é a melhor forma de atualizar a tela, mas é a mais simples. A melhor forma seria atualizar o estado do array de produtos.

  }

  useEffect(() => {
    buscaTodos()
  }, [])

  return (
    <div>
      <h1>Conexão com Supabase</h1>

      <input onChange={e => alteraNome(e.target.value)} placeholder="Nome do produto..."></input>
      <br/>
      <br/>
      <input onChange={e => alteraPreco(e.target.value)} placeholder="Preço..."></input>
      <br/>
      <br/>
      <input onChange={e => alteraTamanho(e.target.value)} placeholder="Tamanho..."></input>
      <br/>
      <br/>
      <input onChange={e => alteraDescricao(e.target.value)} placeholder="Descrição.."></input>
      <br/>
      <br/>
      <button onClick={inserir}>Salvar</button>
      

      { produtos.map( i => <p>{i.nome} - R$ {i.preco}</p>) }

    </div>
  )
}

export default App

/* ffc -> estruturação - requer extenção */
// Não reutilizar um id que foi apagado