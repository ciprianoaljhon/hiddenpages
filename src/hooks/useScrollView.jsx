import React, { useRef, useState, useEffect } from "react";

export const useScrollFeat = () => {
  const [index, setIndex] = useState(-1);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const references = [ref1, ref2, ref3, ref4];

  const handleClick = (i = 0) => {
    // const nextIndex = index != 3 ? index + 1 : 0;
    const nextIndex = (index + i + references.length) % references.length;
    // console.log(nextIndex + parseInt(i));
    setIndex(nextIndex);
    references[nextIndex].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "end",
    });
  };
  return [index, references, handleClick];
};
