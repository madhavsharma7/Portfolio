import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaFileDownload } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const [msg, setMsg] = useState("");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwwjq-1hbh7P-k3b8qqixpR6iO0qX3nEqK9jsjIbBn93s3XF2iUn2YTw4FWAYLzVnFC/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                setMsg("Message Sent Successfully");
                setTimeout(() => {
                    setMsg("");
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <div name="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get in <span>Touch</span>
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-item">
                            <FaPaperPlane className="icon" />
                            <p>madhav032000@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="icon" />
                            <p>+91-9810688575</p>
                        </div>

                        <a href="/assets/Madhav Sharma Resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn download-btn">
                            Download Resume <FaFileDownload />
                        </a>
                    </motion.div>

                    <motion.div
                        className="contact-right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="text" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" placeholder="Your Message" rows="6"></textarea>
                            <button type="submit" className="btn submit-btn">Submit</button>
                        </form>
                        {msg && <span className="msg">{msg}</span>}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
