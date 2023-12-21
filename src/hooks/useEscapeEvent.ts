import { useEffect, useState } from "react";

export const useEscapeEvent = (cb) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cb();
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
};

const NapisatXuy = (xuy) => {
  console.log(xuy);
};

NapisatXuy();
