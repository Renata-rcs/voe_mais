"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaPlusCircle } from "react-icons/fa";
import { Image, Table } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  const empresas = JSON.parse(localStorage.getItem("empresas")) || [];
  let numero = 1
  //   let empresas = localStorage.getItem('empresas')
  //   empresas = empresas ? JSON.parse(empresas) : []

  //   let empresas = localStorage.getItem('empresas')
  //   if(empresas){
  //      empresas = JSON.parse(empresas)
  //   } else {
  //   empresas = []
  //   }

  return (
    <Pagina titulo="Empresas">
      <Link href="/empresas/create" className="btn btn-primary mb-3">
        <FaPlusCircle />   Novo 
      </Link>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((item) => (
            <tr key={item.key}>
              <td>{numero++}</td>
              <td>{item.nome}</td>
              <td>
                <a target="_blanck" href={item.site}>
                  <img src={item.logo} width={100}></img>
                </a>
              </td>
             
            </tr>
          ))}
        </tbody>
      </Table>
      <Link href="http://localhost:3000" className="btn btn-danger ms-2">
        <FaArrowLeft /> Home
      </Link>
    </Pagina>
  );
}
