'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Get in touch</h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[] rounded-[32px] gap-[12px]"
          onClick={() => window.open('tel:1234567890')}
        >
          <img
            src="/phone-rotary-svgrepo-com.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            +212 661 156 133
          </span>
        </button>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[] rounded-[32px] gap-[12px]"
          onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=contact@lecarredigital.com')}
        >
          <img src="/email-1573-svgrepo-com.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">contact@lecarredigital.com</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <img
            src="/Le CDigital Logo-07.png"
            alt="logo"
            className="w-auto h-[40px] object-contain"
          />
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 Le Carré Digital.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
