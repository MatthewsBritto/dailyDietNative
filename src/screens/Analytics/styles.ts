import styled, { css } from "styled-components/native";

type Props = {
   color: string;
}

export const Container = styled.View<Props>`
   flex:1;
   background-color:${props => props.color}; 
` 
export const Title = styled.Text`
   ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family:${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_2};
   `}
   font-weight:bold;
   margin-bottom: 23px;
`
export const CounterSeparator = styled.View`
   width: 100%;
   flex: 1;
   gap:16px;
`
export const CounterContainer = styled.View`
   flex-direction: row;
   width:100%;
   justify-content:space-between;
   gap:16px;
`
export const CounterEachMealType = styled.View`
   width:48%;
`
export const HeaderContainer = styled.View<Props>`
   width: 100%;
   padding-top: 24px;
   background-color: ${props => props.color}
`