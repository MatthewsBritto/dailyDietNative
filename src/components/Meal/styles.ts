import styled, {css} from "styled-components/native";

export type StatusProps = {
   type: "IN" | "OUT"
}

export const Container = styled.TouchableOpacity`
   width:100%;
   flex-direction: row;
   padding: 14px 12px;
   gap: 12px;
   border: 1px solid ${({theme}) =>  theme.COLORS.GRAY_5};
   border-radius:6px;
   align-items:center;
   margin-bottom: 10px;
`

export const Title = styled.Text`
   ${({ theme }) => css `
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_2};
   `}
   flex:1;
   text-transform:capitalize;
   
   
`

export const Hour = styled.Text`
    ${({ theme }) => css `
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM1}px;
      color: ${theme.COLORS.GRAY_1};
   `}
   padding-right:12px;
   borderRightWidth:.2px;
`
export const Status = styled.View<StatusProps>`
   width:14px;
   height: 14px;
   border-radius:50px;
   background-color: ${({theme,type}) => type === "IN" ? 
      theme.COLORS.GREEN_MID : theme.COLORS.RED_MID };
`

