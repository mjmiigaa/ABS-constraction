import "./Project.css";

const ProjectData = [
  {
    id: "project1",
    title: "Professional Website Development",
    description: "We create stunning and functional websites. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    image: "assets/1.jpg",
    link: "/project1"
  },
  {
    id: "project2",
    title: "E-commerce Platform",
    description: "Build your online store with us. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    image: "assets/3.jpg",
    link: "/project2"
  },
  {
    id: "project3",
    title: "Mobile App Development",
    description: "Innovative mobile solutions for your business. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    image: "assets/1.jpg",
    link: "/project3"
  }
];

const Project = () => {
  return (
    <section id="projects" className="project">
        <h2 className="project_title">Our Projects</h2>
          {ProjectData.map((project, index) => (
            <div key={project.id} 
            className={`project_item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="project_item_content">
                <img src={project.image} alt={project.title} className="project_image" />
                </div>
                <div className="project-info">
                  <h3 className="project_item_title">{project.title}</h3>
                  <p className="project_item_description">{project.description}</p>
                  <a href={project.link} className="project-button">Read more</a>
                </div>
              </div>
          ))}
    </section>
  );
};

export default Project;