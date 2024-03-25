import React, { useState } from "react";
import { ChordAnswerOptions } from "../components/chordAnswerOptions";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChordOptionAnswers } from "../reusable/labelEnums";
import { ChordReturn } from "../audio/types";

const enum Feedback {
  Correct = "Correct",
  Incorrect = "Incorrect",
}
type ChordQuizFormProps = {
  currentQuestion: ChordReturn;
  onQuestionAnswered?: (question: ChordReturn) => void;
  isExpanded: boolean;
};
export const ChordQuizForm: React.FC<ChordQuizFormProps> = ({
  currentQuestion,
  isExpanded,
  onQuestionAnswered,
}) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<ChordReturn[]>([]);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleGuess = (guess: ChordOptionAnswers): void => {
    setUserAnswer(guess);
    // Perform validation or check against correct answer
    if (guess === currentQuestion?.answer) {
      setFeedback(Feedback.Correct);
      setAnsweredQuestions([...answeredQuestions, currentQuestion!]);
      // Set a new random question after a correct guess
      // setCurrentQuestion(selectRandomAudioPlayer());
      onQuestionAnswered && onQuestionAnswered(currentQuestion);
    } else {
      setFeedback(Feedback.Incorrect);
    }
  };

  return (
    <Stack direction='column' spacing={2} padding={3}>
      {currentQuestion && (
        <Accordion defaultExpanded={isExpanded}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {/* //TODO: Add check and X for correct/incorrect answers */}
            <Typography variant='h4'>Question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {currentQuestion.audioPlayer}
            <ChordAnswerOptions onGuess={handleGuess} />
            {feedback && <Typography>{feedback}</Typography>}
          </AccordionDetails>
        </Accordion>
      )}
    </Stack>
  );
};
