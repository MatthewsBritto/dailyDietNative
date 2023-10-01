
import { ReactElement } from "react";
import { Container,  } from "./styles";

type BodyProps = {
   children?: ReactElement
}

export function Body({children}:BodyProps){
   return (
      <Container >
            {children}
      </Container>
   )
}