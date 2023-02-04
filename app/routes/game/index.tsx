
import { Box, Card, EnvironmentProvider, Grid, Button, Textarea } from "@chakra-ui/react";
import GameContainerRoute from "../../components/GameContainer";
import UserList from "../../components/UserList";
import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { OpenAIApi, Configuration } from "openai";

interface AiImages {
  data: {
    url: string;
  }[];
}

//export async function loader(args: LoaderArgs) {
//return json(await)
//}

export async function action({ request }: ActionArgs) {

  const body = await request.formData();
  const promptEntry = body.get("prompt");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const imageParameters = {
    prompt: promptEntry?.toString() || "A photo of a cat",
    n: 4,
  }

  const response = await openai.createImage(imageParameters);

  return json(response.data);
}

export default function IndexGameRoute() {

  const data = useActionData<typeof action>();

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Grid w={"100%"} h={"100vh"} gridTemplateRows={"100%"} gridTemplateColumns={"15rem 70rem"} justifyContent={"center"} columnGap={"10rem"} alignContent={"center"} bgColor={"brand.900"} padding={"5rem 0 5rem 0"}>
        <UserList />
        <GameContainerRoute props={data} />
      </Grid>
    </Box>
  );
}