import { motion } from 'framer-motion';
import '../styles/Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <motion.div
                className="loader-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="scanner"></div>
                <h1 className="glitch" data-text="INITIALIZING...">INITIALIZING...</h1>
                <div className="loading-bar">
                    <motion.div
                        className="progress"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>
                <div className="loading-text">
                    <span>SYSTEM</span>
                    <span>READY</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Preloader;
