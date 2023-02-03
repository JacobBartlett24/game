import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box, Image, Textarea, Button } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";

interface GameContainerRouteProps {
  props: any;
}

interface Image {
  url: string;
}

export default function GameContainerRoute({ props }: GameContainerRouteProps) {

  const [image, setImage]: any = useState();

  console.log(props.data)

  return (
    <Card display={"flex"} justifyContent={"center"} alignItems={"center"} w={"60vw"} h={"100%"} bgColor={"brand.500"} >
      <CardHeader borderBottom={"1px solid black"} padding={0}>
        <Heading padding={0} w={"100%"}>
        </Heading>
      </CardHeader>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CardBody w={"100%"} display={"grid"} gridTemplateColumns={"250px 250px"} gap={"10px"} gridTemplateRows={"250px 250px"} padding={0}>
          {props.data.map((image: Image) => {
            return (
              <Image key={image.url} src={image.url} w={"250px"} h={"250px"} borderRadius={"15px"} />
            )
          }
          )}
        </CardBody>
      </Box>
      <CardFooter w={"100%"} padding={"0rem 4rem"}>
        <Form>
          <Textarea colorScheme={"whiteAlpha"} variant={"filled"} placeholder={"Enter your prompt here"} />
          <Button type={"submit"} variant={"solid"}>Submit Prompt</Button>
        </Form>
      </CardFooter>
    </Card>

  );
}
