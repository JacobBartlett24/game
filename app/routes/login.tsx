import { Box } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";

export default function LoginRoute() {
  return (
    <div>
      <Box display={"flex"} w={"100%"} h={"100vh"} bgColor={"brand.900"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <h1 className="">
          Welcome to Game!
        </h1>
        <Outlet />
      </Box>
    </div>
  )
}