
import { Box, Card, EnvironmentProvider, Grid, Button, Textarea } from "@chakra-ui/react";
import GameContainerRoute from "../../components/GameContainer";
import UserList from "../../components/UserList";
import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { OpenAIApi, Configuration } from "openai";
import { db } from "~/utils/db.server";
import { Word } from "@prisma/client";

import styles from "~/styles/index.css";
import { useEffect, useState } from "react";

export type ghostWord = {
  word: string;
  count: number;
}

interface AiImages {
  data: {
    url: string;
  }[];
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export async function loader(args: LoaderArgs) {
  return json({
    wordList: await db.word.findMany(),
  })
}

function validatePromptLength(prompt: string) {
  if (prompt.length > 0) {
    return true;
  }
  return false;
}

function validatePromptContainsRandomWord(prompt?: string, randomWord?: string) {
  if (randomWord && prompt?.includes(randomWord.toLowerCase())) {
    return true;
  }
  console.log("random word", randomWord);
  return false;
}

export async function action({ request }: ActionArgs) {

  const body = await request.formData();
  const promptEntry = body.get("prompt");

  const formErrors = {
    prompt: validatePromptContainsRandomWord(promptEntry?.toString(), body.get("randomWord")?.toString())
  }

  if (Object.values(formErrors).some((hasError) => hasError)) {
    return json({ formErrors }, { status: 400 });
  }

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
  const wordData = useLoaderData<typeof loader>();

  const [randomWord, setRandomWord] = useState<ghostWord>();

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Grid w={"100%"} h={"100vh"} gridTemplateRows={"100%"} gridTemplateColumns={"15rem 70rem"} justifyContent={"center"} columnGap={"10rem"} alignContent={"center"} bgColor={"brand.900"} padding={"5rem 0 5rem 0"}>
        <UserList />
        <GameContainerRoute props={data} wordData={wordData} />
      </Grid>
    </Box>
  );
}