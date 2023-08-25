import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';


function ProjectForm({ onSave, onCancel, initialData, formType }) {
    const [formData, setFormData] = useState(initialData || {});
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData(prevData => ({ ...prevData, [name]: value }));
    };
  
    const handleQuillChange = value => {
      setFormData(prevData => ({ ...prevData, description: value }));
      console.log(value)
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      onSave(formData);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Tech Stack</Label>
              <Input
                type="text"
                name="tech_stack"
                value={formData.tech_stack || ''}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Link</Label>
              <Input
                type="text"
                name="link"
                value={formData.link || ''}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>GitHub Link</Label>
              <Input
                type="text"
                name="github_link"
                value={formData.github_link || ''}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <ReactQuill value={formData.description || ''} onChange={handleQuillChange} />
            </FormGroup>
            {/* Show different buttons based on formType */}
            {formType === 'edit' ? (
              <>
                <Button type="submit" color="success" className='project-form-button contact-button'>
                  <FontAwesomeIcon icon={faSave} className="btn-icon" />
                  Save
                </Button>
                <Button type="button" color="danger" className='project-form-button contact-button' onClick={onCancel}>
                  <FontAwesomeIcon icon={faTimes} className="btn-icon" />
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button type="submit" color="primary" className='project-form-button contact-button'>
                  <FontAwesomeIcon icon={faSave} className="btn-icon" />
                  Create
                </Button>
                <Button type="button" color="danger" className='project-form-button contact-button' onClick={onCancel}>
                  <FontAwesomeIcon icon={faTimes} className="btn-icon" />
                  Cancel
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Form>
    );
}

export default ProjectForm;
  