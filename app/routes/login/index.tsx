import { Card, CardBody, CardFooter, CardHeader, Button, Input, Text } from "@chakra-ui/react";
import { Form, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { User } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export async function action({ request }: ActionArgs) {

  const response = await (await request.formData()).get("name")
  const user: User = { name: response }
  await db.user.create({ data: user });

  return redirect("/lobby");
}

export default function LoginIndexRoute() {

  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name)
  }

  const handleContinue = () => {
    localStorage.setItem("name", name);
  }

  return (
    <div>
      <Form method="post" action="">
        <Card w={"20vw"} bgColor={"brand.500"} display={"flex"} alignItems={"center"}>
          <CardHeader >
            <Text fontSize={"2xl"}>
              Pick Your Name
            </Text>
          </CardHeader>
          <CardBody>
            <Input placeholder={"Name"} border={"1px solid black"} onChange={handleNameChange} name={"name"} />
          </CardBody>
          <CardFooter>
            <Button type="submit" onClick={handleContinue} bgColor={"brand.700"}>
              Continue
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  )
}