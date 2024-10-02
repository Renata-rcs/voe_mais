'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from 'uuid';

export default function Page({params}) {

    const route = useRouter()

    const [passageiro, setPassageiro] = useState({ nomeCompleto: '', tipoDocumento: '', documento: '', email: '', telefone: '', dataNascimento:'' })

useEffect(()=>{

    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []
    const dados = passageiros.find(item => item.id == params.id)
    setPassageiro(dados)



}, [])

    function salvar(dados){
                  
        const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []
        
        //Gerando Id com a biblioteca do uuid va
        dados.id = v4()

       passageiros.push(dados)
        localStorage.setItem('passageiros', JSON.stringify(passageiros))
        return route.push('/passageiros')
    }

    return (
        <Pagina titulo="Passageiro">

            <Formik
                initialValues={passageiro}
                onSubmit={values=>salvar(values)}
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
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/empresas"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}