"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";




export default function Page() {

    const passagens = JSON.parse(localStorage.getItem("passagens")) || [];
    let numero = 1


  return (
    <Pagina titulo="Passagens">
      <Link href="/passagens/create" className="btn btn-primary mb-3">
        <FaPlusCircle />   Novo 
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Voo</th>
            <th>Passageiro</th>
            <th>Assento</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {passagens.map((item) => (
            <tr key={item.key}>
              <td>{numero++}</td>
              <td>{item.voo}</td>
              <td>{item.passageiro}</td>
              <td>{item.assento}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
