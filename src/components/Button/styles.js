import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ primary, disabled }) => disabled ? '#999' : primary ? '#fa824c' : '#fff'};
  border-radius: 12px;
  padding: 14px 24px;
  border-width: 1px;
  border-color: ${({ disabled }) => disabled ? '#999' : '#fa824c'};
  align-items: center;
  justify-content: center;
`;