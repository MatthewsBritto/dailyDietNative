import { Button } from '@components/Button'
import { Container, SpanText ,SubTitle, Title, Props,FeedBackImg, ButtonContainer } from './styles'
import FailFeedback from '@assets/RedIllustration.png'
import GoodFeedback from '@assets/GreenIllustration.png'

type FeedbackProps = & Props & {}

export function Feedback({ type }: FeedbackProps) {

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

               <FeedBackImg source={FailFeedback} />
               
            </> 
            :
            <>
               <Title type={type}>
                   Continue assim!
               </Title>
               <SubTitle>
                  Você continua <SpanText>dentro da dieta</SpanText>. Muito bem!
               </SubTitle>

               <FeedBackImg source={GoodFeedback } />
            </>
         }
         <ButtonContainer>
            <Button text='Ir para a página inicial' /> 
         </ButtonContainer>
      </Container>

   )
}