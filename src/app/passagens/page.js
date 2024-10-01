"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";





export default function Page() {

    const passagens = JSON.parse(localStorage.getItem("passagens")) || [];
   


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
            <tr key={item.id}>
              <td>
                <FaEdit className="text-primary" />
                <MdDelete className="text-danger" />
              </td>
              <td>{item.voo}</td>
              <td>{item.passageiro}</td>
              <td>{item.assento}</td>
              <td>{item.preco}</td>
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
