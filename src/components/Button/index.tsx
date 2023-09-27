import { TouchableOpacityProps } from 'react-native';
import { ButtonProps, Container, Title} from './styles';
import { ReactNode } from 'react';


type Props = TouchableOpacityProps & ButtonProps & { 
   children?: ReactNode ;      
   text: string;
}

export function Button({ dark = true, text, ...rest}:Props){

   return(
      <Container  {...rest} dark>
         <Title dark>
            {text}
         </Title>
      </Container>
   )
}