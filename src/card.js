import React, { useRef, useEffect } from "react";
import CardItem from "./CardItem";

const ScrollableCards = ({ cards }) => {
  const scrollRef = useRef(null);

  // Duplicate cards for looping
  const loopCards = [...cards, ...cards];

  // Auto-scroll with circular loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      container.scrollLeft += 1; // scroll speed

      // Looping logic
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center bg-peach text-darkgray py-10">     
          {/* Fixed-size frame */}
      <div className="w-[1500px] h-[300px]  overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto overflow-y-hidden shadow-lg scroll-smooth no-scrollbar whitespace-nowrap h-full px-6 py-4"
        >
          {loopCards.map((card, index) => (
            <CardItem key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableCards;
