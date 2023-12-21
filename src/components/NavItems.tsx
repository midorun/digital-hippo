"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useEscapeEvent } from "@/hooks/useEscapeEvent";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEscapeEvent(() => setActiveIndex(null));

  const ref = useOnClickOutside<HTMLDivElement>(() => setActiveIndex);

  const close = () => setActiveIndex(null);
  const isAnyOpen = activeIndex !== null;

  const openItem = (i: number) => {
    if (activeIndex === i) {
      close();
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <div className="flex gap-4 h-full" ref={ref}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            onClose={close}
            onOpen={() => openItem(i)}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
