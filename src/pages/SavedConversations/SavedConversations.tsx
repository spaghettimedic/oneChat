import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { mockMyConversations } from "../../mocks";
import { BiFile } from "react-icons/bi";
import { buttonStyles } from "../../consts";

const MyConversations: React.FC = () => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap={5}
      margin="2vh"
      border="2px solid blue"
    >
      {mockMyConversations.map(({ title, users }, i) => (
        <GridItem colSpan={1} colStart={i + 1}>
          <Button display="block" height="auto" {...buttonStyles}>
            <BiFile size="2em" />
            <Text>{title}</Text>
            <Text fontSize="xs">{users.length} users</Text>
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
};

export default MyConversations;
