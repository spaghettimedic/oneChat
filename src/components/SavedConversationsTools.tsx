import { Grid, GridItem, Text } from "@chakra-ui/react";

export const SavedConversationTools: React.FC = () => {
  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      templateRows="repeat(12, 1fr)"
      gap={5}
      height="100%"
      margin="2vh"
    >
      <GridItem colSpan={1} rowSpan={1} rowStart={1}>
        <Text>Upper item</Text>
      </GridItem>

      <GridItem colSpan={1} rowSpan={7} rowStart={2}></GridItem>

      <GridItem colSpan={1} rowSpan={1} rowStart={11}></GridItem>
    </Grid>
  );
};
