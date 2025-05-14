import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import css from './assets/tech/css.png';
import docker from './assets/tech/docker.png';
import figma from './assets/tech/figma.png';
import git from './assets/tech/git.png';
import html from './assets/tech/html.png';
import javascript from './assets/tech/javascript.png';
import mongodb from './assets/tech/mongodb.png';
import nodejs from './assets/tech/nodejs.png';
import reactjs from './assets/tech/reactjs.png';
import redux from './assets/tech/redux.png';
import tailwind from './assets/tech/tailwind.png';
import threejs from './assets/tech/threejs.svg';
import typescript from './assets/tech/typescript.png';
import About from './components/About';
import BallCanvas from './components/BallCanvas';
import { Computers } from './components/ComputersCanvas';
import Contact from './components/Contact';
import EarthCanvas from './components/EarthCanvas';
import Projects from './components/Projects';
import Starfield from './components/Starfield';
import WorkExperience from './components/WorkExperience';

// Styled Components
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(120deg, #0a192f 60%, #112240 100%);
  color: #ccd6f6;
`;

const Nav = styled.nav`
  padding: 1.5rem 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background: rgba(10, 25, 47, 0.92);
  backdrop-filter: blur(10px);
`;

const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  color: #64ffda;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  a {
    color: #ccd6f6;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.3s ease;
    &:hover {
      color: #64ffda;
    }
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4vw;
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  gap: 2vw;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 7rem;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ccd6f6;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #8892b0;
  margin-bottom: 2rem;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const AboutHero = styled.p`
  color: #bfc9d8;
  font-size: 1.15rem;
  margin-bottom: 2rem;
  max-width: 500px;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.3s cubic-bezier(.4,2,.3,1);
  box-shadow: 0 2px 16px #64ffda22;
  &:hover {
    background: #64ffda;
    color: #0a192f;
    box-shadow: 0 4px 32px #64ffda44;
    border-color: #64ffda;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  a {
    color: #ccd6f6;
    font-size: 1.7rem;
    transition: color 0.3s ease, transform 0.2s;
    &:hover {
      color: #64ffda;
      transform: scale(1.15);
    }
  }
`;

const CanvasWrapper = styled.div`
  flex: 1;
  min-width: 320px;
  height: 480px;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 100%;
    height: 320px;
    min-width: 0;
    margin-top: 2rem;
  }
`;

const Ball = styled.div`
  position: absolute;
  border-radius: 50%;
  background: #64ffda44;
  z-index: 0;
`;

const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.2rem 2vw 1.5rem 2vw;
  @media (max-width: 600px) {
    padding: 1.2rem 2vw 1rem 2vw;
  }
`;

const TechIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1.5rem 2.2rem;
  justify-items: center;
  align-items: center;
  max-width: 700px;
  margin: 2rem auto 1.2rem auto;
  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 400px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 200px;
  }
`;

const ContactPlanetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ContactContent = styled.div`
  flex: 1.2;
  min-width: 320px;
`;

const PlanetCanvasBox = styled.div`
  flex: 1;
  min-width: 260px;
  max-width: 340px;
  height: 420px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 2.5rem;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 320px;
    height: 220px;
    margin-top: 1.2rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <Starfield />
      <Nav>
        <NavInner>
          <Logo>Portfolio</Logo>
          <NavLinks>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </NavLinks>
        </NavInner>
      </Nav>
      <HeroSection>
        <Ball style={{ width: 60, height: 60, left: 30, top: 80 }} />
        <Ball style={{ width: 30, height: 30, right: 80, top: 120 }} />
        <Ball style={{ width: 18, height: 18, left: 200, bottom: 60 }} />
        <HeroContent>
          <Title>
            Hi, I'm Septian Na'im
          </Title>
          <Subtitle>
            Full Stack Developer
          </Subtitle>
          <AboutHero>
            Passionate about building modern web applications, interactive UIs, and creative digital experiences. Always learning, always coding.
          </AboutHero>
          <Button>
            View My Work
          </Button>
          <SocialLinks>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialLinks>
        </HeroContent>
        <CanvasWrapper>
          <Canvas camera={{ position: [20, 3, 5], fov: 25 }}>
            <Computers isMobile={false} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </CanvasWrapper>
      </HeroSection>
      <About />
      <SectionContainer as="section" id="work-experience">
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ccd6f6' }}>
          Work Experience
        </h2>
        <WorkExperience />
        <TechIconsWrapper>
          {[html, css, javascript, typescript, reactjs, redux, tailwind, nodejs, mongodb, git, docker, figma, threejs].map((icon, i) => (
            <div key={i}>
              <BallCanvas icon={icon} />
            </div>
          ))}
        </TechIconsWrapper>
      </SectionContainer>
      <SectionContainer as="section" id="projects">
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ccd6f6' }}>
          Projects
        </h2>
        <Projects />
      </SectionContainer>
      <SectionContainer as="section" id="contact">
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ccd6f6' }}>
          Contact
        </h2>
        <ContactPlanetWrapper>
          <ContactContent>
            <Contact />
          </ContactContent>
          <PlanetCanvasBox>
            <EarthCanvas />
          </PlanetCanvasBox>
        </ContactPlanetWrapper>
      </SectionContainer>
    </AppContainer>
  );
}

export default App;
