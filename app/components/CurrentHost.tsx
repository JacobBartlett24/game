import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box, Image, Textarea, Button, Input } from "@chakra-ui/react";
import { Form, useTransition } from "@remix-run/react";
import { Word } from "@prisma/client";


interface CurrentHostProps {
  randomWordArray: string[];
  randomWord: Word | undefined;
  props: any;
  text: any;
}

interface Image {
  url: string;
}

export default function CurrentHost({ props, randomWord, randomWordArray, text }: CurrentHostProps) {
  return (
    <>
      <CardHeader padding={0}>
        <Heading padding={0} w={"100%"} display={"flex"}>
          {randomWordArray ? randomWordArray.map((letter: string) => {
            return (
              <Text key={letter} marginLeft={"3px"}>_</Text>
            )
          }) : "incorrect"}
        </Heading>
      </CardHeader>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CardBody w={"100%"} display={"grid"} gridTemplateColumns={"250px 250px"} gap={"10px"} gridTemplateRows={"250px 250px"} padding={0}>
          {props ? props.data.map((image: Image) => {
            return (
              <Image key={image.url} src={image.url} w={"250px"} h={"250px"} borderRadius={"15px"} />
            )
          }
          ) : <Text alignSelf={"center"} justifySelf={"center"} gridColumnStart={"1"} gridColumnEnd={"3"} gridRowStart={"1"} gridRowEnd={"3"}>
            {text}
            {`, your word is ${randomWord?.word}`}
          </Text>}
        </CardBody>
      </Box>
      <CardFooter w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Form method="post" action="">
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} resize={"none"} >
            <Textarea name={"prompt"} colorScheme={"whiteAlpha"} variant={"filled"} placeholder={"Enter your prompt here"} marginBottom={"1rem"} size={"lg"} />
            <Button type={"submit"} variant={"solid"}>Submit Prompt</Button>
            <Input name={"randomWord"} value={randomWord?.word} hidden />
          </Box>
        </Form>
      </CardFooter>
    </>
  )
}
