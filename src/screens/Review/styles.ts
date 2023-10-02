import styled, { css } from "styled-components/native";

type Props = {
   color: string
}

export const Container = styled.View<Props>`
   flex:1;
   background-color:${props => props.color}
`
export const TextContainer = styled.View`
   width:100%;
   gap:8px;
   margin-bottom:24px;

`
export const HeaderContainer = styled.View<Props>`
   width:100%;
   background-color:${props => props.color}
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
   flex-direction:row;
   padding: 8px 16px;
   gap:8px;
   align-items:center;
   background-color:${({theme}) => theme.COLORS.GRAY_6};
   border-radius: 1000px;
   width:150px;
`

export const StatusIcon = styled.View<Props>`
   width:8px;
   height:8px;
   background-color:${props => props.color};
   border-radius:50px;
`

export const ButtonContainer = styled.View`
   width:100%;
   flex:1;
   gap:12px;
`

export const SeparatorContainer = styled.View`
   width:100%;
   flex:4;
`