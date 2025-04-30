import { Modal } from "react-native";

import { Text } from "../Text";

import { ModalBody, Overlay } from "./styles";

export default function CustomModal({ children, visible }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <Overlay>
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}