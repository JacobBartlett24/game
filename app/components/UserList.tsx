import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box } from "@chakra-ui/react";

function User() {
  return (
    <Box h={"5rem"} w={"100%"} borderBottom={"1px solid black"} padding={2}>
      <Text>
        User
      </Text>
    </Box>
  );
}

export default function UserList() {
  return (
    <Card display={"flex"} justifyContent={"center"} alignItems={"center"} w={"15vw"} h={"100%"} bgColor={"brand.500"} >
      <CardHeader borderBottom={"1px solid black"} padding={0}>
        <Heading padding={0} w={"100%"}>
          User List
        </Heading>
      </CardHeader>
      <CardBody w={"100%"} padding={0}>
        <User />
        <User />
        <User />
        <User />
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}