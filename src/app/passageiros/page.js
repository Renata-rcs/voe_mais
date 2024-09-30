"use client";

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

export default function Page() {
  const passageiros = JSON.parse(localStorage.getItem("passageiros")) || [];
  let numero = 1;

  return (
    <Pagina titulo="Passageiros">
      <Link href="/passageiros/create" className="btn btn-primary mb-3">
      <FaPlusCircle />   Novo 
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Tipo Documento</th>
            <th>Documento</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Data Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {passageiros.map((item) => (
            <tr key={item.key}>
              <td>{numero++}</td>
              <td>{item.nome}</td>
              <td>{item.tipoDocumento}</td>
              <td>{item.documento}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.dataNascimento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
