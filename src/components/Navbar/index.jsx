import { Container } from "./styles"

import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">Home</Link>
      </Container>
    </nav>
  )
}