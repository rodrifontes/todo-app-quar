import { Image, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import CustomModal from '../CustomModal';

import { Header } from './styles';

import close from '../../assets/images/close.png';
import TaskForm from '../TaskForm';

export default function NewTaskModal({ visible, onClose }) {
  return (
    <CustomModal visible={visible} onClose={onClose}>
      <Header>
        <Text weight="600">Adicionar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm />
    </CustomModal>
  );
}