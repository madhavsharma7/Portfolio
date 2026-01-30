import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress, FaPython, FaPhp, FaJava, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiMysql, SiSqlite, SiCplusplus } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
    const skillsData = {
        Frontend: [
            { name: 'HTML', icon: <FaHtml5 className="skill-icon" color="#e34c26" /> },
            { name: 'CSS', icon: <FaCss3Alt className="skill-icon" color="#264de4" /> },
            { name: 'JavaScript', icon: <FaJs className="skill-icon" color="#f0db4f" /> },
            { name: 'React', icon: <FaReact className="skill-icon" color="#61dbfb" /> },
            { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon" color="#7952b3" /> },
            { name: 'Wordpress', icon: <FaWordpress className="skill-icon" color="#21759b" /> },
        ],
        Backend: [
            { name: 'MySQL', icon: <SiMysql className="skill-icon" color="#00758f" /> },
            { name: 'SQLite', icon: <SiSqlite className="skill-icon" color="#003b57" /> },
            { name: 'PHP', icon: <FaPhp className="skill-icon" color="#787cb5" /> },
            { name: 'Python', icon: <FaPython className="skill-icon" color="#3776ab" /> },
        ],
        Other: [
            { name: 'C', icon: <span className="text-icon">C</span> }, /* No specific icon in fa for C, using text fallback or could use generic code icon */
            { name: 'C++', icon: <SiCplusplus className="skill-icon" color="#00599c" /> },
            { name: 'Git', icon: <FaGitAlt className="skill-icon" color="#f05032" /> },
            { name: 'Java', icon: <FaJava className="skill-icon" color="#007396" /> },
            { name: 'Linux', icon: <FaLinux className="skill-icon" color="#fcc624" /> },
        ]
    };

    return (
        <div name="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & <span>Ability</span>
                </motion.h2>

                {Object.entries(skillsData).map(([category, skills], catIndex) => (
                    <div key={category} className="skill-category">
                        <h3 className="category-title">{category}</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-card"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="icon-wrapper">
                                        {skill.icon}
                                    </div>
                                    <p>{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
