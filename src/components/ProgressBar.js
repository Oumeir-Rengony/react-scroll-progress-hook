import React from "react";
import styled from "styled-components";

const ProgressBar = ({
  elementRef,
  completion,
  orientation = "horizontal",
  className = ""
}) => {
  return (
    <>
      {orientation.toLowerCase() === "horizontal" && (
        <HorizontalProgress
          className={`progress-line__horizontal ${className}`}
          style={{
            position: `${elementRef?.current ? "absolute" : "fixed"}`,
            transform: `translateX(${completion}%)`,
            width: `${
              elementRef?.current
                ? elementRef.current.offsetWidth
                : window.innerWidth
            }px`
          }}
        />
      )}
      {orientation.toLowerCase() === "vertical" && (
        <VerticalProgress
          className={`progress-line__vertical ${className}`}
          style={{
            position: `${elementRef?.current ? "absolute" : "fixed"}`,
            transform: `translateY(${completion}%)`,
            height: `${
              elementRef?.current
                ? elementRef.current.offsetHeight
                : window.innerHeight
            }px`
          }}
        />
      )}
    </>
  );
};

const HorizontalProgress = styled.div`
  &.progress-line__horizontal {
    width: 100%;
    height: 4px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: lightcoral;
    z-index: 2;
  }
`;

const VerticalProgress = styled.div`
  &.progress-line__vertical {
    height: 100vh;
    width: 4px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: mediumslateblue;
    z-index: 2;
  }
`;

export default ProgressBar;
