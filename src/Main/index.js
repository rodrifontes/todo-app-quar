import { useState } from 'react';

import { Container } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import NewTaskModal from '../components/NewTaskModal';

import { tasks } from '../mocks/tasks';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  function handleEdit(task) {
    alert('Alterando Tarefa');
  }

  function handleConfirmDelete(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDelete() {
    //Efetivação da Exclução
    setIsDeleteModalVisible(false);
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
        onDelete={handleConfirmDelete}
        onChangeStatus={handleChangeStatus}
      />

      <AddButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDelete}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
      />
    </Container>
  );
}