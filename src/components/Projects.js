import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const ProjectsTitle = styled(motion.h2)`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: #112240;
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #ccd6f6;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  span {
    color: #64ffda;
    font-size: 0.9rem;
  }
`;

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        github: "https://github.com",
        live: "https://example.com",
        tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        github: "https://github.com",
        live: "https://example.com",
        tech: ["React", "Firebase", "Material-UI", "Redux"]
    },
    {
        title: "Portfolio Website",
        description: "A modern portfolio website showcasing projects and skills, built with React and Three.js for 3D animations.",
        github: "https://github.com",
        live: "https://example.com",
        tech: ["React", "Three.js", "Styled Components", "Framer Motion"]
    }
];

const Projects = () => {
    return (
        <ProjectsSection id="projects">
            <ProjectsContainer>
                <ProjectsTitle
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </ProjectsTitle>
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectHeader>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectLinks>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                </ProjectLinks>
                            </ProjectHeader>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <ProjectTech>
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </ProjectTech>
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </ProjectsContainer>
        </ProjectsSection>
    );
};

export default Projects; 