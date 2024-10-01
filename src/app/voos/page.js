"use client";

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export default function Page() {
  const voos = JSON.parse(localStorage.getItem("voos")) || [];
 

  return (
    <Pagina titulo="Voos">
      <Link href="/voos/create" className="btn btn-primary mb-3">
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Iternacional</th>
            <th>Identificador</th>
            <th>Data_Checkin</th>
            <th>Data_Embarque</th>
            <th>Origin</th>
            <th>Destino</th>
            <th>Empresa</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {voos.map((item, i) => (
            <tr key={item.id}>
              <td> 
                <FaEdit className="text-primary" />
                <MdDelete className="text-danger" />
              </td>
              <td>{item.iternacional}</td>
              <td>{item.identificador}</td>
              <td>{item.dataCheckin}</td>
              <td>{item.dataEmbarque}</td>
              <td>{item.origin}</td>
              <td>{item.destino}</td>
              <td>{item.empresan}</td>
              <td>{item.preço}</td>
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
