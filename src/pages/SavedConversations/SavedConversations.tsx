import {
  Button,
  Checkbox,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { mockSavedConversations } from "../../mocks";
import { BiDownload, BiFile, BiSolidFilePdf } from "react-icons/bi";
import { useState } from "react";
import { SavedConversation } from "../../types";

const SavedConversations: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<
    SavedConversation | undefined
  >(undefined);

  const handleDoubleClick = (convo: SavedConversation) => {
    console.log("LOGGED - clicked open");
    setModalContent(convo);
    onOpen();
  };
  const handleClose = () => {
    console.log("LOGGED - clicked close");
    onClose();
  };

  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={5}
        border="2px solid blue"
      >
        {mockSavedConversations.map((convo, i) => (
          <GridItem colSpan={1} colStart={i + 1}>
            <Checkbox
              icon={<></>}
              colorScheme="none"
              value={convo.title}
              onDoubleClick={() => handleDoubleClick(convo)}
              textAlign="center"
            >
              <BiFile size="2em" />
              <Text>{convo.title}</Text>
              <Text fontSize="xs">{convo.users.length} users</Text>
            </Checkbox>
          </GridItem>
        ))}
      </Grid>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        scrollBehavior="inside"
        size="xl"
      >
        <ModalOverlay backdropFilter="blur(5px) hue-rotate(45deg)" />
        <ModalContent border="2px solid red">
          <ModalHeader>This is the modal content</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text>{modalContent?.title}</Text>
          </ModalBody>

          <ModalFooter gap={4}>
            <Button rightIcon={<BiSolidFilePdf size="2em" />}>Email as</Button>

            <Button rightIcon={<BiDownload size="2em" />}>Download</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SavedConversations;
