import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box, Image } from "@chakra-ui/react";
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
      <CardBody w={"100%"} display={"grid"} gridTemplateColumns={"250px 250px"} gridTemplateRows={"250px 250px"} padding={0}>
        {props.data.map((image: Image) => {
          return (
            <Image key={image.url} src={image.url} w={"250px"} h={"250px"} borderRadius={"15px"} />
          )
        }
        )}
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>

  );
}
