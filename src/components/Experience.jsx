import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ExperienceTimeline.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Software Developer Intern",
            company: "Lunarbounds",
            description: "Testing and debugging API endpoints with Postman to ensure seamless frontend-backend integration. Crafting clean, efficient code with a focus on user experience and accessibility. Gaining hands-on experience in frontend development and web design principles.",

        },
        {
            id: 2,
            role: "Web Developer",
            company: "Freelancer",
            description: "Designed and developed sleek landing pages for chartered accounting firms. Implemented user-friendly interfaces to enhance client. Engagement and boost conversion rates.  Translated design concepts into high-quality HTML, CSS, and JavaScript code.",

        },
        {
            id: 3,
            role: "Web Developer Intern",
            company: "Prodigy Infotech",
            description: "Worked on a team to implement key features. Translated design into high-quality code. Ensured the technical feasibility of UI/UX designs. Provided training for continuous updating of websites.",

        },
        {
            id: 4,
            role: "Python with Machine Learning Intern",
            company: "Tech Access Learning Pvt Ltd",
            description: "Worked on a team to implement key features and functionality using Developed GUI web applications under the guidance of mentor. Participated in code reviews, debugging, and troubleshooting to ensure high-quality software deliverables. Trained new recruits to manage projects and mentored them to handle new projects. Actively contributed to the documentation and knowledge sharing within the team, ensuring smooth knowledge transfer",
        }
    ];

    const [selectedExp, setSelectedExp] = useState(experiences[0]);

    return (
        <div name="experience" className="experience-section-timeline">
            <div className="container">
                <motion.h2 className="section-title">
                    Work <span>Experience</span>
                </motion.h2>

                <div className="timeline-layout">
                    <div className="timeline-list">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className={`timeline-item ${selectedExp.id === exp.id ? 'active' : ''}`}
                                onClick={() => setSelectedExp(exp)}
                            >
                                <span className="period">{exp.period}</span>
                                <h3>{exp.company}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="timeline-detail">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedExp.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="detail-content"
                            >
                                <h3>{selectedExp.role} @ <span className="highlight">{selectedExp.company}</span></h3>
                                <p className="description">{selectedExp.description}</p>

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
