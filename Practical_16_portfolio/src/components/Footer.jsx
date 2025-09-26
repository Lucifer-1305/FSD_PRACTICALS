import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-symbol">$</span>
              <span className="logo-text">Jaimin</span>
            </div>
            <p className="footer-subtitle">
              Web designer and front-end developer
            </p>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; Copyright {currentYear}. Made by Jaimin</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
