 import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";

type PropsContainer = {
   percent: number
   
}

export type ContainerProps = {
   paddindTop?:boolean
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
   width:100%;
   padding: ${props => props.paddindTop ? 24 : 0}px 24px 24px 24px;
   align-items:center;
   border-radius: 8px;
   margin-bottom:12px;
`

export const ContainerWithColor = styled(Container)<PropsContainer>`
 background-color:${({theme,percent}) => 
   percent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGTH}
`

export const ContainerWithoutColor = styled(Container)`
   background-color: ${({theme}) => theme.COLORS.GRAY_6}
`

export const Title = styled.Text`
   ${({theme}) => css `
      font-size: ${theme.FONT_SIZE.XXL}px;
      color: ${theme.COLORS.GRAY_1};
      font-family:${theme.FONT_FAMILY.BOLD};
   `}
   padding-bottom:2px;
   font-weight:bold;
`
export const SubTitle = styled.Text`
   ${({theme}) => css `
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_2};
      font-family:${theme.FONT_FAMILY.REGULAR};
   `}
   text-align:center;
`


