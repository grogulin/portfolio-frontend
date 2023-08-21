import React from 'react';
import ProjectCard from './ProjectCard';
import { Row } from 'reactstrap';

const ProjectsPane = ({ projects }) => {

    return (
        <div className='project-card card border-0 rounded-lg shadow'>
            <Row>
                <h2>My projects:</h2>
            </Row>
            {projects.map(project => (
                <Row key={project.id} className='row-project-card'>
                    <ProjectCard project={project} />
                </Row>
            ))}
        </div>
    )
};

export default ProjectsPane;
