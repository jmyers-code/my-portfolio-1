import "../style/ProjectCard.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imgSrc={val.imgSrc}
              title={val.title}
              desc={val.decs}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
