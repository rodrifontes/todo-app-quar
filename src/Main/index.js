import { useState } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';

import DeleteConfirmModal from '../components/DeleteConfirmModal';
import NewTaskModal from '../components/NewTaskModal';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  //Função que é chamada quando o usuario solicita a exclusão
  function handleDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  // Função que vai efetivar a exclusão
  function handleDeleteConfirmTask() {
    // Efetivar a exclusão
    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    alert(`Alterar Tarefa ID: ${task.id}`);
  }

  function handleChangeStatusTask(task) {
    alert(`Alterar Status Tarefa ID: ${task.id}`);
  }

  function handleCreateTask() {
    //Criar Tarefa
    setIsNewTaskModalVisible(false);
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

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDeleteConfirmTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

    </Container>
  );
}