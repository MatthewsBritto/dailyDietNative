import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonProps = {
   dark?:boolean
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
   width:100%;
   padding:16px 24px;
   background-color: ${({theme, dark}) => dark ? 
      theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7}; 
   
   align-items:center;
   border-radius:8px;
`
export const Title = styled.Text<ButtonProps>`
   ${({theme,dark}) => css`
      
      color:${ dark ?theme.COLORS.WHITE : theme.COLORS.GRAY_1};
      font-size:${theme.FONT_SIZE.SM}px;
      font-family:${theme.FONT_FAMILY.REGULAR};
   `}

`