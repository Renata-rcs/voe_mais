"use client";

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";
import VoosValidator from "@/validators/VoosValidator";
import { mask } from "remask";

export default function Page({ params }) {
  const route = useRouter();

  const voos = JSON.parse(localStorage.getItem("voos")) || [];
  const dados = voos.find((item) => item.id == params.id);

  const voo = dados || {
    internacional: false,
    identificador: "",
    dataCheckin: "",
    dataEmbarque: "",
    origem: "",
    destino: "",
    empresa: "",
    preco: "",
  };

  const [empresas, setEmpresas] = useState([]);
  const [aeroportos, setAeroportos] = useState([]);
  

  useEffect(() => {
    setEmpresas(JSON.parse(localStorage.getItem("empresas")) || []);
    setAeroportos(JSON.parse(localStorage.getItem("aeroportos")) || []);
    
  }, []);

  function salvar(dados) {
    if (voo.id) {
      Object.assign(voo, dados);
    } else {
      dados.id = v4();
      voos.push(dados);
    }
    localStorage.setItem("voos", JSON.stringify(voos));
    return route.push("/voos");
  }

  return (
    <Pagina titulo="Voo">
      <Formik initialValues={voo}
      validationSchema={VoosValidator}   
      onSubmit={(values) => salvar(values)}>
        {({ 
            values, 
            handleChange, 
            handleSubmit, 
            setFieldValue,
            errors,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="internacional">
                <Form.Label>Internacional</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={values.internacional}
                  onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="identificador">
                <Form.Label>Identificador</Form.Label>
                <Form.Control
                  type="text"
                  name="identificador"
                  value={values.identificador}
                  onChange={handleChange}
                  isInvalid={errors.identificador}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.identificador}
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="dataCheckin">
                <Form.Label>Data Check-in</Form.Label>
                <Form.Control
                  type="date"
                  name="dataCheckin"
                  value={values.dataCheckin}
                  onChange={(value) => {setFieldValue('dataCheckin', mask(value.target.value, '99/99/9999'))}}
                  isInvalid={errors.dataCheckin}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dataCheckin}
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="dataEmbarque">
                <Form.Label>Data Embarque</Form.Label>
                <Form.Control
                  type="date"
                  name="dataEmbarque"
                  value={values.dataEmbarque}
                  onChange={(value) => {setFieldValue('dataEmbarque', mask(value.target.value, '99/99/9999'))}}
                  isInvalid={errors.dataEmbarque}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dataEmbarque}
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="origem">
              <Form.Label>Origem</Form.Label>
                  <Form.Select className="mb-3"
                    name="origem"
                    value={values.origem}
                    onChange={handleChange("origem")}
                    isInvalid={errors.origem}
                    >
                    <option value=''>Selecione</option>
                    {aeroportos.map(item=>(
                       <option key={item.nome} value={item.nome}>{item.sigla}-{item.nome}</option>
                    ))}
                  </Form.Select>
                     <Form.Control.Feedback type="invalid">
                      {errors.origem}
                    </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="destino">
                <Form.Label>Destino</Form.Label>
                  <Form.Select className="mb-3"
                    name="destino"
                    value={values.destino}
                    onChange={handleChange("destino")}
                    isInvalid={errors.destino}
                    >
                    <option value=''>Selecione</option>
                    {aeroportos.map(item=>(
                       <option key={item.nome} value={item.nome}>{item.sigla}-{item.nome}</option>
                    ))}
                    
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.destino}
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="empresa">
                <Form.Label>Empresa</Form.Label>
                  <Form.Select className="mb-3"
                    name="empresa"
                    value={values.empresa}
                    onChange={handleChange("empresa")}
                    isInvalid={errors.empresa}
                    >
                    <option value=''>Selecione</option>
                    {empresas.map(item=>(
                       <option key={item.nome} value={item.nome}>{item.nome}</option>
                    ))}
                    
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.empresa}
                  </Form.Control.Feedback>
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="preco">
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  type="Number"
                  name="preco"
                  value={values.preco}
                  onChange={handleChange("preco")}
                  isInvalid={errors.preco}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                    {errors.preco}
              </Form.Control.Feedback>
              <div className="text-center">
                <Button onClick={handleSubmit} variant="success">
                  <FaCheck /> Salvar
                </Button>
                <Link href="/voos" className="btn btn-danger ms-2">
                  <MdOutlineArrowBack /> Voltar
                </Link>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Pagina>
  );
}
