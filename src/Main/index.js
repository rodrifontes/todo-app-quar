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

import { api } from '../utils/api';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState(null);
  const [taskIdBeingDelete, setTaskIdBeingDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    //getTasks();
    api.get('/tasks')
      .then((response) => {
        setTasks(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Função que é chamada quando o usuario solicita a exclusão
  function handleDeleteTask(id) {
    setTaskIdBeingDelete(id);
    setIsDeleteModalVisible(true);
  }

  // Função que vai efetivar a exclusão
  function handleDeleteConfirmTask() {
    //tasksDatabase.remove(taskIdBeingDelete);
    //getTasks();
    api.delete(`/tasks/${taskIdBeingDelete}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskIdBeingDelete));
      });

    setTaskIdBeingDelete(null);
    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    setTaskBeingEdit(task);
    setIsEditTaskModalVisible(true);
  }

  async function handleChangeStatusTask(task) {
    //tasksDatabase.updateStatus(task.id);
    //getTasks();

    const taskChange = (await api.put(`/tasks/status/${task.id}`, task)).data;

    setTasks((prevState) => {
      const itemIndex = prevState.findIndex(taskItem => taskItem.id === task.id);
      const newTasks = [...prevState];
      newTasks[itemIndex] = taskChange;

      return newTasks;
    });
  }

  async function handleCreateTask(task) {
    //tasksDatabase.create(task);
    //getTasks();
    const taskAdd = (await api.post('/tasks', task)).data;
    tasks.unshift(taskAdd);

    setIsNewTaskModalVisible(false);
  }

  async function handleSaveEdit(task) {
    //tasksDatabase.update(task);
    //getTasks();
    const taskChange = (await api.put(`/tasks/${task.id}`, task)).data;

    setTasks((prevState) => {
      const itemIndex = prevState.findIndex(taskItem => taskItem.id === task.id);
      const newTasks = [...prevState];
      newTasks[itemIndex] = taskChange;

      return newTasks;
    });

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