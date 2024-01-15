import { PageState } from "../types";

export enum ChangePage {
  ToSavedConversations = "ToSavedConversations",
  ToNewConversation = "ToNewConversation",
  ToNewUser = "ToNewUser",
  ToManageUsers = "ToManageUsers",
  ToSettings = "ToSettings",
  ToLoginSignup = "ToLoginSignup",
}

export const pageReducer = (
  state: PageState,
  action: ChangePage
): PageState => {
  switch (action) {
    case ChangePage.ToSavedConversations:
      return { savedConversations: true };
    case ChangePage.ToNewConversation:
      return { newConversation: true };
    case ChangePage.ToNewUser:
      return { newUser: true };
    case ChangePage.ToManageUsers:
      return { manageUsers: true };
    case ChangePage.ToSettings:
      return { settings: true };
    case ChangePage.ToLoginSignup:
      return { loginSignup: true };
    default:
      return state;
  }
};
