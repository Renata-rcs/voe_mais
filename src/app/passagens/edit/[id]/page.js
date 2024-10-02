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

    const [passagem, setPassagem] = useState({ voo: '', passageiro: '', assento: '', preco: ''})

useEffect(()=>{

    const passagens = JSON.parse(localStorage.getItem('passagens')) || []
    const dados = passagens.find(item => item.id == params.id)
    setPassagem(dados)



}, [])

    function salvar(dados){
                  
        const passagens = JSON.parse(localStorage.getItem('passagens')) || []
        
        //Gerando Id com a biblioteca do uuid va
        dados.id = v4()

        passagens.push(dados)
        localStorage.setItem('passagens', JSON.stringify(passagens))
        return route.push('/passagens')
    }

    return (
        <Pagina titulo="Passagem">

            <Formik
                initialValues={passagem}
                onSubmit={values=>salvar(values)}
            >
                 {({
                    values,
                    handleChange,
                    handleSubmit
                })=> (
                    <Form>
                        <Form.Group className="mb-3" controlId="voo">
                            <Form.Label>Voo</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="voo" 
                                values={values.voo}
                                onChange={handleChange('voo')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passageiro">
                            <Form.Label>Passageiro</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="passageiro" 
                                values={values.passageiro}
                                onChange={handleChange('passageiro')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="assento">
                            <Form.Label>Assento</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="assento" 
                                values={values.assento}
                                onChange={handleChange('assento')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="preco" 
                                values={values.preco}
                                onChange={handleChange('preco')}
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