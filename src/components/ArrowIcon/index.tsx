import { ViewProps } from 'react-native'
import {Icon, Container} from './styles'
import { IconProps } from 'phosphor-react-native'



interface Props extends IconProps {
   type?:boolean
}

export function ArrowIcon({...rest}:Props){
   return(
      <Container >
         <Icon {...rest} />
      </Container>
   )
}