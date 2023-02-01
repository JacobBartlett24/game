import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Input, Text } from "@chakra-ui/react";

export default function IndexRoute() {
  return (
    <>
      <Box display={"flex"} w={"100%"} h={"100vh"} bgColor={"brand.900"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <h1 className="">
          Welcome to Game!
        </h1>
        <Card w={"20vw"} bgColor={"brand.500"} display={"flex"} alignItems={"center"}>
          <CardHeader >
            <Text>
              Pick Your Name
            </Text>
          </CardHeader>
          <CardBody>
            <Input placeholder={"Name"} border={"1px solid black"} />
          </CardBody>
          <CardFooter>
            <Button bgColor={"brand.700"} border={"1px solid black"}>
              Continue
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}