import { useCallback, useId } from "react";

export function useScrollTo() {
    const id = useId();
    const handleScroll = useCallback(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "start"});
      }
    }, [id]);

    return [id, handleScroll];
  }