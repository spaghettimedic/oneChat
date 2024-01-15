import { useReducer } from "react";
import { Button, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  BiCog,
  BiConversation,
  BiFolder,
  BiFolderOpen,
  BiLogIn,
  BiLogOut,
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
import LoginSignup from "../LoginSignup";

const MainLayout: React.FC = () => {
  const [state, dispatch] = useReducer(pageReducer, { newConversation: true });

  const loggedIn = true;

  return (
    <Grid
      templateColumns="repeat(20, 1fr)"
      templateRows="repeat(10, 1fr)"
      gap={5}
      height="96vh"
      margin="2vh"
    >
      <GridItem colSpan={20} rowSpan={2} border="2px solid red">
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

      <GridItem rowStart={9} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.settings}
          leftIcon={<BiCog size="2em" />}
          onClick={() => dispatch(ChangePage.ToSettings)}
        >
          Settings
        </Button>
      </GridItem>

      <GridItem rowStart={10} {...leftMenuGridItemStyles}>
        <Button
          {...buttonStyles}
          isActive={state.loginSignup}
          leftIcon={loggedIn ? <BiLogOut size="2em" /> : <BiLogIn size="2em" />}
          onClick={() => dispatch(ChangePage.ToLoginSignup)}
        >
          {loggedIn ? "Logout" : "Login / Signup"}
        </Button>
      </GridItem>

      <GridItem
        {...leftMenuGridItemStyles}
        colSpan={1}
        colStart={5}
        rowSpan={10}
        rowStart={3}
      >
        <Divider orientation="vertical" borderWidth="thin" color="orangered" />
      </GridItem>

      <GridItem
        colSpan={12}
        colStart={6}
        rowSpan={10}
        rowStart={3}
        border="2px solid red"
      >
        {state.newConversation && <Conversation />}
        {state.savedConversations && <SavedConversations />}
        {state.newUser && <CreateUser />}
        {state.manageUsers && <ManageUsers />}

        {state.settings && <Settings />}
        {state.loginSignup && <LoginSignup />}
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
