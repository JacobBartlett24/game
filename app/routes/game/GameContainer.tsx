import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface GameContainerRouteProps {
  props: any;
}

export default function GameContainerRoute({ props }: GameContainerRouteProps) {

  const [image, setImage]: any = useState();

  return (
    <Card display={"flex"} justifyContent={"center"} alignItems={"center"} w={"60vw"} h={"100%"} bgColor={"brand.500"} >
      <CardHeader borderBottom={"1px solid black"} padding={0}>
        <Heading padding={0} w={"100%"}>
        </Heading>
      </CardHeader>
      <CardBody w={"100%"} padding={0}>
        <Image src={props.data[0].url} />
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>

  );
}
