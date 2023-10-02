import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonProps = {
   dark?:boolean
}

export type StatusIconProps = {
   type?: 'INSIDE' | 'OUTSIDE'
}

type SwitchButtonProps = {
   active: boolean;
   colorProps: {
      borderColor: string;
      backgroundColor: string;
   }
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
   width:100%;
   padding:16px 24px;
   background-color: ${({theme, dark}) => dark ? 
      theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7}; 
   
   flex-direction:row;
   align-items:center;
   justify-content:center;
   gap:8px;
   border-radius:8px;
`
export const Title = styled.Text<ButtonProps>`
   ${({theme,dark}) => css`
      
      color:${ dark ?theme.COLORS.WHITE : theme.COLORS.GRAY_1};
      font-size:${theme.FONT_SIZE.SM}px;
      font-family:${theme.FONT_FAMILY.REGULAR};
   `}
   
`

export const SwitchButton = styled(TouchableOpacity)<SwitchButtonProps>`
   width:100%;
   padding:16px;
   align-items: center;
   justify-content:center;
   flex-direction:row;
   gap: 8px;
   border-radius:8px;

   background-color: ${({theme, active, colorProps}) =>  active ?
             colorProps.backgroundColor : theme.COLORS.GRAY_6} ;
   
   border-color:${({theme, active, colorProps}) =>  active ?
            colorProps.borderColor : theme.COLORS.GRAY_6} ;
   border-width: 1px;
`
export const StatusIcon = styled.View<StatusIconProps>`
   width:8px;
   height:8px;
   border-radius: 50px;
   background-color: ${({theme, type}) => type ==='INSIDE' ?
    theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK };
`
