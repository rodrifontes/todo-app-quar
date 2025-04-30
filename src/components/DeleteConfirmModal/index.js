import CustomModal from "../CustomModal";

import { Text } from "../Text";

import { Actions } from "./styles";

import Button from "../Button";

export default function DeleteConfirmModal({ onClose, onConfirm, visible }) {
  return (
    <CustomModal visible={visible}>
      <Text weight="600" size={18}>
        Tem certeza que deseja remover a tarefa?
      </Text>
      <Text opacity={0.5} style={{ marginTop: 4 }}>
        Essa ação não podera ser desfeita
      </Text>

      <Actions>
        <Button onPress={onClose} primary={false}>Cancelar</Button>
        <Button onPress={onConfirm}>Confirmar</Button>
      </Actions>
    </CustomModal>
  );
}