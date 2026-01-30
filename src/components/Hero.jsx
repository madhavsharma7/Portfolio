import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import '../styles/HeroGrid.css';

const Hero = () => {
    return (
        <div name="home" className="hero-bento-section">
            <div className="container bento-grid">
                {/* Large Profile Tile */}
                <motion.div
                    className="bento-tile profile-tile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="profile-content">
                        <h1 className="name">Madhav<br />Sharma</h1>
                        <p className="role">Full Stack Developer</p>
                        <div className="status-badge">
                            <span className="dot"></span> Available for work
                        </div>
                    </div>
                    <img src="/assets/hero1.png" alt="Profile" className="profile-img" />
                </motion.div>

                {/* Location Tile */}
                <motion.div
                    className="bento-tile location-tile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="map-bg"></div>
                    <div className="location-info">
                        <FaMapMarkerAlt className="icon" />
                        <h3>Delhi, India</h3>
                        <p>GMT +5:30</p>
                    </div>
                </motion.div>

                {/* Socials Tile */}
                <motion.div
                    className="bento-tile social-tile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a href="https://github.com/madhavsharma7" target="_blank" rel="noopener"><FaGithub /></a>
                    <a href="https://linkedin.com/in/madhavsharma12" target="_blank" rel="noopener"><FaLinkedin /></a>
                    <a href="https://twitter.com/MadhavS200" target="_blank" rel="noopener"><FaTwitter /></a>
                </motion.div>

                {/* Tech Stack Marquee Tile */}
                <motion.div
                    className="bento-tile tech-tile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3>Main Stack</h3>
                    <div className="tech-row">
                        <SiHtml5 /> <SiCss3 /> <SiJavascript /> <SiReact /> <SiNodedotjs /> <SiMongodb /> <SiExpress />
                    </div>
                </motion.div>

                {/* Music Tile Removed */}
            </div>
        </div>
    );
};

export default Hero;
