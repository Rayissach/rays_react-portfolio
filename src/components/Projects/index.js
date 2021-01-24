import React from 'react';
import {ProjectContainer, ProjectWrapper, ProjectCards, CardContainer,PrjP, Span1, Span2, Span3, Span4} from './projectElements.js'; 

const Projects = () => {
  return (
      <ProjectContainer class='container'>
        <CardContainer>
          <ProjectWrapper class='card'>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
            <ProjectCards class='content'>
            <PrjP>Project #1</PrjP>
            </ProjectCards>
          </ProjectWrapper>
        </CardContainer>

        <CardContainer>
          <ProjectWrapper class='card'>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
            <ProjectCards class='content'>
            <PrjP>Project #2</PrjP>
            </ProjectCards>
          </ProjectWrapper>
        </CardContainer>

        <CardContainer>
          <ProjectWrapper class='card'>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
            <ProjectCards class='content'>
            <PrjP>Project #3</PrjP>
            </ProjectCards>
          </ProjectWrapper>
        </CardContainer>

        <CardContainer>
          <ProjectWrapper class='card'>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
            <ProjectCards class='content'>
              <PrjP>Project #4</PrjP>
            </ProjectCards>
          </ProjectWrapper>
        </CardContainer>

        <CardContainer>
          <ProjectWrapper class='card'>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
            <ProjectCards class='content'>
              <PrjP>Project #5</PrjP>
            </ProjectCards>
          </ProjectWrapper>
        </CardContainer>

        <CardContainer>
          <ProjectWrapper class='card'>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
            <ProjectCards class='content'>
              <PrjP>Project #6</PrjP>
            </ProjectCards>
          </ProjectWrapper>
        </CardContainer>
      </ProjectContainer>
  )
}

export default Projects;
