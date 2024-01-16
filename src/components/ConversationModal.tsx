import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { BiDownload, BiSolidFilePdf, BiTrash } from "react-icons/bi";

import { SavedConversation } from "../types";
import { buttonStyles } from "../consts";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  modalContent?: SavedConversation;
}

export const ConversationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  modalContent,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="xl">
      <ModalOverlay backdropFilter="blur(5px) hue-rotate(45deg)" />
      <ModalContent>
        <ModalHeader>This is the modal content</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Text>{modalContent?.title}</Text>
        </ModalBody>

        <ModalFooter gap={4}>
          <Button
            border="none"
            colorScheme="orange"
            rightIcon={<BiSolidFilePdf size="2em" />}
          >
            Email as
          </Button>

          <Button
            border="none"
            colorScheme="orange"
            rightIcon={<BiDownload size="2em" />}
          >
            Download
          </Button>

          <Button {...buttonStyles} rightIcon={<BiTrash size="2em" />}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
