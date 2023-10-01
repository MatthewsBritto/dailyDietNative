import {Container, Input, Title} from './style'

type InputFormProps = {
   title: string
   height?: number
   input?:boolean
}

export function InputForm({ title, height, input = true}: InputFormProps){
   return (
      <Container >
         <Title>
            {title}
         </Title>
   
         { input ? <Input style={{height:height}} />  : null  }
      </Container>
   )
}