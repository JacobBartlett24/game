import { Box } from "@chakra-ui/react";
import { ActionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export default function GameRoute() {

  

  return (
    <Box>
      <Outlet />
    </Box>
  );
}