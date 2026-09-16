import { useState } from 'react'
import { supabase } from './supabase.js'
import { useEffect } from 'react'

function Empresa() {

    const [empresas, alteraEmpresas] = useState([])
    const [funcionarios, alteraFuncionarios] = useState([])

    useEffect(() => {
        buscaTodasEmpresas()
        buscaTodosFuncionarios()
    }, [])

    async function buscaTodasEmpresas(){
        const {data, error} = await supabase.from("empresas").select()
        console.log(data)
        alteraEmpresas(data)
    }

    async function buscaTodosFuncionarios(){ 
        const {data, error} = await supabase.from("funcionarios").select('')
        console.log(data)
        alteraFuncionarios(data)
    }

    return (
        <div>
            <h1>Relacionamento de tabelas</h1>
            <p>Consulta na tabela empresas e funcionários</p>

            <h2>Empresas</h2>

            <table border="true">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>CNPJ</td>
                    <td>Endereço</td>
                </tr>
                {empresas.map(i =>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.nome}</td>
                        <td>{i.cnpj}</td>
                        <td>{i.endereco}</td>
                    </tr>
                )}
            </table>

            <h2>Funcionários</h2>

            <table border="true">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Nome da Empresa</td>
                    <td>Endereço da Empresa</td>
                    <td>Cargo</td>
                    <td>Contato</td>
                </tr>
                {funcionarios.map(i =>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.nome}</td>
                        <td>{i.id_empresa['nome']}</td>
                        <td>{i.id_empresa['endereco']}</td>
                        <td>{i.cargo}</td>
                        <td>{i.contato}</td>
                    </tr>
                )}
            </table>

        </div>
    );
}

export default Empresa;