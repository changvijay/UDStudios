// CardItem.js
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const CardItem = ({ card, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[275px] bg-white text-black rounded-xl overflow-hidden shadow-lg"
    >
      <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{card.title}</h3>
        <p className="text-sm text-gray-600">{card.subtitle}</p>
      </div>
    </motion.div>
  );
};

export default CardItem;
