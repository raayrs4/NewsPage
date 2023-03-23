// import { Link } from "react-router-dom"

import { Container, Logo } from "./styles"
import { Button } from "../Button"
import { Navbar } from "../Navbar"

export function Header() {
  return (
    <Container>
      <Logo>
        <img 
          src="https://i.imgur.com/6MQ9bME.png" 
          alt="logo do portal de noticias" 
        />

        <div>
          <span>Bem-vindo</span>
        </div>
      </Logo>

      <Navbar>
        <a href="#">Brasil</a>
        <a href="#">Alagoas</a>
        <a href="#">Política</a>
        <a href="#">Maceió</a>
        
      </Navbar>

      <Button title="Login">
      </Button>
    </Container>
  )
}