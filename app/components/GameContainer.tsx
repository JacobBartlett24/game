import { Heading, Text, Card, CardBody, CardFooter, CardHeader, Box, Image, Textarea, Button, Input } from "@chakra-ui/react";
import { Form, useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";
import type { Word } from "@prisma/client";
import CurrentHost from "./CurrentHost";

interface GameContainerRouteProps {
  props: any;
  wordData: any;
}



export default function GameContainerRoute({ props, wordData }: GameContainerRouteProps) {

  const transition = useTransition();
  const text =
    transition.state === "idle" ? "Enter a prompt to get started" :
      transition.state === "submitting" ? "Loading..." :
        transition.state === "loading" ? "Loading..." : null;

  const [randomWord, setRandomWord] = useState<Word>();
  const [randomWordArray, setRandomWordArray] = useState<string[]>([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordData.wordList.length);
    setRandomWord(wordData.wordList[randomIndex]);
    setRandomWordArray(wordData.wordList[randomIndex].word.split(""));
  }, [wordData.wordList]);

  return (
    <Card display={"flex"} justifyContent={"center"} alignItems={"center"} w={"60vw"} h={"100%"} bgColor={"brand.500"} padding={"1rem"}>
      <CurrentHost props={props} 
                   randomWordArray={randomWordArray} 
                   randomWord={randomWord} 
                   text={text} />
    </Card>

  );
}
