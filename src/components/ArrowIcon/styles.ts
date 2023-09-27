import { ArrowUpRight, IconProps } from "phosphor-react-native";
import { css } from "styled-components";

import styled from "styled-components/native";

type iconProps = {
   type?:boolean
}

export const Container = styled.View`
   width:100%;
   align-items:flex-end;
`

export const Icon = styled(ArrowUpRight).attrs<iconProps>(({theme, type}) => ({
   size:24,
   color: type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
 

