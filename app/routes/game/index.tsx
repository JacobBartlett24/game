import { Box, Card, Grid } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import GameContainerRoute from "./GameContainer";
import UserList from "./UserList";

export default function IndexGameRoute() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Grid w={"100%"} h={"100vh"} gridTemplateRows={"100%"} gridTemplateColumns={"15rem 70rem"} justifyContent={"center"} columnGap={"10rem"} alignContent={"center"} bgColor={"brand.900"} padding={"5rem 0 5rem 0"}>
        <UserList />
        <GameContainerRoute />
      </Grid>
    </Box>
  );
}