import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'C++', 'Java', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Express', 'Node.js', 'Flutter (Beginner)']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['VSCode', 'Git', 'Github', 'Postman']
    },
    {
      title: 'Other',
      skills: ['MERN Stack', 'Responsive Design', 'Version Control']
    }
  ]

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          skills
        </motion.h2>

        <div className="skills-layout">
          <motion.div
            className="skills-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="skills-shapes">
              <div className="skill-shape shape-1"></div>
              <div className="skill-shape shape-2"></div>
              <div className="skill-shape shape-3"></div>
              <div className="skill-shape shape-4"></div>
              <div className="skill-shape shape-5"></div>
            </div>
          </motion.div>

          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills