import { useEffect, useState } from "react";

const useScrollProgress = (elementRef) => {
  const [completion, setCompletion] = useState(-100);

  useEffect(() => {
    const node = elementRef?.current;

    //determine scroll for either window or ref
    const getScrollValues = () => {
      const body = document.body;
      const currProgress = node ? node.scrollTop : window.scrollY;
      const scrollHeight = node ? node.scrollHeight : body.scrollHeight;
      const elemHeight = node ? node.offsetHeight : window.innerHeight;
      return { currProgress, scrollHeight, elemHeight };
    };

    const updateProgress = () => {
      const { currProgress, scrollHeight, elemHeight } = getScrollValues();
      const scrollDistance = scrollHeight - elemHeight;
      const distance = (currProgress / scrollDistance).toFixed(2) * 100;
      const inverseDistance = distance - 100;
      setCompletion(inverseDistance);
    };

    node
      ? node.addEventListener("scroll", updateProgress)
      : window.addEventListener("scroll", updateProgress);

    return () => {
      node
        ? node.removeEventListener("scroll", updateProgress)
        : window.removeEventListener("scroll", updateProgress);
    };
  }, [elementRef]);

  return completion;
};
export default useScrollProgress;
