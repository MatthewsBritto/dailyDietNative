import styled, { css } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'

type Props = {
   text?: boolean;
}

export const Container = styled.View<Props>`
   width:100%;
   flex-direction: row;
   align-items:center;
   padding: ${props => props.text ? 20 : 0}px;
   justify-content:space-between;
  
   `
export const ContainerLogo = styled(Container)`
   padding:30px 0;
`

export const Logo = styled.Image`
   height:37px;
   width:82px;
`
export const Avatar = styled.View`
   width:40px;
   height:40px;
   border-radius: 50px;
   border: 2px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
`
export const BackButton = styled.TouchableOpacity`
   position:absolute;
   padding: 0 24px;
   width:100%;
`
export const Title = styled.Text`
   ${({theme}) => css`
      color: ${theme.COLORS.GRAY_1};
      font-family:${theme.FONT_FAMILY.BOLD};
      font-size:${theme.FONT_SIZE.LG}px;
   `}
   
` 
export const TitleContainer = styled.View`
   margin: auto;
`
export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
   size: 24,
   
}))``


