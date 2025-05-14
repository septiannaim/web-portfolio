import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: #64ffda;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  color: #8892b0;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  
  li {
    color: #ccd6f6;
    list-style: none;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #64ffda;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutTitle>
          About Me
        </AboutTitle>
        <AboutContent>
          <AboutText>
            <p>
              Hello! I'm a passionate full-stack developer with a strong foundation in web technologies
              and a keen eye for creating elegant solutions. I enjoy building things that live on the
              internet, whether that be websites, applications, or anything in between.
            </p>
            <p>
              My journey in web development started back in 2019 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at various companies and
              on various projects. My main focus these days is building accessible, human-centered
              products.
            </p>
          </AboutText>
          <SkillsList>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Docker</li>
            </ul>
          </SkillsList>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 