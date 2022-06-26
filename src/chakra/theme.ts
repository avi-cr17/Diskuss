import { extendTheme, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { colorModeState } from "../atoms/colorAtom";
import { Button } from "./button";
import { Input } from "./input";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}



const mode = ()=>{
  const { colorMode, toggleColorMode } = useColorMode();

  if(colorMode==='light')
  return "gray.200"
  else
  return "gray.900"
}






export const theme = extendTheme({

  

  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg : mode()
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});


