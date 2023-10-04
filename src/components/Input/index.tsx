import {Container, Input, Title} from './style'

type InputFormProps = {
   title: string
   height?: number
   input?:boolean
}

export function InputForm({ title, height, input = true, ...rest}: InputFormProps){
   return (
      <Container {...rest}>
         <Title>
            {title}
         </Title>
   
         { input ? <Input  style={{height:height}} {...rest} />  : null  }
      </Container>
   )
}