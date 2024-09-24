'use client'

import Link from "next/link"
import Pagina from "../components/Pagina"
import { FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";



export default function Page() {
    return (
        <Pagina titulo='Empresas'>

            <Link
                href="/empresas/create"
                className="btn btn-primary mb-3"

            
            >
                <FaPlusCircle />Novo

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
                    <tr>
                        <td>1</td>
                        <td>Gol</td>
                        <td></td> 
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Latan</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Azul</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Pagina>

    )

}