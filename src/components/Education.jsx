import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor in Computer Application",
            institution: "Sri Guru Tegh Bahadur Institute of Management & Information Technology | GGSIPU",
            year: "2020 - 2023 | Completed",
            image: "/assets/college.jpeg"
        },
        {
            id: 2,
            degree: "Commerce with Information Practices",
            institution: "North Delhi Public School | CBSE",
            year: "2019 - 2020 | Completed",
            image: "/assets/school.jpeg"
        }
    ];

    return (
        <div name="education" className="education-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <span>Education</span>
                </motion.h2>

                <div className="education-container">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="education-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="edu-image">
                                <img src={item.image} alt={item.institution} />
                            </div>
                            <div className="edu-content">
                                <h3>{item.degree}</h3>
                                <p className="institution">{item.institution}</p>
                                <span className="year">{item.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
