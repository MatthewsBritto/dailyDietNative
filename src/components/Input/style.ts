import styled, {css} from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  gap:4px; 
`

export const Title = styled.Text`
  ${({theme}) => css `
      font-family:${theme.FONT_FAMILY.BOLD};
      font-size:${theme.FONT_SIZE.SM}px;
      color:${theme.COLORS.GRAY_2};
   `}
   font-weight:700; 
`
export const Input = styled.TextInput`
   width: 100%;
   padding:14px;
   border-radius:6px;
   border:1px solid ${props => props.theme.COLORS.GRAY_5};
`