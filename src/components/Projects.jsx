import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectsHorizontal.css';

const Projects = () => {
    // Placeholder data - ideally this comes from a data file
    const projects = [
        {
            id: 1,
            title: "MadCommerce",
            desc: "MadCommerce is a vanilla JavaScript–based eCommerce web app that uses the Fake Store API to showcase products and core cart functionality without a payment gateway.",
            tech: ["Vanilla Javascript", "Fake Store API"],
            img: "../public/assets/projects/Madcommerce .png",
            links: { github: "https://github.com/madhavsharma7/MadCommerce", demo: "https://madcommerce.vercel.app/" }
        },
        {
            id: 2,
            title: "The Press Point",
            desc: "Built a full-stack news app using the GNews API with real-time headlines, category filtering, Google login and a responsive React UI.Backend powered by Express and MongoDB for user auth, saved articles, and data handling",
            tech: ["React", "Express", "NodeJS", "MongoDB", "Gnews API", "Google Auth", "Tailwind CSS"],
            img: "../public/assets/projects/The Press Point.png",
            links: { github: "https://github.com/madhavsharma7/The-Press-Point", demo: "https://the-press-point.vercel.app/" }
        },
        {
            id: 3,
            title: "Cab Booking Landing Page",
            desc: "The Online Cab Booking Website project aims to create a user-friendly site for booking cabs.",
            tech: ["HTML", "CSS", "JS"],
            img: "../public/assets/projects/cab.png",
            links: { github: "https://github.com/madhavsharma7/Taxi-Site", demo: "https://madhavsharma7.github.io/Taxi-Site/" }
        },
        {
            id: 4,
            title: "Weather Dashboard",
            desc: "The Weather App is a simple, responsive web tool that displays real-time weather data for any city using the OpenWeatherMap API.",
            tech: ["HTML", "CSS", "JS", "OpenWeatherMap API"],
            img: "../public/assets/projects/Weather.png",
            links: { github: "https://github.com/madhavsharma7/Weather-App", demo: "https://madhavsharma7.github.io/Weather-App/" }
        },

        {
            id: 5,
            title: "MaddyFitness",
            desc: "The Gym Website project creates a visually appealing site with animations. It helps practice HTML, CSS and JS.",
            tech: ["HTML", "CSS", "JS"],
            img: "../public/assets/projects/gym.png",
            links: { github: "https://github.com/madhavsharma7/Gym-Site", demo: "https://madhavsharma7.github.io/Gym-Site/" }
        },
        {
            id: 6,
            title: "Fitness Club",
            desc: "The Gym Website project creates a visually appealing site with animations. It helps practice HTML, CSS and JS.",
            tech: ["HTML", "CSS", "JS"],
            img: "../public/assets/projects/gym2.png",
            links: { github: "https://github.com/madhavsharma7/Fitness-Club", demo: "https://madhavsharma7.github.io/Fitness-Club/" }
        }
    ];

    return (
        <div name="projects" className="projects-section-horizontal">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Selected <span>Works</span>
                </motion.h2>

                <div className="horizontal-scroll-container">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card-h"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-image">
                                <img src={project.img} alt={project.title} />
                                <div className="card-actions">
                                    <a href={project.links.github}><FaGithub /></a>
                                    <a href={project.links.demo}><FaExternalLinkAlt /></a>
                                </div>
                            </div>
                            <div className="card-info">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="tags">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
