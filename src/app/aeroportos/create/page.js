
'use client'

import Pagina from "@/app/components/Pagina"
import { Formik } from "formik"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button, Form } from "react-bootstrap"
import { FaArrowLeft, FaCheck } from "react-icons/fa"



export default function Page(){

    const route = useRouter()

    function salvar(dados){
        const aeroportos = JSON.parse(localStorage.getItem("aeroportos")) || []
        aeroportos.push(dados)
        localStorage.setItem('aeroportos' , JSON.stringify(aeroportos))
        return route.push('/aeroportos')
        
    }
    
    return (
        <Pagina titulo="Aeroporto">
            <Formik
                initialValues={{ nome: '', sigla: '', uf: '', cidade: '', pais: '' }}
                onSubmit={(values, { resetForm }) => {
                    salvar(values)
                    resetForm() 
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit
                })=> (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nome" 
                                values={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sigla">
                            <Form.Label>Sigla</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="sigla" 
                                values={values.sigla}
                                onChange={handleChange('sigla')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="uf">
                            <Form.Label>Uf</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="uf" 
                                values={values.uf}
                                onChange={handleChange('uf')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="cidade" 
                                values={values.cidade}
                                onChange={handleChange('cidade')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pais">
                            <Form.Label>Pais</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="pais" 
                                values={values.pais}
                                onChange={handleChange('pais')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck />  Salvar
                            </Button>
                            <Link
                            href="/aeroportos"
                            className="btn btn-danger ms-2"
                            >
                                <FaArrowLeft /> Voltar
                            </Link>

                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )    
}
