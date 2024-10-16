import { Modal } from 'react-native';

import { ModalBody, Overlay } from './styles';

import { Text } from '../Text';

export default function CustomModal({ visible, children }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
    >
      <Overlay>
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}