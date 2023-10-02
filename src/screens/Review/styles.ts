import styled, { css } from "styled-components/native";

export const Container = styled.View`
   flex:1
   background-color:red;
`
export const TextContainer = styled.View`
   width:100%;
   gap:8px;
   margin-bottom:24px;
`

export const Title = styled.Text`
   ${({theme}) => css `
      font-family:${theme.FONT_FAMILY.BOLD};
      color:${theme.COLORS.GRAY_1};
    `}
    font-weight:700;
    font-size:20px; 
`
export const SubTitle = styled.Text `
   ${({theme}) => css`
      font-family:${theme.FONT_FAMILY.REGULAR};
      font-size:${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_2};
   `}
`
export const Date = styled(Title)`
   font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`
export const StatusType = styled.View`
   padding: 8px 16px;
   gap:8px;
   align-items:center;
   background-color:${({theme}) => theme.COLORS.GRAY_6};
   border-radius: 1000px;
`

export const StatusIcon = styled.View`
   width:8px;
   height:8px;
`