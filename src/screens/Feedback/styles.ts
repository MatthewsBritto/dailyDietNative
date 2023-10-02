import styled, {css} from "styled-components/native";

export type Props = {
   type: 'RED' | 'GREEN'
}

export const Container = styled.View`
   flex: 1;
   align-items:center;
   justify-content:center;
   gap: 8px;
   padding:20px;
`

export const Title = styled.Text<Props>`
   ${({theme, type}) => css `
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.XL}px;
      color: ${type === 'GREEN' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
   `
   }

   font-weight:700;
`

export const SubTitle = styled.Text`
   ${({theme}) => css `
      font-family:${theme.FONT_FAMILY.REGULAR};
      font-size:${theme.FONT_SIZE.MD}PX;
      color:${theme.COLORS.GRAY_1};
   `}
   text-align:center;
`

export const SpanText = styled(SubTitle)`
   font-weight:700;
`
export const FeedBackImg = styled.Image`
   /* width:224px; */
   /* height: 288px; */
   margin:32px 0;
`
export const ButtonContainer = styled.View`
   width:60%;
`