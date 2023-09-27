import styled, { css } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
   width:100%;
   flex-direction: row;
   justify-content:space-between;
   padding:24px 0;
   align-items:center;
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
   width:100%;
   position:absolute;
`

export const Title = styled.Text`
   ${({theme}) => css`
      color: ${theme.COLORS.GRAY_1};
      font-family:${theme.FONT_FAMILY.BOLD};
      font-size:${theme.FONT_SIZE.LG}px;
   `}
  
`
 
export const TitleContainer = styled.View`
   flex:1;
   align-items: center;

`
export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
   size: 30,
   color: theme.COLORS.GRAY_1
 }))``



