 import styled, {css} from "styled-components/native";
 import { ArrowUpRight, IconProps } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

type Props = {
   percent: number
}

export const Container = styled(TouchableOpacity)<Props>`
   ${({theme, percent  }) => css`
      background-color: 
         ${ percent >= 50 ? theme.COLORS.GREEN_LIGHT :  theme.COLORS.RED_LIGTH } 
   `}
   width:100%;
   padding:20px 16px;
   align-items:center;
   border-radius: 8px;
   margin-bottom:35px;
`
export const PercentText = styled.Text`
   ${({theme}) => css `
      font-size: ${theme.FONT_SIZE.XXL}px;
      color: ${theme.COLORS.GRAY_1};
      font-family:${theme.FONT_FAMILY.BOLD};
   `}
   padding-bottom:2px;
`
export const SubTitle = styled.Text`
   ${({theme}) => css `
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_2};
      font-family:${theme.FONT_FAMILY.REGULAR};
   `}
`


