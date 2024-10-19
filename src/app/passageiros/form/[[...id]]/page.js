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
            errors
           }) =>{
              return (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nomeCompleto">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomeCompleto"
                      value={values.nomeCompleto}
                      onChange={handleChange}
                      isInvalid={errors}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nomeCompleto}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="tipoDocumento">
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Control
                      type="text"
                      name="tipoDocumento"
                      value={values.tipoDocumento}
                      onChange={handleChange}
                      isInvalid={errors}
                      />
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
                      isInvalid={errors}
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
                      isInvalid={errors}
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
                      onChange={handleChange}
                      isInvalid={errors}
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
                      onChange={handleChange}
                      isInvalid={errors}
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
