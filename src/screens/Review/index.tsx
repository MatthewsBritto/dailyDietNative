import { Header } from '@components/Header'
import { Container, Date, StatusIcon, StatusType, SubTitle,
    TextContainer, Title,HeaderContainer, ButtonContainer, SeparatorContainer} from './styles'
import { Body } from '@components/Body'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'


type Props = {
   type: "IN" | "OUT"
}

export function Review({ type }:Props){
   const { COLORS } = useTheme()
   const [ colorHeader, setHeaderColor] = useState(type === "IN" ? 
      { background:COLORS.GREEN_LIGHT, color: COLORS.GREEN_DARK } : 
      { background:COLORS.RED_LIGTH, color: COLORS.RED_DARK })

   return (
      <Container color={colorHeader.background}> 
         <StatusBar 
            backgroundColor={colorHeader.background}
            translucent
         />
         <HeaderContainer color={colorHeader.background}>
            <Header showButton text={"Refeição"} />
         </HeaderContainer>
         <Body>
            <>
               <SeparatorContainer>
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
                        <StatusIcon color={colorHeader.color} />
                        <SubTitle>
                           fora da dieta
                        </SubTitle>
                     </StatusType>
                  </TextContainer>

               </SeparatorContainer>
               <ButtonContainer >
                  <Button text='Editar refeição' icon='Pencil' />
                  <Button dark={false} text='Excluir refeição' icon='Trash'/>
               </ButtonContainer>
            </>
         </Body>
      </Container>
   )
}