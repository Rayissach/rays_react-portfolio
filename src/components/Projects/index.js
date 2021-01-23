import React from 'react';
import {ProjectContainer, ProjectWrapper, ProjectCards, Span1, Span2, Span3, Span4} from './projectElements.js'; 

const Projects = () => {
  return (
      <ProjectContainer class='container'>
        <ProjectWrapper class='card'>
        <Span1></Span1>
          <Span2></Span2>
          <Span3></Span3>
          <Span4></Span4>
          <ProjectCards class='content'>
            Hello
          </ProjectCards>
        </ProjectWrapper>
      </ProjectContainer>
  )
}

export default Projects;
