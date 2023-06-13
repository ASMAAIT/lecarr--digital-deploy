import { useInView, motion, useMotionValue, useSpring } from "framer-motion";

import { staggerContainer, fadeIn } from "../utils/motion";
import styles from "../styles";

import React, { useEffect, useRef } from "react"



const AnimatedNumbers=({value})=>{
    const ref=useRef(null);
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue, {duration:3000});
    const isInView=useInView(ref);
    useEffect(()=>{
        if(isInView){
            springValue.set(value)
        }
    },[isInView, value, motionValue])
    useEffect(()=>{
        springValue.onChange((latest)=>{
          if(ref.current && latest.toFixed(0)<=value){
            ref.current.textContent=latest.toFixed(0);
          }
        })
    },[springValue, value])
    return (
        <span ref={ref}></span>
    )
}
const Statistics = ()=>{

    return(
        <div>
            <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      vieport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col text-center `}>
  <motion.div variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col" class="container mx-auto text-center" >
    <h2 class="font-semibold text-6xl mt-30 mb-30 w-full text-center text-white mb-8">Agency Statistics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="bg-transparent p-6 rounded-lg text-white ">
        <span className="inline-block text-7xl font-bold py-5 text"><AnimatedNumbers value={7}/></span>
        <h2 className="text-xl font-medium capitalize text-dark/75 text-white">Days worked till night this month</h2>
      </div>
      <div class="bg-transparent  p-6 rounded-lg ">
        <span className="inline-block text-7xl font-bold py-5 text "><AnimatedNumbers value={69}/>%</span>
        <h2 className="text-xl font-medium capitalize text-dark/75 text-white">Percentage of Women </h2>
      </div>
      <div class="bg-transarent p-6 rounded-lg ">
        <span className="inline-block text-7xl font-bold py-5 text"><AnimatedNumbers value={24.8}/></span>
        <h2 className="text-xl font-medium capitalize text-dark/75 text-white">Years old is our
average team age</h2>
      </div>
      <div class="bg-transparent  p-6 rounded-lg ">
        <span className="inline-block text-7xl font-bold py-5 text"><AnimatedNumbers value={34} style={{ color: '#fff' }}/>%</span>
        <h2 className="text-xl font-medium capitalize text-dark/75 text-white">Total developers</h2>
      </div>
      <div class="bg-transparent p-6 rounded-lg ">
        <span className='inline-block text-7xl font-bold py-5  text'><AnimatedNumbers value={5} /></span>
        <h2 className="text-xl font-medium capitalize text-dark/75 text-white">New Team Members</h2>
      </div>
    </div>
  </motion.div>
</motion.section>



        </div>
    )
}
export default Statistics;