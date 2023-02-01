import { Card, CardBody, CardFooter, CardHeader, Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";

export default function LoginIndexRoute() {

  const navigate = useNavigate();

  return (
    <div>
      <form action="post">
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

            <Button type="button" onClick={() => navigate("/lobby")} bgColor={"brand.700"} border={"1px solid black"}>
              Continue
            </Button>

          </CardFooter>
        </Card>
      </form>
    </div>
  )
}