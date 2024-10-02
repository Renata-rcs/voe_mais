"use client";

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function Page() {

  const [passageiros, setPassageiros] = useState([])

  useEffect(()=>{
    setPassageiros(JSON.parse(localStorage.getItem("passageiros")) || [])
  }, [])
 
  
  function excluir(id) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Essa ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Não, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        const dados = passageiros.filter((item) => item.id !== id);
        localStorage.setItem("passageiros", JSON.stringify(dados));
        setPassageiros(dados);
        Swal.fire("Excluído!", "Registro foi excluído.", "success");
      }
    });
  }

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
          {passageiros.map((item, i) => (
            <tr key={item.id}>
               <td>
               <Link href={`/passageiros/edit/${item.id}`}>
                <FaEdit title="Editar"className="text-primary" />
                </Link>
                <MdDelete 
                  title="Excluir"
                  className="text-danger" 
                  onClick={()=> excluir(item.id)}  
                />
              </td>
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
      <Link href="http://localhost:3000" className="btn btn-danger ms-2">
        <FaArrowLeft /> Home
      </Link>
    </Pagina>
  );
}

