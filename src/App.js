import Navbar from "./components/Navbar";
import Paragraph from "./components/Paragraph";
import ProgressBar from "./components/ProgressBar";
import useScrollProgress from "./hook/useScrollProgress";
import styled from "styled-components";
import { useRef } from "react";

export default function App() {
  const cardContentRef = useRef(null);

  const completion = useScrollProgress(cardContentRef);
  const windowCompletion = useScrollProgress();

  return (
    <StyledApp className="App">
      <Navbar />

      <ProgressBar completion={windowCompletion} className="zIndex" />
      <ProgressBar
        orientation="vertical"
        completion={windowCompletion}
        className="zIndex"
      />

      <h1>Hello CodeSandbox</h1>
      <Paragraph />
      <Paragraph />

      <div className="card">
        <ProgressBar elementRef={cardContentRef} completion={completion} />
        <ProgressBar
          elementRef={cardContentRef}
          completion={completion}
          orientation="vertical"
        />
        <div className="card-content" ref={cardContentRef}>
          <Paragraph />
          <Paragraph />
          <Paragraph />
        </div>
      </div>

      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Paragraph />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  &.App {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card {
      position: relative;
      overflow: hidden;
      margin: 0 auto;
      width: 300px;
      height: 500px;
      border: solid gray 2px;
      border-radius: 8px;

      .card-content {
        height: inherit;
        overflow: auto;
      }
    }

    /* higher than navbar */
    .zIndex {
      z-index: 1000;
    }
  }
`;
