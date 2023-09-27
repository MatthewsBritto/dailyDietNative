import styled, { css } from "styled-components/native";

export const Container = styled.View`
   width:100%;
   padding:0 24px;
   background-color: ${({theme}) => theme.COLORS.GRAY_5};
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