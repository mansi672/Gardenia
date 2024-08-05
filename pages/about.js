import styles from "../styles/about.module.scss";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={styles["about-container"]}
    >
      <h3 style={{ textAlign: "center" }}>About Gardenia</h3>
      <p className={styles["intro-paragraph"]}>
        At Gardenia, we believe in the beauty and serenity that a well-tended garden can bring to your life. Founded with a passion for horticulture and a commitment to enhancing outdoor spaces, we are dedicated to providing you with the best resources, tips, and products to help you cultivate your dream garden. Our aim is simple: to inspire and assist gardeners of all levels in creating lush, vibrant, and sustainable outdoor environments. Whether you’re a seasoned gardener or just starting out, we offer a wealth of knowledge and high-quality products to support your gardening journey.
      </p>
    </motion.div>
  );
};

export default About;
 