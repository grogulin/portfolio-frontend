import React from 'react';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';





const ProjectCard = ({ project }) => {

  const converter = new QuillDeltaToHtmlConverter(project.description.ops, {});

  return (
    // <div className="project-card card bg-transparent border-0 rounded-lg shadow">
    <div>
      <Row>
        {/* Left part */}
        <div className="card-body">
          <h4 className="card-title">{project.name}</h4>
            <div className="card-text mt-2" dangerouslySetInnerHTML={{ __html: converter.convert() }}>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={8} className='d-flex align-items-center'>
        <div className="mt-2">
          <div className="hashtag-list">
            {project.tech_stack.split(', ').map((tech, index) => (
              <span key={index} className="hashtag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        </Col>
        {/* Right part */}
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center">
          <a href={project.link} className="btn btn-primary mb-2 w-100 mt-2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="btn-icon" />
            Try it
          </a>
          <a href={project.github_link} className="btn btn-primary w-100" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="btn-icon" />
            Code
          </a>
        </Col>
      </Row>
    </div>
  )
};

export default ProjectCard;
