import { Container, Menu } from "./styles"

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <Container>
      <p>
        <span>SIGA-NOS</span>
      </p>

      <Menu>
        <ul>
          <li>
            <FaFacebook/>
          </li>
          <li>
            <FaInstagram/>
          </li>
          <li>
            <FaYoutube/>
          </li>
        </ul>
      </Menu>
    </Container>
  )
}