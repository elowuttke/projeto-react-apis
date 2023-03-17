import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  progress[value] {
    -webkit-appearance: none;
    appearence: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    width: 190px;
    border-radius: 20px;
    background-color: #eee;
  }

  progress[value]::-webkit-progress-value {
    height: 10px;
    width: 190px;
    border-radius: 20px;
    background-color: orange;
  }
`;
