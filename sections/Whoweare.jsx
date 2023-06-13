'use client';
import React from 'react';
import {motion} from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import styles from "../styles";


      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      ></motion.div>
const Whoweare=()=>{
    return (
        <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.paddings} relative z-10 text-center`}  >
          <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
      >
          <h2 className="font-bold text-8xl mb-32 w-full text-center text-white">Who we are?</h2>
           <div className="w-[100%] mx-auto relative">
             <ul className="w-full flex flex-col items-start justify-between ml-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
              <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between border-2 border-yellow-500 p-8 rounded-lg w-full h-full">
            <div className='text-center ' > 
              <h3 className="capitalize font-bold text-4xl text-white mb-4">Understanding of business.</h3>
              <p className='text-white leading-loose'>We know how the world is organized, we know what is
good & bad for your business, understand processes and
know how to optimize them. We understand the market
where we are working to offer our partners only those
solutions that will definitely help your business to reach the
next level in key objectives.</p>
                </div>
                 </li>
              
              <li className="first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between align-items items-center border-2 border-yellow-500 p-8 rounded-lg w-full h-full">
              
            
               <div
               className='text-center '
               > 
              
                  <h3 className="capitalize font-bold text-4xl text-white mb-4">Understanding of client’s needs.</h3>
                  <p className='text-white leading-loose'>We understand that numbers and metrics reign in business.
We understand the needs and objectives of the client, we
work on its e ective implementation. We transmit the brand
value to the customer through the visual communication
and digital products, thereby showing you the best results.</p>
                </div>
                
              </li>
              <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between border-2 border-yellow-500 p-8 rounded-lg w-full h-full">
                <div className="flex flex-col items-center justify-center h-full" >
                  <h3  className="capitalize font-bold text-4xl text-white mb-4">Creative & scrupulous.</h3>
                  <p className='text-white leading-loose'>We do not go on trampled paths, we kindle our lights.
We display all our creativity through the gorgeous
design solutions and animations, and our perfectionism
will not let us miss the slightest bug or flaw.</p>
                </div>
               
              </li>
              <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between border-2 border-yellow-500 p-8 rounded-lg w-full h-full">
              < div className="flex flex-col items-center justify-center h-full"> 
                  <h3 className="capitalize font-bold text-4xl text-white mb-4 ">Visionaries.</h3>
                  <p className='text-white leading-loose'>We target not just short-term results. We analyze the present & predict the future. Our task is to establish strong long-term relationships that are not subject to the loss of time.  </p>
                </div>
              </li>
            </ul>
           </div>
        </motion.div>
        </motion.div>
    )
}


export default Whoweare;