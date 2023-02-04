import { Card, CardBody, CardFooter, CardHeader, Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";


export default function LoginIndexRoute() {

  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name)
  }

  const handleContinue = () => {
    navigate("/lobby");
    localStorage.setItem("name", name);
  }

  return (
    <div>
      <form action="post">
        <Card w={"20vw"} bgColor={"brand.500"} display={"flex"} alignItems={"center"}>
          <CardHeader >
            <Text fontSize={"2xl"}>
              Pick Your Name
            </Text>
          </CardHeader>
          <CardBody>
            <Input placeholder={"Name"} border={"1px solid black"} onChange={handleNameChange} />
          </CardBody>
          <CardFooter>
            <Button type="button" onClick={handleContinue} bgColor={"brand.700"}>
              Continue
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}