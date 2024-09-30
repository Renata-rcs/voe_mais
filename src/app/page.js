'use client'

import Pagina from "@/app/components/Pagina";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
    return (
        <Pagina titulo="Voe Mais">
            <div className="text-center">
                <h1>Bem-vindo a Voe Mais</h1>
                <p>Explore nossos serviços de passagens aéreas e muito mais!</p>
                
                <Link href="/empresas" className="btn btn-primary">
                    Ver Empresas
                </Link>
                <Link href="/voos" className="btn btn-primary ms-2">
                    Ver Voos
                </Link>
                <Link href="/aeroportos" className="btn btn-primary ms-2">
                    Ver Aeroportos
                </Link>
            </div>
        </Pagina>
    );
}
