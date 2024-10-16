import { Text } from '../Text';

import CustomModal from '../CustomModal';

export default function DeleteConfirmModal({ visible }) {
  return (
    <CustomModal visible={visible}>
      <Text size={18} weight="600">
        Tem certeza que deseja remover a tarefa?
      </Text>

      <Text opacity={0.5} style={{ marginTop: 4 }}>
        Essa ação não pode ser desfeita
      </Text>
    </CustomModal>
  );
}