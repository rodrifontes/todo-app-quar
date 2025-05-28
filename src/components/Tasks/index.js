import { FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import {
  Task,
  TaskHeader,
  TaskDescription,
  TaskFooter,
  TaskIcon,
  TaskStatus,
  TaskActions
} from './styles';

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import edit from '../../assets/images/edit.png';
import excluir from '../../assets/images/delete.png';

export default function Tasks({
  tasks,
  onDeleteTask,
  onEditTask,
  onChangeStatusTask
}) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({ item: task }) => (
        <Task>
          <TaskHeader>
            <Text weight="600" size={18}>
              {task.title}
            </Text>
          </TaskHeader>
          <TaskDescription>
            <Text opacity={0.5}>
              {task.description}
            </Text>
          </TaskDescription>
          <TaskFooter>
            <TaskStatus onPress={() => onChangeStatusTask(task)}>
              <TaskIcon source={task.done ? done : pending} />
              <Text color={task.done ? '#2192d8' : '#e620ae'}>{task.done ? 'Feita' : 'Pendente'}</Text>
            </TaskStatus>

            <TaskActions>
              <TouchableOpacity onPress={() => onEditTask(task)}>
                <TaskIcon source={edit} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
                <TaskIcon source={excluir} />
              </TouchableOpacity>
            </TaskActions>
          </TaskFooter>
        </Task>
      )}
    />
  );
}