import React, { FC } from "react";
import { ChordOptionAnswers } from "../reusable/labelEnums";
import { Button, Stack } from "@mui/material";

type ChordAnswerOptionsProps = {
  onGuess: (guess: ChordOptionAnswers) => void;
};
export const ChordAnswerOptions: FC<ChordAnswerOptionsProps> = ({
  onGuess,
}) => {
  const majorChords = Object.entries(ChordOptionAnswers).filter(([, value]) =>
    value.endsWith("Major")
  );
  const minorChords = Object.entries(ChordOptionAnswers).filter(([, value]) =>
    value.endsWith("Minor")
  );

  // Function to render chord buttons
  const renderChordButtons = (chords: [string, ChordOptionAnswers][]) =>
    chords.map(([key, chordType]) => {
      return (
        <Button
          onClick={() => onGuess(chordType)}
          variant='contained'
          key={key}>
          {chordType}
        </Button>
      );
    });

  return (
    <>
      <Stack direction='row' spacing={1}>
        {renderChordButtons(majorChords)}
      </Stack>
      <Stack direction='row' spacing={1}>
        {renderChordButtons(minorChords)}
      </Stack>
    </>
  );
};
