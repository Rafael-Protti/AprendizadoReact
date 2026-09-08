import { useState } from "react"

function Formulario(){

    let [nome, alteraNome] = useState("")
    let [idade, alteraIdade] = useState("")
    let [cidade, alteraCidade] = useState("")
    let [estado, alteraEstado] = useState("")
    
    function salvar(){

        if(nome.trim().length < 3){
            alert("nome inválido")
            return
        }

        if(idade.trim().length > 3){
            alert("idade inválida")
            return
        }

        if(cidade.trim().length < 3){
            alert("cidade inválida")
            return
        }

        if(estado.trim().length < 3){
            alert("estado inválido")
            return
        }

        alert("Meu nome é " + nome + ", tenho " + idade + " anos" + " e moro em " + cidade + ", " + estado)
        
    }

    return(

        <div>
            <form>
                
            <h1>Formulario</h1>
            <p>Input</p>

            <p>digite um nome: </p>
            <input onChange={e => alteraNome(e.target.value)} required/>

            <br /> <br />
           
            <p>digite sua idade: </p>
            <input onChange={e => alteraIdade(e.target.value)} required/>
            
            <br /><br />
            
            <p>digite onde você mora: </p>
            <input onChange={e => alteraCidade(e.target.value)} required/>
            
            <br /><br />

            <input onChange={e => alteraEstado(e.target.value)} required/>
            
            <br /><br />

            <button onClick={()=> salvar()} >Salvar</button>
            </form>
        </div>

    )
}

export default Formulario