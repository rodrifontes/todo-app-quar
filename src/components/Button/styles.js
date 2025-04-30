import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ primary }) => primary ? '#fa824c' : '#fff'};
  border-radius: 12px;
  padding: 14px 24px;
  border: 1px solid #fa824c;
  align-items: center;
  justify-content: center;
`;