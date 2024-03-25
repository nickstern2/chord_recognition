import { useState } from "react";
import { ChordReturn } from "../audio/types";
import { ChordTypesTabs } from "../components/chordTypesTabs";
import { ChordQuizForm } from "./chordQuiz";
import { DMajorAudioPlayer } from "../audio/major-chords/dMajor";
import { GMajorAudioPlayer } from "../audio/major-chords/gMajor";
import { ChordOptionAnswers } from "../reusable/labelEnums";

const Home = () => {
  const audioPlayers: ChordReturn[] = [
    {
      audioPlayer: <GMajorAudioPlayer />,
      answer: ChordOptionAnswers.G_major,
    },
    {
      audioPlayer: <DMajorAudioPlayer />,
      answer: ChordOptionAnswers.D_major,
    },
    // Add more audio players as needed
  ];

  const selectRandomAudioPlayer = (): ChordReturn | null => {
    const randomIndex = Math.floor(Math.random() * audioPlayers.length);
    return audioPlayers[randomIndex] || null;
  };
  const [answeredQuestions, setAnsweredQuestions] = useState<ChordReturn[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<ChordReturn | null>(
    selectRandomAudioPlayer
  );

  const handleQuestionAnswered = (question: ChordReturn) => {
    setAnsweredQuestions((prevQuestions) => [...prevQuestions, question]);
    setCurrentQuestion(selectRandomAudioPlayer());
  };

  return (
    <>
      <ChordTypesTabs />
      {answeredQuestions.map((question, index) => (
        <ChordQuizForm
          key={index}
          currentQuestion={question}
          isExpanded={false}
        />
      ))}
      {currentQuestion && (
        <ChordQuizForm
          currentQuestion={currentQuestion}
          onQuestionAnswered={handleQuestionAnswered}
          isExpanded={true}
        />
      )}
    </>
  );
};

export default Home;
