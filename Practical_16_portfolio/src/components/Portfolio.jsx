import { motion } from 'framer-motion'
import { ExternalLink, Github, User, Headphones, Smartphone, BarChart3, Home } from 'lucide-react'
import { useMemo, useCallback } from 'react'
import './Portfolio.css'

// Animation variants for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Icon mapping for better maintainability
const iconMap = {
  User: User,
  Headphones: Headphones,
  Smartphone: Smartphone,
  SnookerPlay: ExternalLink,
  'ERP System': BarChart3,
  'Airbnb Clone': Home
}

// Project data moved outside component to prevent recreation
const COMPLETE_APPS = [
  {
    id: 'snooker',
    title: 'SnookerPlay',
    description: 'A full-stack tournament management platform for snooker clubs and players featuring secure authentication, payment processing, and automated tournament organization with real-time notifications.',
    technologies: ['React 19', 'Vite', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'Clerk',, 'Nodemailer'],
    liveUrl: '#',
    githubUrl: 'https://github.com/JaiminR7/SnookerPlay',
    color: '#4ade80',
    icon: 'SnookerPlay'
  },
  {
    id: 'erp',
    title: 'Employee Management System',
    description: 'Comprehensive HR automation platform with GPS-verified attendance tracking, real-time salary calculations, admin approval workflows, and interactive analytics dashboards for on-site and field workers.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Recharts'],
    liveUrl: '#',
    githubUrl: 'https://github.com/cs-cspit/SEM5-SGP-67-82',
    color: '#8b5cf6',
    icon: 'ERP System'
  },
  {
    id: 'airbnb',
    title: 'House Rental System',
    description: 'Full-stack property rental platform with user authentication, booking management, payment processing, property listings, reviews, mulltr',
    technologies: ['React', 'Node.js', 'MongoDB', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/JaiminR7/SGP2',
    color: '#ff6b35',
    icon: 'Airbnb Clone'
  }
]

const SMALL_PROJECTS = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Personal portfolio with dark terminal theme and smooth animations',
    technologies: ['React', 'Vite', 'Framer Motion'],
    githubUrl: '#',
    icon: 'User'
  },
  {
    id: 'headphones',
    title: 'Headphone Store',
    description: 'Clean ecommerce website for premium headphones with modern UI',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
    icon: 'Headphones'
  },
  {
    id: 'flutter',
    title: 'Flutter Mini Projects',
    description: 'Collection of Flutter apps',
    technologies: ['Flutter', 'Dart'],
    githubUrl: '#',
    icon: 'Smartphone'
  }
]

// Memoized components for better performance
const ProjectIcon = ({ iconName, size = 32, color = 'white', style }) => {
  const IconComponent = iconMap[iconName]
  return IconComponent ? <IconComponent size={size} color={color} style={style} /> : null
}

const ProjectCard = ({ project, index, isComplete = false }) => {
  const handleLinkClick = useCallback((e, url) => {
    if (url === '#') {
      e.preventDefault()
    }
  }, [])

  return (
    <motion.div
      className={`project-card ${isComplete ? 'complete-app' : 'small-project'}`}
      variants={fadeInUp}
      transition={{ delay: index * (isComplete ? 0.1 : 0.05), duration: 0.6 }}
    >
      {isComplete && (
        <div className="project-image">
          <div className="project-preview" style={{ borderColor: project.color }}>
            <div className="project-icon" style={{ backgroundColor: project.color }}>
              <ProjectIcon iconName={project.icon} />
            </div>
          </div>
        </div>
      )}

      {!isComplete && (
        <div className="project-icon-small">
          <ProjectIcon iconName={project.icon} />
        </div>
      )}

      <div className="project-content">
        <div className="project-tech">
          {project.technologies.join(' ')}
        </div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-links">
          {isComplete && (
            <a
              href={project.liveUrl}
              className="project-link live-link"
              onClick={(e) => handleLinkClick(e, project.liveUrl)}
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
          <a
            href={project.githubUrl}
            className="project-link github-link"
            onClick={(e) => handleLinkClick(e, project.githubUrl)}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const completeApps = useMemo(() => COMPLETE_APPS, [])
  const smallProjects = useMemo(() => SMALL_PROJECTS, [])

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="portfolio-header">
          <motion.h2
            className="section-title"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            /projects
          </motion.h2>
          <motion.p
            className="portfolio-subtitle"
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            List of my projects
          </motion.p>
        </div>

        {/* Complete Apps Section */}
        <motion.div
          className="project-section"
          {...fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h3 className="project-category-title">#complete-apps</h3>
          <motion.div
            className="complete-apps-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {completeApps.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isComplete={true}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Small Projects Section */}
        <motion.div
          className="project-section"
          {...fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h3 className="project-category-title">#small-projects</h3>
          <motion.div
            className="small-projects-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {smallProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isComplete={false}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio