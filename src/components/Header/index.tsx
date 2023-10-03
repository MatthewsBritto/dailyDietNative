import LogoImg from '@assets/Logo.png'
import { Container, Avatar, Logo, BackButton, Icon, Title, TitleContainer, ContainerLogo} from './styles'
import { ReactElement, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'



type PropsHeader =  {
   showButton?: boolean
   text?: string
   color?:string
}
 
export function Header( { showButton, color, text ,...rest }: PropsHeader ) {

   const [  title, setTitle ] = useState<string>('')

   const { goBack } = useNavigation()
  
   return (
   <>
      { showButton ? 
         <Container text={text ? true : false} {...rest}>
            <BackButton onPress={goBack} >
                <Icon color={color} /> 
            </BackButton>
            <TitleContainer>
               <Title>
                  {text ? text : null}
               </Title>
            </TitleContainer>
         </Container> 
         : 
         <ContainerLogo>
            <Logo source={LogoImg} />
            <Avatar /> 
         </ContainerLogo>
      }   
   </>
   )      
}