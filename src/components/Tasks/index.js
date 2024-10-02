import { Text } from '../Text';

import {
  Task,
  TaskHeader,
  TaskDescription,
  TaskFooter,
  TaskStatus,
  TaskActions,
  TaskIcon
} from './styles';

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import edit from '../../assets/images/edit.png';
import excluir from '../../assets/images/delete.png';
import { TouchableOpacity } from 'react-native';

export default function Tasks() {
  return (
    <Task>
      <TaskHeader>
        <Text size={18} weight="600">Estudar React Native</Text>
      </TaskHeader>

      <TaskDescription>
        <Text opacity={0.5}>Estudar para o Simulado 01</Text>
      </TaskDescription>

      <TaskFooter>
        <TaskStatus onPress={() => alert('Alterando o status da tarefa')}>
          <TaskIcon source={pending} />

          <Text color="#E620AE">Pendente</Text>
        </TaskStatus>

        <TaskActions>
          <TouchableOpacity onPress={() => alert('Alterando Tarefa')}>
            <TaskIcon source={edit} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('Excluindo Tarefa')}>
            <TaskIcon source={excluir} />
          </TouchableOpacity>
        </TaskActions>
      </TaskFooter>
    </Task>
  );
}