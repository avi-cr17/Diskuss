import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { auth } from "firebase-admin";
import { user } from "firebase-functions/v1/auth";
import { User } from "firebase/auth";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchInputState } from "../../atoms/searchAtom";

type SearchInputProps = {
  user: User;
};




const SearchInput: React.FC<SearchInputProps> = ({ user }) => {

const searchQuery = useRecoilValue(searchInputState);
const setSearchQuery = useSetRecoilState(searchInputState);

const handleChnage = ({
  target: { name, value },
}: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery({
    query : value
  })
// console.log(searchQuery)
};


  return (
    <Flex
      flexGrow={1}
      maxWidth={user ? "auto" : "800px"}
      mr={2}
      alignItems="center"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.400"
          // children={<SearchIcon mb={2} />}
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
        <Input
        color="blackAlpha.700"
          placeholder="Search Diskuss"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"

          onChange={handleChnage}

        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
