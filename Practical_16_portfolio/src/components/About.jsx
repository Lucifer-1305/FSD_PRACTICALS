import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const funFacts = [
    'I like winter more than summer',
    'I like pizza and pasta',
    'My favorite movie is Batman Dark Knight',
  ]

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            /about-me
          </motion.h2>
          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Who am I?
          </motion.p>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>Hello, i'm Jaimin!</p>
            <p>
              I'm a self-taught front-end developer based in Rajkot, India. I specialize in building responsive, visually appealing, and user-friendly websites from scratch.

              Transforming ideas into interactive web experiences has been my passion for over a year. While I haven’t worked with clients yet, I’ve been consistently learning and creating projects to sharpen my skills. I stay curious about the latest technologies and frameworks, and I’m always exploring ways to improve my craft and bring fresh ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-visual">
              <div className="about-shapes">
                <div className="about-shape shape-1"></div>
                <div className="about-shape shape-2"></div>
                <div className="about-shape shape-3"></div>
                <div className="about-shape shape-4"></div>
                <div className="about-shape shape-5"></div>
                <div className="about-shape shape-6"></div>
              </div>
              <div className="about-illustration">
                <div className="person-silhouette"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Academic & Leadership Section */}
        <motion.div
          className="academic-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="academic-title">#my-background</h3>
          <div className="academic-content">
            <motion.div
              className="academic-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education: Charusat University CSE (2023 - 2027)
            </motion.div>
            <motion.div
              className="academic-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Leadership: Head of Entrepreneurship Cell Charusat
            </motion.div>
            <motion.div
              className="academic-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Organization: AIESEC in VVN Member
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          className="fun-facts-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="fun-facts-title">#my-fun-facts</h3>
          <div className="fun-facts-layout">
            <div className="fun-facts-grid">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="fun-fact-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {fact}
                </motion.div>
              ))}
            </div>
            <div className="fun-facts-visual">
              <div className="fun-facts-shapes">
                <div className="fun-shape shape-1"></div>
                <div className="fun-shape shape-2"></div>
                <div className="fun-shape shape-3"></div>
                <div className="fun-shape shape-4"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About