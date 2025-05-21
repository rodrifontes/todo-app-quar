import { TouchableOpacity, Image } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import close from '../../assets/images/close.png';
import { Header } from './styles';
import TaskForm from "../TaskForm";

export default function EditTaskModal({ visible, onClose, onSave, task }) {
  return (
    <CustomModal visible={visible}>
      <Header>
        <Text weight="600">Editar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm
        onSave={onSave}
        task={task}
        buttonLabel="Editar"
      />
    </CustomModal>
  );
}