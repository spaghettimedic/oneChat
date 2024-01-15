export type User = {
  username: string;
  color: string;
};

export type SavedConversation = {
  title: string;
  users: User[];
};

export type PageState = {
  savedConversations?: boolean;
  newConversation?: boolean;
  newUser?: boolean;
  manageUsers?: boolean;
  settings?: boolean;
  loginSignup?: boolean;
};
