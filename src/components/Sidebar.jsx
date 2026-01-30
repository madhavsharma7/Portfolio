import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const links = [
        { id: 1, link: 'home', icon: <FaHome />, text: 'Home' },
        { id: 2, link: 'about', icon: <FaUser />, text: 'About' },
        { id: 3, link: 'skills', icon: <FaCode />, text: 'Skills' },
        { id: 4, link: 'projects', icon: <FaBriefcase />, text: 'Works' },
        { id: 5, link: 'experience', icon: <FaGraduationCap />, text: 'History' },
        { id: 6, link: 'contact', icon: <FaEnvelope />, text: 'Contact' },
    ];

    return (
        <>
            <div className="mobile-toggle" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <h1>MS<span>.</span></h1>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        {links.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.link}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    activeClass="active"
                                    spy={true}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="icon">{item.icon}</span>
                                    <span className="text">{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <p>© 2026</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
