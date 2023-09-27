import LogoImg from '@assets/Logo.png'
import { Container, Avatar, Logo, BackButton, Icon, Title, TitleContainer } from './styles'
import { useState } from 'react'


 
export function Header(  ){

   const [  title, setTitle ] = useState<string|undefined>('Nova refeição')

   return (
      
      <Container>
         {
            title ? 
               <>
                     <BackButton>
                        <Icon />
                     </BackButton>
                  <TitleContainer>
                     <Title>
                        {title}
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