import { useReducer } from "react";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  BiCog,
  BiConversation,
  BiFolder,
  BiFolderOpen,
  // BiLogIn,
  // BiLogOut,
  BiUser,
  BiUserPlus,
} from "react-icons/bi";

import { buttonStyles, leftMenuGridItemStyles } from "../../consts";
import SavedConversations from "../SavedConversations";
import Conversation from "../Conversation/Conversation";
import { ChangePage, pageReducer } from "../../utils/handleChangePage";
import CreateUser from "../CreateUser";
import Settings from "../Settings";
import ManageUsers from "../ManageUsers";
// import LoginSignup from "../LoginSignup";
import { ConversationTools } from "../../components/ConversationTools";
import { SavedConversationTools } from "../../components/SavedConversationsTools";

const MainLayout: React.FC = () => {
  const [state, dispatch] = useReducer(pageReducer, { newConversation: true });

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(12, 1fr)"
      gap={5}
      height="96vh"
      margin="2vh"
      overflow="hidden"
    >
      <GridItem colSpan={12} rowSpan={2} border="2px solid red">
        <Text>Advertisement banner</Text>
      </GridItem>

      <GridItem rowStart={3} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.newConversation}
          leftIcon={<BiConversation size="2em" />}
          onClick={() => dispatch(ChangePage.ToNewConversation)}
        >
          <Text>New conversation</Text>
        </Button>
      </GridItem>

      <GridItem rowStart={4} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.savedConversations}
          leftIcon={
            state.savedConversations ? (
              <BiFolderOpen size="2em" />
            ) : (
              <BiFolder size="2em" />
            )
          }
          onClick={() => dispatch(ChangePage.ToSavedConversations)}
        >
          <Text>Saved conversations</Text>
        </Button>
      </GridItem>

      <GridItem rowStart={5} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.newUser}
          leftIcon={<BiUserPlus size="2em" />}
          onClick={() => dispatch(ChangePage.ToNewUser)}
        >
          New user
        </Button>
      </GridItem>

      <GridItem rowStart={6} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.manageUsers}
          leftIcon={<BiUser size="2em" />}
          onClick={() => dispatch(ChangePage.ToManageUsers)}
        >
          Manage users
        </Button>
      </GridItem>

      <GridItem rowStart={12} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.settings}
          leftIcon={<BiCog size="2em" />}
          onClick={() => dispatch(ChangePage.ToSettings)}
        >
          Settings
        </Button>
      </GridItem>

      {/* <GridItem rowStart={12} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.loginSignup}
          leftIcon={loggedIn ? <BiLogOut size="2em" /> : <BiLogIn size="2em" />}
          onClick={() => dispatch(ChangePage.ToLoginSignup)}
        >
          {loggedIn ? "Logout" : "Login / Signup"}
        </Button>
      </GridItem> */}

      <GridItem
        colSpan={state.newConversation || state.savedConversations ? 8 : 10}
        colStart={3}
        rowSpan={10}
        rowStart={3}
        borderLeft="2px solid orangered"
      >
        {state.newConversation && <Conversation />}
        {state.savedConversations && <SavedConversations />}
        {state.newUser && <CreateUser />}
        {state.manageUsers && <ManageUsers />}

        {state.settings && <Settings />}
        {/* {state.loginSignup && <LoginSignup />} */}
      </GridItem>

      {(state.newConversation || state.savedConversations) && (
        <GridItem
          colSpan={2}
          colStart={11}
          rowSpan={10}
          rowStart={3}
          borderLeft="2px solid orangered"
        >
          {state.newConversation ? (
            <ConversationTools />
          ) : (
            <SavedConversationTools />
          )}
        </GridItem>
      )}
    </Grid>
  );
};

export default MainLayout;
