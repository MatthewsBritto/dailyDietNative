import styled, { css } from "styled-components/native";

export const Container = styled.View`
   width:100%;
   padding:12px 24px;
   flex:1;
`
export const Title = styled.Text`
   ${({theme}) => css`
      font-family:${theme.FONT_FAMILY.REGULAR};
      font-size:${theme.FONT_SIZE.MD}px;
      color:${theme.COLORS.GRAY_1}
   `};
   width:100%;   
   margin-bottom:10px;
`


export const HeaderList = styled.Text`
   ${({ theme }) => css `
      font-size:${theme.FONT_SIZE.LG}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color:${theme.COLORS.GRAY_1};   
   `}
   padding-bottom:10px; 
   margin-top:32px;
`
export const Separator = styled.View`
height:32px;
`