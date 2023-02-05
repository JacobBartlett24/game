import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import styles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function LobbyRoute() {

  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) {
      setUser(user);
    }
  }, [])

  return (
    <Box display={"flex"} w={"100%"} h={"100vh"} bgColor={"brand.900"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Card display={"flex"} bgColor={"brand.500"} w={"50vw"} h={"80vh"}>
        <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Heading fontFamily={"Lilita One"}>
            Lobby😄
          </Heading>
        </CardHeader>
        <CardBody display={"grid"}>
          <Text>{user}</Text>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button bgColor={"brand.700"} onClick={() => navigate("/game")}>
            Start Game 😄
          </Button>
        </CardFooter>
      </Card>
    </Box >

  )
}