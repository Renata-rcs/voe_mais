
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
        const passagens = JSON.parse(localStorage.getItem("passagens")) || []
        passagens.push(dados)
        localStorage.setItem('passagens' , JSON.stringify(passagens))
        return route.push('/passagens')
        
    }
    
    return (
        <Pagina titulo="Passagens">
            <Formik
                initialValues={{ voo: '', passageiro: '', assento: '', preco: ''}}
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
