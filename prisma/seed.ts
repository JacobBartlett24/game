import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getWords().map((word) => {
      return db.word.create({ data: word });
    })
  );
}

seed();

function getWords() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      word: "Tie",
      count: 3,
    },
    {
      word: "Frisbee",
      count: 7,
    },
    {
      word: "Tree",
      count: 4,
    },
    {
      word: "Skeleton",
      count: 8,
    },
    {
      word: "Hippo",
      count: 5,
    },
    {
      word: "Dinner",
      count: 6,
    },
    {
      word: "Elevator",
      count: 8,
    },
  ];
}