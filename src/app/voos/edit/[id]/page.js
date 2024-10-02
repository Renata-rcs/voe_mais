"use client";

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack, } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const [voo, setVoo] = useState({
    internacional: false,
    identificador: "",
    dataCheckin: "",
    dataEmbarque: "",
    origem: "",
    destino: "",
    empresa: "",
    preco: "",
  });

  useEffect(() => {
    const voos = JSON.parse(localStorage.getItem("voos")) || [];
    const dados = voos.find((item) => item.id == params.id);
    setVoo(dados);
  }, []);

  function salvar(dados) {
    const voos = JSON.parse(localStorage.getItem("voos")) || [];

    //Gerando Id com a biblioteca do uuid va
    dados.id = v4();

    voos.push(dados);
    localStorage.setItem("voos", JSON.stringify(voos));
    return route.push("/voos");
  }

  return (
    <Pagina titulo="Voo">
      <Formik initialValues={voo} onSubmit={(values) => salvar(values)}>
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="internacional">
              <Form.Label>Internacional</Form.Label>
              <Form.Check
                type="checkbox"
                label="Internacional"
                checked={values.internacional}
                onChange={() =>
                  setFieldValue("internacional", !values.internacional)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="identificador">
              <Form.Label>Identificador</Form.Label>
              <Form.Control
                type="text"
                name="identificador"
                value={values.identificador}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataCheckin">
              <Form.Label>Data Check-in</Form.Label>
              <Form.Control
                type="date"
                name="dataCheckin"
                value={values.dataCheckin}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataEmbarque">
              <Form.Label>Data Embarque</Form.Label>
              <Form.Control
                type="date"
                name="dataEmbarque"
                value={values.dataEmbarque}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="origem">
              <Form.Label>Origem</Form.Label>
              <Form.Control
                type="text"
                name="origem"
                value={values.origem}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="destino">
              <Form.Label>Destino</Form.Label>
              <Form.Control
                type="text"
                name="destino"
                value={values.destino}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="empresa">
              <Form.Label>Empresa</Form.Label>
              <Form.Control
                type="text"
                name="empresa"
                value={values.empresa}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link href="/empresas" className="btn btn-danger ms-2">
              <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
