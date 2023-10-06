import { useTheme } from 'styled-components/native'
import { 
   Container,CounterEachMealType, Title, CounterContainer, 
   CounterSeparator,HeaderContainer} from './styles'
import { Card } from '@components/Card'
import { Body } from '@components/Body' 
import { Header } from '@components/Header'
import { StatusBar } from 'expo-status-bar'
import { useRoute } from '@react-navigation/native'

export type PercentProps = {
   percent: number;
   inside: number;
   outside: number;
}

export function Analytics (){

   const { COLORS } = useTheme()

   const route = useRoute()

   const { percent, inside, outside } = route.params as PercentProps 

  const changeColors = percent >= 50 ? 
   { background: COLORS.GREEN_LIGHT, color: COLORS.GREEN_DARK } :
   { background: COLORS.RED_LIGTH, color: COLORS.RED_DARK}

   return(
      <Container color={changeColors.background}>
         <StatusBar 
            backgroundColor={changeColors.background}
            translucent
         />
         <HeaderContainer color={changeColors.background}>
            <Header
               showButton
               color={changeColors.color}
            />
            <Card
               title={`${percent}%`}
               subTitle={'das refeições dentro dieta'}
               styled
               percent={percent}
               paddindTop={false}
            /> 
         </HeaderContainer>
         <Body> 
            <>               
               <Title>Estatísticas Gerais</Title>
               <CounterSeparator>
                  <Card
                     title='22'
                     subTitle='melhor sequência de pratos da dieta'
                  />
                  <Card
                     title={`${outside + inside}`}
                     subTitle='refeições registradas'
                  />
                  <CounterContainer>
                     <CounterEachMealType>
                        <Card
                           title={inside.toString()}
                           subTitle='refeições dentro da dieta'
                           styled
                           percent={100}
                        />
                     </CounterEachMealType>
                     <CounterEachMealType>
                        <Card
                           title={outside.toString()}
                           subTitle='refeições fora da dieta'
                           styled
                           percent={10}
                        />
                     </CounterEachMealType>
                  </CounterContainer>
               </CounterSeparator>
            </>
         </Body>
      </Container>
   )
}