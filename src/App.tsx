import React from "react";
import { ThemeProvider, theme } from "@chakra-ui/react";
import MainLayout from "./pages/Main/MainLayout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
