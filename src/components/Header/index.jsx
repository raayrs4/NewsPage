import { Container, Logo } from "./styles"

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
    </Container>
  )
}