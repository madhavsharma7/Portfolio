import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    return (
        <div name="about" className="about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About <span>Me</span></h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src="/assets/photo.jpg" alt="Madhav Sharma" />
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>I'm Madhav Sharma</h3>
                        <span className="tag">Full Stack Developer</span>
                        <p>
                            Hi, I’m a Full Stack Developer from Delhi with a BCA degree from GGSIP University.
                            I’m passionate about building modern web applications and improving my coding skills.
                            I’ve developed several full-stack projects, including E-commerce platforms,
                            a News app, and my Portfolio website, focusing on clean UI and scalable solutions.
                        </p>

                        <div className="info-box">
                            <p><span>Email:</span> madhav032000@gmail.com</p>
                            <p><span>Place:</span> Delhi, India - 110033</p>
                        </div>

                        <div className="resume-btn-container">
                            <a href="/assets/Madhav Sharma Resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn">
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
