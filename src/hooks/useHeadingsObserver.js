import { useEffect, useRef } from "react";

export default function useHeadingsObserver(setActiveIds, waitFor) {
  const headingElementsRef = useRef({});

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      setActiveIds(visibleHeadings.map((heading) => heading.target.id));
    };
    const observer = new IntersectionObserver(callback);

    const headingElements = Array.from(document.querySelectorAll("h5, h6"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveIds, waitFor]); // eslint-disable-line
}
