import { Text } from '../Text';

import { Container, Add } from './styles';

export default function AddTaskButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Add>
        <Text color="#fff" size={40}>+</Text>
      </Add>
    </Container>
  );
}