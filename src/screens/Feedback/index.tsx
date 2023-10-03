import { Button } from '@components/Button'
import { Container, SpanText ,SubTitle, Title, Props,FeedBackImg, ButtonContainer } from './styles'
import FailFeedback from '@assets/RedIllustration.png'
import GoodFeedback from '@assets/GreenIllustration.png'
import { useNavigation, useRoute } from '@react-navigation/native'

 

export function Feedback() {

   const route = useRoute()
   const { navigate } = useNavigation()

   const { type } = route.params as Props

   return (
      <Container>
      
         {  type === "RED" ?

            <>
               <Title type={type}>
                   Que pena!
               </Title>
               <SubTitle>
                  Você <SpanText>saiu da dieta</SpanText> dessa vez, mas continue
                  se esforçando e não desista!
               </SubTitle>

               <FeedBackImg source={FailFeedback}  resizeMode={'contain'}/>
               
            </> 
            :
            <>
               <Title type={type}>
                   Continue assim!
               </Title>
               <SubTitle>
                  Você continua <SpanText>dentro da dieta</SpanText>. Muito bem!
               </SubTitle>

               <FeedBackImg source={GoodFeedback} resizeMode={'contain'}/>
            </>
         }
         <ButtonContainer>
            <Button text='Ir para a página inicial' onPress={ () => navigate('home')} /> 
         </ButtonContainer>
      </Container>

   )
}