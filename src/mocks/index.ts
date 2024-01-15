import { theme } from "@chakra-ui/react";
import { SavedConversation, User } from "../types";

export const mockUser1: User = {
  userName: "mockUser1",
  color: theme.colors.blue[400],
};
export const mockUser2: User = {
  userName: "mockUser2",
  color: theme.colors.red[400],
};
export const mockUser3: User = {
  userName: "mockUser3",
  color: theme.colors.green[400],
};

export const mockMyConversations: SavedConversation[] = [
  {
    title: "mock1Title",
    users: [mockUser1, mockUser2, mockUser3],
  },
  {
    title: "mockTitle2",
    users: [mockUser1, mockUser2],
  },
  {
    title: "mockTitle3",
    users: [mockUser1],
  },
];
