
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
        const passageiros = JSON.parse(localStorage.getItem("passageiros")) || []
        passageiros.push(dados)
        localStorage.setItem('passageiros' , JSON.stringify(passageiros))
        return route.push('/passageiros')
        
    }
    
    return (
        <Pagina titulo="Passageiro">
            <Formik
                initialValues={{ nomeCompleto: '', tipoDocumento: '', documento: '', email: '', telefone: '', dataNascimento:'' }}
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
                        <Form.Group className="mb-3" controlId="nomeCompleto">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nomeCompleto" 
                                values={values.nomeCompleto}
                                onChange={handleChange('nomeCompleto')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tipoDocumento">
                            <Form.Label>Tipo Documento</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="tipoDocumento" 
                                values={values.tipoDocumento}
                                onChange={handleChange('tipoDocumento')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="documento">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="documento" 
                                values={values.documento}
                                onChange={handleChange('documento')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="email" 
                                values={values.email}
                                onChange={handleChange('email')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="telefone" 
                                values={values.telefone}
                                onChange={handleChange('telefone')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="dataNascimento">
                            <Form.Label>Data Nascimento</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="dataNascimento" 
                                values={values.dataNascimento}
                                onChange={handleChange('dataNascimento')}
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
