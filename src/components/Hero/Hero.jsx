import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "170px" : '238px' }}
            whileInView={{ left: '9px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>The Best Club Fitness in the town</span>
        </div>

        {/* Hero Header */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span> Your</span>
          </div>
          <div><span>Ideal  Body</span></div>
          <div>
            <span>
              in here we will help you to shape and build and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+" />
            </span>
            <span>export coachs</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix="+" />

            </span>
            <span>membres joined</span>
          </div>
          <div>
            <span>     
              <NumberCounter end={50} start={0} delay='4' preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
        </motion.div>
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back} alt="" className='hero_image_back' />
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '30rem' }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span> 230 kcol</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
