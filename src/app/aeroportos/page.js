"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const [aeroportos, setAeroportos] = useState([]);

  useEffect(() => {
    setAeroportos(JSON.parse(localStorage.getItem("aeroportos")) || []);
  }, []);

  function excluir(id) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Essa ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Não, cancelar!",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        const dados = aeroportos.filter((item) => item.id !== id);
        localStorage.setItem("aeroportos", JSON.stringify(dados));
        setAeroportos(dados);
        Swal.fire("Excluído!", "Registro foi excluído.", "success");
      }
    });
  }

  return (
    <Pagina titulo="Aeroportos">
      <Link href="/aeroportos/form" className="btn btn-primary mb-3">
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Uf</th>
            <th>Cidade</th>
            <th>Pais</th>
          </tr>
        </thead>
        <tbody>
          {aeroportos.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/aeroportos/form/${item.id}`}>
                  <FaEdit className="text-primary" />
                </Link>
                <MdDelete
                  title="Excluir"
                  className="text-danger"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.sigla}</td>
              <td>{item.uf}</td>
              <td>{item.cidade}</td>
              <td>{item.pais}</td>
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
