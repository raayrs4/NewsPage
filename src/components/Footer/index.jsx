import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

import { Container } from "./styles"
import { Section } from "../Section"

export function Footer() {
  return (
    <Container>
      <div className="ComercialInfos"> 
        <h3>Comercial</h3>
        <p>
        (82) 3333.3333 <br/>
        comercial@newspage.com
        </p>
      </div>
  
      <Section>
        <h3>SIGA-NOS</h3>
        
        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaYoutube/></li>
        </ul>
      </Section>
    </Container>
  )
}