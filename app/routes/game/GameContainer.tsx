import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box } from "@chakra-ui/react";

export default function GameContainerRoute() {
  return (

    <Card display={"flex"} justifyContent={"center"} alignItems={"center"} w={"60vw"} h={"100%"} bgColor={"brand.500"} >
      <CardHeader borderBottom={"1px solid black"} padding={0}>
        <Heading padding={0} w={"100%"}>
          Game
        </Heading>
      </CardHeader>
      <CardBody w={"100%"} padding={0}>
        <Text>
          Game
        </Text>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>

  );
}
