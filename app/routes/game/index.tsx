
import { Box, Card, EnvironmentProvider, Grid } from "@chakra-ui/react";
import GameContainerRoute from "./GameContainer";
import UserList from "./UserList";
import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { OpenAIApi, Configuration } from "openai";

interface AiImages {
  data: {
    url: string;
  }[];
}

export async function loader(args: LoaderArgs) {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const imageParameters = {
    prompt: "Jacob Bartlett",
    n: 4,
  }
  const response = await openai.createImage(imageParameters);

  return json(response.data)
}

export default function IndexGameRoute() {

  const data = useLoaderData<typeof loader>();

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Grid w={"100%"} h={"100vh"} gridTemplateRows={"100%"} gridTemplateColumns={"15rem 70rem"} justifyContent={"center"} columnGap={"10rem"} alignContent={"center"} bgColor={"brand.900"} padding={"5rem 0 5rem 0"}>
        <UserList />
        <GameContainerRoute props={data} />
      </Grid>
    </Box>
  );
}