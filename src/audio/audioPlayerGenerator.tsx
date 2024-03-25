import React, { FC } from "react";

type ChordFilePath = "G_major.mp3" | "C_major.mp3" | "D_major.mp3"; // Extend as needed

type AudioPlayerGeneratorProps = {
  chordFilePath: ChordFilePath;
};

export const AudioPlayerGenerator: FC<AudioPlayerGeneratorProps> = ({
  chordFilePath,
}) => {
  return (
    <audio
      src={`${process.env.PUBLIC_URL}/audio/${chordFilePath}`}
      controls
      loop
    />
  );
};
