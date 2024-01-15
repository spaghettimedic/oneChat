import { theme } from "@chakra-ui/react";
import { SavedConversation, User } from "../types";

export const mockUser1: User = {
  username: "mockUser1",
  color: theme.colors.blue[400],
};
export const mockUser2: User = {
  username: "mockUser2",
  color: theme.colors.red[400],
};
export const mockUser3: User = {
  username: "mockUser3",
  color: theme.colors.green[400],
};

export const mockUsers = [mockUser1, mockUser2, mockUser3];

export const mockSavedConversations: SavedConversation[] = [
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
