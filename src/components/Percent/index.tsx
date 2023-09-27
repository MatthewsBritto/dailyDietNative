import { TouchableOpacityProps } from 'react-native';
import { Container, PercentText, SubTitle} from './styles'
import { ArrowIcon } from '@components/ArrowIcon';

type Props = TouchableOpacityProps & {
   percent:number,
}

export function Percent({ percent , ...rest }:Props){


   return(
      <Container percent={percent}>
         <ArrowIcon type={percent > 50} />
         <PercentText>
            {percent} %
         </PercentText>
         <SubTitle>
            das refeições dentro da dieta
         </SubTitle>
      </Container>
   )
}