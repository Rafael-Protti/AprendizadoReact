import { useState } from 'react'
import { supabase } from './supabase.js'
import { useEffect } from 'react'
import "./Empresa.css"

function Empresa() {

    const [empresas, alteraEmpresas] = useState([])
    const [funcionarios, alteraFuncionarios] = useState([])
    const [exibeEmpresas, alteraExibeEmpresas] = useState(true)
    const [exibeFuncionarios, alteraExibeFuncionarios] = useState(false)
    const [exibeModal, alteraExibeModal] = useState(false)


    useEffect(() => {
        buscaTodasEmpresas()
        buscaTodosFuncionarios()
    }, [])

    async function buscaTodasEmpresas() {
        const { data, error } = await supabase.from("empresas").select()
        console.log(data)
        alteraEmpresas(data)
    }

    async function buscaFuncionariosPorEmpresa(idEmpresa) {
        const { data, error } = await supabase.from("funcionarios").select("*,id_empresa(nome, endereco)").eq("id_empresa", idEmpresa)
        console.log(data)
        alteraFuncionarios(data)

        alternaVisualizacao()
    }

    function alternaVisualizacao() {
        alteraExibeEmpresas(!exibeEmpresas)
        alteraExibeFuncionarios(!exibeFuncionarios)
    }

    async function buscaTodosFuncionarios() {
        const { data, error } = await supabase.from("funcionarios").select("*,id_empresa(nome, endereco)")
        console.log(data)
        alteraFuncionarios(data)
    }

    return (
        <div>

            {
                exibeModal == true ?
                    <div>
                        <div className='fundo'></div>
                        <div className="formulario">
                            <h2>Novo Funcionário</h2>
                            <input placeholder='Nome...' />
                            <input placeholder='Contato...' />
                            <select>
                                <option disabled selected>Selecione cargo</option>
                                <option value="1">Funcionário comum</option>
                                <option value="0">Administrador</option>
                            </select>
                            <button>Salvar</button>
                        </div>
                    </div>
                : <></>
            }




            <div className="cabecalho">
                <h1>Relacionamento de tabelas</h1>
                <p>Consulta na tabela empresas e funcionários</p>
                <hr />
            </div>

            {
                exibeEmpresas == true ?

                    <div className="tabela">
                        <h2>Empresas</h2>
                        <table border="true">
                            <tr>
                                <td><strong>ID</strong></td>
                                <td><strong>Nome</strong></td>
                                <td><strong>CNPJ</strong></td>
                                <td><strong>Endereço</strong></td>
                                <td><strong>Ações</strong></td>
                            </tr>
                            {empresas.map(i =>
                                <tr className="dados">
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>{i.cnpj}</td>
                                    <td>{i.endereco}</td>
                                    <td><button onClick={() => buscaFuncionariosPorEmpresa(i.id)}>Ver funcionários</button></td>
                                </tr>
                            )}
                        </table>
                    </div>

                : <></>
            }

            {
                exibeFuncionarios == true ?

                    <div className="tabela">
                        <h2>Funcionários</h2>
                        <table border="true">
                            <tr>
                                <td><strong>ID</strong></td>
                                <td><strong>Nome</strong></td>
                                <td><strong>Nome da Empresa</strong></td>
                                <td><strong>Endereço da Empresa</strong></td>
                                <td><strong>Cargo</strong></td>
                                <td><strong>Contato</strong></td>
                            </tr>
                            {funcionarios.map(i =>
                                <tr className="dados">
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>{i.id_empresa.nome}</td>
                                    <td>{i.id_empresa.endereco}</td>
                                    <td>{i.cargo == 0 ? "Administrador" : "Funcionário comum"}</td>
                                    <td>{i.contato}</td>
                                </tr>
                            )}
                        </table>
                        <br />
                        <button onClick={alteraExibeModal(true)}>Adicionar novo</button>
                        <br /><br />
                        <button onClick={alternaVisualizacao}>Voltar</button>
                    </div>

                : <></>
            }
        </div>
    );
}

export default Empresa;