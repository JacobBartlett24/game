import { Box, Card, CardBody, CardFooter, CardHeader, Heading } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";

export default function LobbyRoute() {
  return (
    <Box display={"flex"} w={"100%"} h={"100vh"} bgColor={"brand.900"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Card display={"flex"} bgColor={"brand.500"} w={"50vw"} h={"80vh"}>
        <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Heading>
            Lobby😄
          </Heading>
        </CardHeader>
        <CardBody display={"grid"}>
          <div>user</div>
          <div>user</div>
          <div>user</div>
          <div>user</div>
          <div>user</div>
          <div>user</div>
          <div>user</div>
          <div>user</div>
          <div>user</div>
        </CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
      <Outlet />
    </Box>

  )
}