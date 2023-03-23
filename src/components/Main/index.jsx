import { Container } from "./styles"
import { Card } from "../Card"

export function Main() {
  return (
    <Container>
      <Card>
        <img 
          src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" 
          alt="Imagem de celular com notícias"
        />
        <h3>Título 1</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima dolorum praesentium sint reprehenderit.</p> */}
      </Card>

      <Card>
        <img 
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Imagem de jornais"
        />
        <h3>Título 2</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima dolorum praesentium sint reprehenderit.</p> */}
      </Card>
          
      <Card>
        <img 
            src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Imagem de pessoa mexendo em um tablet"
          />
          <h3>Título 3</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima dolorum praesentium sint reprehenderit.</p> */}
      </Card>
      
      <Card>
        <img 
          src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" 
          alt="Imagem de máquina de escrever"
        />
        <h3>Título 4</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima dolorum praesentium sint reprehenderit. </p> */}
      </Card>
  
    </Container>
  )
}