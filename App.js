import React from "react";
import {
  Box,
  Button,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  useColorModeValue,
} from "native-base";
//import NativeBaseIcon from "./components/NativeBaseIcon";
import ToDoList from "./components/ToDoList";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {

  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1} bg={useColorModeValue('warmGray.50', 'coolGray.800')}>
        <Heading>Cobra Kai To-Do App</Heading>
      <ToDoList />
    <ToggleDarkMode />
    </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
