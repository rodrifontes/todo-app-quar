import { useState, useEffect } from 'react';

import { Text } from '../components/Text';

import { Container, TaskEmptyContainer, TaskEmptyImage, CenteredContainer } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';

import DeleteConfirmModal from '../components/DeleteConfirmModal';
import NewTaskModal from '../components/NewTaskModal';
import EditTaskModal from '../components/EditTaskModal';

import task from '../assets/images/task.png';
import { ActivityIndicator } from 'react-native';
import { useTasksDatabase } from '../database/useTasksDatabase';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState(null);
  const [taskIdBeingDelete, setTaskIdBeingDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const tasksDatabase = useTasksDatabase();

  async function getTasks() {
    setIsLoading(true);
    try {
      setTasks(await tasksDatabase.show());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  //Função que é chamada quando o usuario solicita a exclusão
  function handleDeleteTask(id) {
    setTaskIdBeingDelete(id);
    setIsDeleteModalVisible(true);
  }

  // Função que vai efetivar a exclusão
  function handleDeleteConfirmTask() {
    tasksDatabase.remove(taskIdBeingDelete);
    setTaskIdBeingDelete(null);
    getTasks();
    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    setTaskBeingEdit(task);
    setIsEditTaskModalVisible(true);
  }

  function handleChangeStatusTask(task) {
    tasksDatabase.updateStatus(task.id);
    getTasks();
  }

  function handleCreateTask(task) {
    tasksDatabase.create(task);
    getTasks();
    setIsNewTaskModalVisible(false);
  }

  function handleSaveEdit(task) {
    tasksDatabase.update(task);
    getTasks();
    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />
      {!isLoading && (
        <>
          {
            tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onEditTask={handleEditTask}
                onChangeStatusTask={handleChangeStatusTask}
              />
            ) : (
              <TaskEmptyContainer>
                <TaskEmptyImage source={task} />
                <Text weight="600" size={20} opacity={0.8}>Sem Tarefas</Text>
                <Text opacity={0.5}>Não há tarefas a serem visualizadas</Text>
              </TaskEmptyContainer>
            )
          }
        </>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator size={'large'} color="#666" />
        </CenteredContainer>
      )}

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

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEdit}
        task={taskBeingEdit}
      />

    </Container>
  );
}