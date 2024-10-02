"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";





export default function Page() {

  const [passagens, setPassagens] = useState([])

  useEffect(()=>{
    setPassagens(JSON.parse(localStorage.getItem("passagens")) || [])
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
        const dados = passagens.filter((item) => item.id !== id);
        localStorage.setItem("passagens", JSON.stringify(dados));
        setPassagens(dados);
        Swal.fire("Excluído!", "Registro foi excluído.", "success");
      }
    });
  }


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
               <Link href={`/passagens/edit/${item.id}`}>
                <FaEdit title="Editar"className="text-primary" />
                </Link>
                <MdDelete 
                  title="Excluir"
                  className="text-danger" 
                  onClick={()=> excluir(item.id)}  
                />
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

