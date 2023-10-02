import { Header } from '@components/Header'
import { Container, Date, StatusIcon, StatusType, SubTitle, TextContainer, Title} from './styles'
import { Body } from '@components/Body'
import { Button } from '@components/Button'

export function Review(){
   return (
      <Container>
         <Header showButton text="Refeição"/>
         <Body>
               <>
                  <TextContainer>
                     <Title>
                        X-Tudo
                     </Title>
                     <SubTitle>
                        Xis completo da lancheria do bairro
                     </SubTitle>
                  </TextContainer>

                  <TextContainer>
                     <Date>
                        Data e hora
                     </Date>
                     <SubTitle>
                        12/08/2022 ás 20:00
                     </SubTitle>
                  </TextContainer>

                  <TextContainer>
                     <StatusType>
                        <StatusIcon/>
                        <SubTitle>
                           fora da dieta
                        </SubTitle>
                     </StatusType>
                  </TextContainer>

                  <Button text='Editar refeição' icon='Pencil' />
                  <Button dark={false} text='Excluir refeição' icon='Trash'/>
               </>
         </Body>
      </Container>
   )
}