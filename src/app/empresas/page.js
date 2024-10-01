"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaPlusCircle } from "react-icons/fa";
import { Image, Table } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Page() {

  const [empresas, setEmpresas] = useState([])

  useEffect(()=>{
    setEmpresas(JSON.parse(localStorage.getItem("empresas")) || [])
  }, [])

  

  function excluir(id){
    if(confirm("Deseja realmente excluir o registro?")){
      const dados =  empresas.filter(item=>item.id != id)
      localStorage.setItem('empresas', JSON.stringify(dados))
      setEmpresas(dados)
    }

  }
  
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
            <tr key={item.id}>
              <td>
              {item.id}
                <Link href={`/empresas/edit/${item.id}`}>
                <FaEdit title="Editar"className="text-primary" />
                </Link>
                <MdDelete 
                  title="Excluir"
                  className="text-danger" 
                  onClick={()=> excluir(item.id)}  
                />
              </td>
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
