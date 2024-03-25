import React from "react";
import { ChordTypesTabs } from "../components/chordTypesTabs";
import { ChordQuizForm } from "./chordQuiz";

const Home = () => {
  return (
    <>
      <ChordTypesTabs />
      {/* //TODO: Pass props including chord sounds */}
      <ChordQuizForm />
    </>
  );
};

export default Home;
