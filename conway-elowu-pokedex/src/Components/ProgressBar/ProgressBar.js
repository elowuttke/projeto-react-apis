import React from "react";
import { ProgressBarContainer } from "./progressBarStyle";

export const ProgressBar = ({ value, max }) => {
  return (
    <ProgressBarContainer>
      <progress value={value} max={max} />
    </ProgressBarContainer>
  );
};
