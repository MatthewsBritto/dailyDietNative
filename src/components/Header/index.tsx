import LogoImg from '@assets/Logo.png'
import { Container, Avatar, Logo, BackButton, Icon, Title, TitleContainer } from './styles'
import { useState } from 'react'

type Props ={
   showButton?: boolean
}
 
export function Header( { showButton }: Props ){

   const [  title, setTitle ] = useState<string>('')


   return (
      
      <Container>
         {
            showButton ? 

               <>
                     <BackButton>
                        <Icon />
                     </BackButton>
                  <TitleContainer>
                     <Title>
                        {title ? title : null}
                     </Title>
                  </TitleContainer>

               </> 
                  : 
               <>
                  <Logo source={LogoImg} />
                  <Avatar /> 
               </>
         }
      </Container> 
      
   )
}