import React from 'react'
import { motion } from 'framer-motion'
import './Quote.css'

const Quote = () => {
    return (
        <section className="quote-section">
            <div className="container">
                <motion.div
                    className="quote-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="quote-mark-left">"</div>
                    <div className="quote-content">
                        <p className="quote-text">With great power comes great electricity bill</p>
                        <div className="quote-attribution">
                            <div className="quote-mark-right">"</div>
                            <span className="quote-author">— Dr. Who</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Quote