import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box, Image, Textarea, Button } from "@chakra-ui/react";
import { Form, useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";

interface GameContainerRouteProps {
  props: any;
  randomWord: string;
}

interface Image {
  url: string;
}

export default function GameContainerRoute({ props, randomWord }: GameContainerRouteProps) {

  const transition = useTransition();
  const text =
    transition.state === "idle" ? "Enter a prompt to get started" :
      transition.state === "submitting" ? "Loading..." :
        transition.state === "loading" ? "Loading..." : null;


  return (
    <Card display={"flex"} justifyContent={"center"} alignItems={"center"} w={"60vw"} h={"100%"} bgColor={"brand.500"} padding={"1rem"}>
      <CardHeader borderBottom={"1px solid black"} padding={0}>
        <Heading padding={0} w={"100%"}>
          {randomWord}
        </Heading>
      </CardHeader>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CardBody w={"100%"} display={"grid"} gridTemplateColumns={"250px 250px"} gap={"10px"} gridTemplateRows={"250px 250px"} padding={0}>
          {props ? props.data.map((image: Image) => {
            return (
              <Image key={image.url} src={image.url} w={"250px"} h={"250px"} borderRadius={"15px"} />
            )
          }
          ) : <Text alignSelf={"center"} justifySelf={"center"} gridColumnStart={"1"} gridColumnEnd={"3"} gridRowStart={"1"} gridRowEnd={"3"}>{text}</Text>}
        </CardBody>
      </Box>
      <CardFooter w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Form method="post" action="">
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} resize={"none"} >
            <Textarea name={"prompt"} colorScheme={"whiteAlpha"} variant={"filled"} placeholder={"Enter your prompt here"} marginBottom={"1rem"} size={"lg"} />
            <Button type={"submit"} variant={"solid"}>Submit Prompt</Button>
          </Box>
        </Form>
      </CardFooter>
    </Card>

  );
}
