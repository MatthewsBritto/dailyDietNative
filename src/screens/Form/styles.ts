import styled from 'styled-components/native'

type Props = {
   color?: string
}

export const Container = styled.View`
   flex: 1;
   justify-content:space-between;
`
export const SeparatorContainer = styled.View`
   width: 100%;
`
export const DateHourContainer = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;   
`
export const DateContainer = styled.View`
   width:48%;
`
export const HourContainer = styled.View`
   width:48%;
`
export const HeaderContainer = styled.View<Props>`
   width:100%;
   background-color:${props => props.color};
   padding-bottom:24px;
`
export const FormContainer = styled.View` 
   width:100%;
   gap:24px;
` 