import styles from "~/styles/index.css";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function LoginRoute() {
  return (
    <div>
      <Box display={"grid"} w={"100%"} h={"100vh"} bgColor={"brand.900"} gridRow={"10vh 90vh"} justifyItems={"center"}>
        <Heading fontFamily={"Lilita One"} fontWeight={"light"}>Welcome to Pictio!</Heading>
        <Outlet />
      </Box>
    </div>
  )
}