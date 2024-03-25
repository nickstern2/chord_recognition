import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { ChordAnswerOptions } from "../components/chordAnswerOptions";

// Import all your audio player components
import { GMajorAudioPlayer } from "../audio/major-chords/gMajor";
import { DMajorAudioPlayer } from "../audio/major-chords/dMajor";
import { ChordOptionAnswers } from "../reusable/labelEnums";
import { ChordReturn } from "../audio/types";

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

export const ChordQuizForm: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<ChordReturn | null>(
    selectRandomAudioPlayer
  );

  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleGuess = (guess: ChordOptionAnswers): void => {
    console.log("!!guess", guess);
    setUserAnswer(guess);
    // Perform validation or check against correct answer
    if (guess === currentQuestion?.answer) {
      setFeedback("Correct!");
      // Set a new random question after a correct guess
      setCurrentQuestion(selectRandomAudioPlayer());
    } else {
      setFeedback("Incorrect. Try again.");
    }
  };

  return (
    <Stack direction='column' spacing={2} padding={3}>
      <Typography variant='h4'>Question</Typography>
      {currentQuestion && <>{currentQuestion.audioPlayer}</>}
      <ChordAnswerOptions onGuess={handleGuess} />
      {feedback && <Typography>{feedback}</Typography>}
    </Stack>
  );
};
