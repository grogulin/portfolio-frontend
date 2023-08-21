import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Quill from 'quill';


function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    // Fetch projects data from the /projects endpoint
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch('https://freedevdom.mooo.com/portfolio/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  };

  function htmlToDelta(html) {
    const quillContainer = document.createElement('div');
    quillContainer.innerHTML = html;
    const quill = new Quill(quillContainer);
    return quill.getContents();
  }

  const handleEditClick = project => {
    setEditingProject({ ...project, isNew: false }); // If the project is not an empty object, it's an existing project
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  const handleCreateClick = () => {
    setEditingProject({ isNew: true });
  };
  
  const handleSaveEdit = async updatedProject => {
    if (editingProject.isNew) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://freedevdom.mooo.com/portfolio/api/projects/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...updatedProject,
            description: htmlToDelta(updatedProject.description),
          }),
        });
  
        if (response.ok) {
          console.log('New project created successfully.');
          fetchProjects();
        } else {
          console.error('Error creating new project:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating new project:', error);
      }
    } else {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://freedevdom.mooo.com/portfolio/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...updatedProject,
            description: htmlToDelta(updatedProject.description),
          }),
        });
  
        if (response.ok) {
          console.log('Project updated successfully.');
          fetchProjects();
        } else {
          console.error('Error updating project:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating project:', error);
      }
    }
  
    // Clear editing state
    setEditingProject(null);
  };
  
  

  const handleDelete = async projectId => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://freedevdom.mooo.com/portfolio/api/projects/${projectId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
      });
      if (response.ok) {
        console.log('Project deleted successfully.');
        fetchProjects();
      } else {
        console.error('Error deleting project:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">Projects</h1>

      {/* Introductory row */}
      <Row className="mb-4">
        <Col md={12} className="text-center">
          <div className="add-project" onClick={handleCreateClick}>
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Describe new project
          </div>
        </Col>
      </Row>

      {/* Editing UI for creating or editing a project */}
      {editingProject !== null && (
        <Row>
          <Col md={12}>
            <ProjectForm
              initialData={editingProject}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
              formType={editingProject.isNew ? 'create' : 'edit'} // Pass formType based on editingProject.id
            />
          </Col>
        </Row>
      )}

      {/* Mapping through projects */}
      {projects.map(project => (
        <Row key={project.id}>
          <Col md={10}>
            <ProjectCard project={project} />
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-center">
            <button className="btn btn-transparent mx-2" onClick={() => handleEditClick(project)}>
              <FontAwesomeIcon icon={faEdit} size="2x" />
            </button>
            <button className="btn btn-transparent mx-2" onClick={() => handleDelete(project.id)}>
              <FontAwesomeIcon icon={faTrash} size="2x" />
            </button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ProjectsList;
