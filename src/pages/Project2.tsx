import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";

const Project2 = () => {
    return (
        <>
            <Header />
            <div className="project-page">
                <h1>Project 2</h1>
                <img src="/public/assets/2.jpg" alt="Project 2 Image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore enim odit rerum inventore dolor, commodi vitae expedita magnam voluptatum quam soluta dignissimos deleniti debitis, reprehenderit, et ipsa placeat perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis aperiam reprehenderit animi rem minus non placeat nemo itaque ab quia, tempore unde ipsum incidunt? Alias hic incidunt qui aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas, repellendus iste odio neque facere at quo, quisquam vitae fugiat sint illum minima nulla! Earum laboriosam possimus consequatur voluptate. Nesciunt!</p>

                <div className="navigation-buttons">
                    <a href="/" className="back-link">Back to Home</a>
                    <a href="/project3" className="next-link">Next Project</a>   
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
};

export default Project2;
