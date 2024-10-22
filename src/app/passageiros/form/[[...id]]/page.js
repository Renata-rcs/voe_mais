"use client";

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";
import PassageirosValidator from "@/validators/PassageirosValidator";
import { mask } from "remask";
import { use, useEffect } from "react";

export default function Page({ params }) {
  const route = useRouter();

  const passageiros = JSON.parse(localStorage.getItem("passageiros")) || [];
  const dados = passageiros.find((item) => item.id == params.id);

  const passageiro = dados || {
    nomeCompleto: "",
    tipoDocumento: "",
    documento: "",
    email: "",
    telefone: "",
    dataNascimento: "",
  };

  function salvar(dados) {
    if (passageiro.id) {
      Object.assign(passageiro, dados);
    } else {
      dados.id = v4();
      passageiros.push(dados);
    }
    localStorage.setItem("passageiros", JSON.stringify(passageiros));
    return route.push("/passageiros");
  }

    
  return (
    <Pagina titulo="Passageiro">
      <Formik initialValues={passageiro} 
      validationSchema={PassageirosValidator}
      onSubmit={(values) => salvar(values)}>
        {({ 
            values, 
            handleChange, 
            handleSubmit,
            errors,
            setFieldValue
           }) =>{

            useEffect(() => {
             switch (values.tipoDocumento) {
                case "CPF":
                  values.documento = mask(values.documento, "999.999.999-99");
                  break;
        
                case "CNPJ":
                    values.documento = mask(values.documento, "99.999.999/9999-99");
                  break;    
                  
                case "Passaporte":
                   values.documento = mask(values.documento, "999.999.999-99");
                  break;
                  
                case "RG":
                     values.documento = mask(values.documento, "9.999.999");
                  break;

              }
              
            }, [values.documento]);

            useEffect(() => {
              values.documento = ''
            }, [values.tipoDocumento]);


              return (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nomeCompleto">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomeCompleto"
                      value={values.nomeCompleto}
                      onChange={handleChange}
                      isInvalid={errors.nomeCompleto}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nomeCompleto}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="tipoDocumento">
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Select
                      type="text"
                      name="tipoDocumento"
                      value={values.tipoDocumento}
                      onChange={handleChange('tipoDocumento')}
                      isInvalid={errors.tipoDocumento}
                      >
                      <option value=''>Selecione</option>
                      <option value='CPF'>CPF</option>
                      <option value='CNPJ'>CNPJ</option>
                      <option value='Passaporte'>Passaporte</option>
                      <option value='RG'>RG</option>
                      <option value='Outro'>Outro</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.tipoDocumento}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="documento">
                    <Form.Label>Documento</Form.Label>
                    <Form.Control
                      type="text"
                      name="documento"
                      value={values.documento}
                      onChange={handleChange}
                      isInvalid={errors.documento}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.documento}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      name="telefone"
                      value={values.telefone}
                      onChange={(value)=>{
                       setFieldValue('telefone', mask(value.target.value, '(99) 99999-9999'))
                      }}
                      isInvalid={errors.telefone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.telefone}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dataNascimento">
                    <Form.Label>Data Nascimento</Form.Label>
                    <Form.Control
                      type="date"
                      name="dataNascimento"
                      value={values.dataNascimento}
                      onChange={(value) => {setFieldValue('dataNascimento', mask(value.target.value, '99/99/9999'))}}
                      isInvalid={errors.dataNascimento}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.date}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="text-center">
                    <Button type="submit" variant="success">
                      <FaCheck /> Salvar
                    </Button>
                    <Link href="/passageiros" className="btn btn-danger ms-2">
                      <MdOutlineArrowBack /> Voltar
                    </Link>
                  </div>
                </Form>
              )
           } }
      </Formik>
    </Pagina>
  );
}
