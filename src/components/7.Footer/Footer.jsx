import "./Footer.css";
import {FaPhone, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src="assets/logo.png" alt="Company Logo" className="footer-logo" />
                    <p className="footer-company-name">ABS Company</p>
                </div>
                <div className="footer-nav">
                    <a href="#home">Home</a>
                    <a href="#services">Service</a>
                    <a href="#about">Project</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-contact">
                    <p>123, City, Country</p>
                    <p><FaPhone /> +1 (234) 567-8901</p>
                    <p><FaEnvelope /> info@yourcompany.com</p>
                    <p><FaMapMarkerAlt /> 123 Your Address, City, Country</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p> &copy; {new Date().getFullYear()} ABS Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;