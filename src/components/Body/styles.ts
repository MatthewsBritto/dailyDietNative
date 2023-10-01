import styled, {css} from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px 24px;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  background-color:${({theme}) => theme.COLORS.GRAY_7};
  position:relative;
  top:-20px;
`
