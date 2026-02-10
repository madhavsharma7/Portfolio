import { useState } from "react";
import { motion, warning } from "framer-motion";
import { FaPaperPlane, FaPhone, FaFileDownload } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
    const [msg, setMsg] = useState("");
    const [isError, setIsError] = useState(false);

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxCdu4CjLpl-JFNEeAIBRun6gE6z60zb3pKoeCrwRS0XK2glB_mozLw4QVaVW2ju4t8/exec";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // setMsg("Sending...");
        setIsError(false);

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result === "success") {
                    alert("Message sent successfully");
                    setIsError(false);
                    form.reset();
                    setTimeout(() => setMsg(""), 5000);
                } else {
                    throw new Error(data.error || "Submission failed");
                }
            })
            .catch((err) => {
                console.error("Error:", err);
                warning("Failed to send message");
                setIsError(true);
            });
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

                        <a
                            href="/assets/Madhav Sharma Resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn download-btn"
                        >
                            Download Resume <FaFileDownload />
                        </a>
                    </motion.div>

                    <motion.div
                        className="contact-right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                name="Email"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                name="Message"
                                placeholder="Your Message"
                                rows="6"
                                required
                            ></textarea>

                            <button type="submit" className="btn submit-btn">
                                Submit
                            </button>
                        </form>

                        {msg && (
                            <span className={`msg ${isError ? "error" : ""}`}>
                                {msg}
                            </span>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
