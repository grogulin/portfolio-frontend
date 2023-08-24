// App.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import '../App.css';
import LoadingOverlay from './LoadingOverlay';
import Header from './Header';
import Bio from './Bio';
import ProjectsPane from './ProjectsPane';
import Footer from './Footer';
import backendURL from '../config';

function App() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${backendURL}/projects`)
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Container>

        <Row>
          <Header title="Hi there and welcome!" />
        </Row>
        {/* <Row className='test'>
          <Col md={5} className='test-left'>
            Test
          </Col>
          <Col md={7} className='test-right'>
            Test
          </Col>
        </Row> */}
        <Row>
          <Col xl={5} className='custom-col'>
            <Bio />
          </Col>
          <Col xl={{ size: 6, offset: 1}} className='custom-col custom-col-spacing'>
            <ProjectsPane projects={projects} />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
      <LoadingOverlay isLoading={loading} />
    </div>
  );
}

export default App;
