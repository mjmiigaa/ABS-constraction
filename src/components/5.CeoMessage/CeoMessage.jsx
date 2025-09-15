import React, { useEffect } from "react";
import "./CeoMessage.css";

const CeoMessage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#ceo-message") {
            scrollToElement(hash.substring(1));
        }
    }, []);

    return (
        <section id="ceo-message" className="ceo-message">
            <div className="ceo-message-content">
                <div className="ceo-message_image">
                    <img src="/public/assets/person.png" alt="CEO Message"
                    className="ceo-image" 
                    />
                    <p className="ceo-name">CEO</p>
                    <p className="ceo-signature">PullDash</p>
                </div>
                <div className="ceo-message_text">
                    <h2 className="ceo-message_title">Message from the CEO</h2>
                    <p className="ceo-message_description">
                        Welcome to our company! We are committed to delivering the best services to our clients. Our team works tirelessly to innovate and improve our offerings.
                        Thank you for being a part of our journey. We look forward to achieving great things together.
                    </p>
                    <button className="ceo-message_button" onClick={() => { 
                        const element = document.getElementById("contact");
                     if (element) { element.scrollIntoView({ behavior: "smooth" }); 
                } }}>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default CeoMessage;
