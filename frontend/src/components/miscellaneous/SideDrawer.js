import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import { Menu, MenuButton ,MenuList, MenuItem } from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../Context/ChatProvider";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const { user } = ChatState();
  return (
    <div>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text
          display="flex"
          justifyContent="center"
          fontSize="2xl"
          fontFamily="Work sans"
        >
          Talk-A-Tive
        </Text>

        <div>
          <Menu>
            <MenuButton p={1}>
              {/* <NotificationBadge
              count={notification.length}
              effect={Effect.SCALE}
            /> */}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name={user.name} />
              {/* <NotificationBadge
              count={notification.length}
              effect={Effect.SCALE}
            /> */}
              <MenuList>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </div>
  );
};

export default SideDrawer;
