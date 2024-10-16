import { Container } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

import { tasks } from '../mocks/tasks';

export default function Main() {
  function handleEdit(task) {
    alert('Alterando Tarefa');
  }

  function handleDelete(task) {
    alert('Excluindo Tarefa');
  }

  function handleChangeStatus(task) {
    alert('Alterando Status da Tarefa');
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onChangeStatus={handleChangeStatus}
      />

      <AddButton onPress={() => alert('Add Tarefa')} />

      <DeleteConfirmModal visible={true} />
    </Container>
  );
}