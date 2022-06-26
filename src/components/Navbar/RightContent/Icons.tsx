import React from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, useColorMode } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots, BsFillSunFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import useDirectory from "../../../hooks/useDirectory";
import { MdNightlight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { colorModeState } from "../../../atoms/colorAtom";

type ActionIconsProps = {};

const ActionIcons: React.FC<ActionIconsProps> = () => {
  const { toggleMenuOpen } = useDirectory();
  const { colorMode, toggleColorMode } = useColorMode()
  const [colorState,setColorState] = useRecoilState(colorModeState);
  return (
    <Flex alignItems="center" flexGrow={1}>
      {/* <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22} />
        </Flex>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex>
      </Box> */}
      <>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsChatDots} fontSize={20} />
        </Flex>
       
    { colorMode === 'dark' ? 
        
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
          onClick={toggleColorMode }
        >
          <Icon as={BsFillSunFill} fontSize={20} />
        </Flex>

              :

        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
          onClick={toggleColorMode }
        >
          <Icon as={MdNightlight} fontSize={20} />
        </Flex>

    }
        {/* <Flex
          display={{ base: "none", md: "flex" }}
          mr={3}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
          onClick={toggleMenuOpen}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex> */}
      </>
    </Flex>
  );
};
export default ActionIcons;
