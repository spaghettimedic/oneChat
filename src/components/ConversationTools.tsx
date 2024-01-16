import { useState } from "react";
import { BiUserMinus, BiUserPlus } from "react-icons/bi";

import {
  Box,
  Button,
  Switch,
  Grid,
  GridItem,
  Select,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { selectStyles, switchStyles, userButtonStyles } from "../consts";
import { mockUsers } from "../mocks";

export const ConversationTools: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState<string[]>([]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveUsers([...activeUsers, event.target.value]);
  };

  const handleRemove = (username: string) => {
    setActiveUsers(activeUsers.filter((activeUser) => activeUser !== username));
  };

  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      templateRows="repeat(12, 1fr)"
      gap={5}
      height="100%"
      marginX="1em"
    >
      <GridItem colSpan={1} rowSpan={1} rowStart={1}>
        <Select
          placeholder="Add users"
          icon={<BiUserPlus size="2em" />}
          {...selectStyles}
          value={activeUsers}
          onChange={handleSelect}
        >
          {/* TODO: replace mockUsers with real users */}
          {mockUsers
            .filter((mockUser) => !activeUsers.includes(mockUser.username))
            .map((user) => (
              <option value={user.username}>{user.username}</option>
            ))}
        </Select>
      </GridItem>

      <GridItem colSpan={1} rowSpan={7} rowStart={2}>
        <Text as="b" color="orangered">
          Users in this conversation:
        </Text>
        <Text fontSize="xs">
          *Click on the username to switch who is actively typing
        </Text>
        {activeUsers.length > 0 &&
          activeUsers.map((username) => (
            <Box display="flex" justifyContent="space-between">
              <Button
                // TODO: actual onClick() behavior
                // onClick={() => }
                style={userButtonStyles}
              >
                {username}
              </Button>

              <Tooltip
                label="Remove user from conversation"
                placement="left"
                hasArrow
              >
                <Button
                  style={userButtonStyles}
                  rightIcon={<BiUserMinus size="1em" />}
                  onClick={() => handleRemove(username)}
                />
              </Tooltip>
            </Box>
          ))}
      </GridItem>

      <GridItem colSpan={1} rowSpan={1} rowStart={11}>
        <Switch {...switchStyles} defaultChecked>
          Show timestamps
        </Switch>
      </GridItem>
    </Grid>
  );
};
