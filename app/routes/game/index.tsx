import { Box, Card } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import GameContainerRoute from "./GameContainer";
import UserList from "./UserList";

export default function IndexGameRoute() {
  return (
    <>
      <Box display={"flex"} w={"100%"} h={"100vh"} bgColor={"brand.900"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} padding={"5rem"}>
        <UserList />
        <GameContainerRoute />
      </Box>
    </>
  );
}