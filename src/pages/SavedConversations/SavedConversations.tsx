import { useState } from "react";
import { Button, Grid, GridItem, Text, useDisclosure } from "@chakra-ui/react";

import { mockSavedConversations } from "../../mocks";
import { BiFile } from "react-icons/bi";

import { SavedConversation } from "../../types";
import { ConversationModal } from "../../components/ConversationModal";
import { buttonStyles } from "../../consts";

const SavedConversations: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<
    SavedConversation | undefined
  >(undefined);

  const handleDoubleClick = (convo: SavedConversation) => {
    setModalContent(convo);
    onOpen();
  };
  const handleClose = () => {
    setModalContent(undefined);
    onClose();
  };

  return (
    <>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gridTemplateRows="repeat(6, 1fr)"
        justifyContent="space-around"
        overflowY="auto"
        height="100%"
      >
        {mockSavedConversations.map((convo) => (
          <GridItem width="100%" height="100%">
            <Button
              {...buttonStyles}
              onDoubleClick={() => handleDoubleClick(convo)}
              display="block"
              marginX="auto"
              marginTop={2}
              height="fit-content"
            >
              <BiFile size="2em" />
              <Text maxWidth="100px" isTruncated>
                {convo.title}
              </Text>
            </Button>
          </GridItem>
        ))}
      </Grid>

      <ConversationModal
        isOpen={isOpen}
        onClose={handleClose}
        modalContent={modalContent}
      />
    </>
  );
};

export default SavedConversations;
