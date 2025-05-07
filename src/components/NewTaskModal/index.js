import { Image, TouchableOpacity } from "react-native";

import CustomModal from "../CustomModal";

import { Text } from "../Text";

import { Header } from "./styles";

import TaskForm from "../TaskForm";

import close from '../../assets/images/close.png';

export default function NewTaskModal({ onClose, onSave, visible }) {
  return (
    <CustomModal visible={visible}>
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