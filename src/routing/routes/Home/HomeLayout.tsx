import { Drawer, DrawerContent } from "@chakra-ui/react";

const HomeLayout: React.FC = () => {
  return (
    <Drawer isOpen onClose={() => undefined} placement="left" size="xs">
      <DrawerContent>Some Drawer Content</DrawerContent>
    </Drawer>
  );
};

export default HomeLayout;
