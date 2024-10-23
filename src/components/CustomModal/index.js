import { Modal } from 'react-native';

import { ModalBody, Overlay } from './styles';

import { Text } from '../Text';

export default function CustomModal({ visible, onClose, children }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay>
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}