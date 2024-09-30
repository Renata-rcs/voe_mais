import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="http://localhost:3000/">Voe Mais</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/empresas">Empresas</Nav.Link>
                        <Nav.Link href="/aeroportos">Aeroportos</Nav.Link>
                        <Nav.Link href="/passageiros">Passageiros</Nav.Link>
                        <Nav.Link href="/passagens">Passagens</Nav.Link>
                        <Nav.Link href="/voos">voos</Nav.Link>
                        
                        {/*                        
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/filmes">
                               Formularios
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/filmes">
                               Populares
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        */}
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    )
}
