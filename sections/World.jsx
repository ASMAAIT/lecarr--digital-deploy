"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      vieport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| Clients on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Connecting Across Borders: Our International and National Client Network
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full object-cover" />

        
        
        <div className="absolute top-1 left-[50%] w-[70px] h-[70px] p-[6px] rounded-full ">
          <img src="location-svgrepo-com.svg" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 left-[35%] w-[70px]  p-[6px]">
          <img
            src="location-svgrepo-com.svg"
            alt="planet02"
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>
        <div className="absolute top-10 right-[54%] w-[70px]  p-[6px]">
          <img
            src="location-svgrepo-com.svg"
            alt="planet02"
            className="w-full h-full object-cover rounded-[40px]"
          />
          
        </div>
        <div className="absolute  bottom-20  right-[10%] w-[70px]  p-[6px]">
          <img
            src="location-svgrepo-com.svg"
            alt="planet02"
            className="w-full h-full object-cover rounded-[40px]"
          />
          
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
