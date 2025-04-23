import { Text } from 'react-native';

import { Container } from './styles';

import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';

export default function Main() {
  function handleDeleteTask(task) {
    alert(`Excluir Tarefa ID: ${task.id}`);
  }

  function handleEditTask(task) {
    alert(`Alterar Tarefa ID: ${task.id}`);
  }

  function handleChangeStatusTask(task) {
    alert(`Alterar Status Tarefa ID: ${task.id}`);
  }

  return (
    <Container>
      <Header />
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onChangeStatusTask={handleChangeStatusTask}
      />

      <AddTaskButton onPress={() => alert('Cadastrar Tarefa')} />
    </Container>
  );
}