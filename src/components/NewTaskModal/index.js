import CustomModal from "../CustomModal";
import { Text } from "../Text";

export default function NewTaskModal({ onClose, onSave, visible }) {
  return (
    <CustomModal visible={visible}>
      <Text>New Task Modal</Text>
    </CustomModal>
  );
}