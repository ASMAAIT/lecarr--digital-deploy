import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ title, subtitle, index, items }) => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const handleArrowClick = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <div
            className={`lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white ${
              isParagraphVisible ? 'transform rotate-180' : ''
            }`}
            onClick={handleArrowClick}
          >
            <img
              src="arrow.svg"
              alt="arrow"
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
        </div>
        {isParagraphVisible && (
          <div className="w-1/2">
            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
              {subtitle}
            </p>
            <ul className="mt-4 ml-2 text-white py-6">
              {items.map((item, idx) => (
                <li key={idx} className="list-disc py-3 ml-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InsightCard;
