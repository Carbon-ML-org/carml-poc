import { useEffect, useState } from "react";
import getHeadings from "../utils/getHeadings";

export function useHeadings() {
  const [headings, setHeadings] = useState([]);

  const findHeadings = () => {
    const $headings = Array.from(document.querySelectorAll("h5, h6"));
    const newHeadings = getHeadings($headings);
    setHeadings(newHeadings);
  };

  useEffect(() => {
    findHeadings();
  }, []);

  return { headings, resetHeadings: findHeadings };
}
