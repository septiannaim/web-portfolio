import React from 'react';
import { FaCar, FaCoffee } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 80vh;
  padding: 6rem 2rem 2rem 2rem;
  background: #0a192f;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: bold;
  letter-spacing: -1px;
`;
const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background: #233554;
    transform: translateX(-50%);
  }
`;
const Item = styled.div`
  position: relative;
  width: 50%;
  padding: 2rem 2rem 2rem 4rem;
  background: #1a2236;
  border-radius: 12px;
  margin-bottom: 3rem;
  left: ${props => props.$right ? '50%' : '0'};
  transform: translateX(${props => props.$right ? '10%' : '-10%'});
  box-shadow: 0 4px 24px #0002;
  z-index: 2;
  @media (max-width: 900px) {
    width: 90%;
    left: 0;
    transform: none;
    padding: 2rem;
  }
`;
const IconCircle = styled.div`
  position: absolute;
  top: 2rem;
  left: -2.5rem;
  width: 48px;
  height: 48px;
  background: #0a192f;
  border: 4px solid #64ffda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  z-index: 3;
`;
const Date = styled.div`
  position: absolute;
  top: 2rem;
  right: -12rem;
  color: #64ffda;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 900px) {
    right: auto;
    left: 0;
    top: 4.5rem;
    font-size: 0.95rem;
  }
`;
const JobTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;
const Company = styled.div`
  color: #64ffda;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;
const Desc = styled.ul`
  color: #bfc9d8;
  font-size: 1rem;
  padding-left: 1.2rem;
  li { margin-bottom: 0.5rem; }
`;

const jobs = [
  {
    icon: <FaCoffee />,
    title: 'React.js Developer',
    company: 'Starbucks',
    date: 'Mar 2020 - Apr 2021',
    desc: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ],
    right: false
  },
  {
    icon: <FaCar />,
    title: 'React Native Developer',
    company: 'Tesla',
    date: 'Jan 2021 - Feb 2022',
    desc: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ],
    right: true
  }
];

const WorkExperience = () => (
  <Section id="work-experience">
    <Title>
      Work Experience
    </Title>
    <Timeline>
      {jobs.map((job, i) => (
        <Item
          key={i}
          $right={job.right}
        >
          <IconCircle>{job.icon}</IconCircle>
          <Date>{job.date}</Date>
          <JobTitle>{job.title}</JobTitle>
          <Company>{job.company}</Company>
          <Desc>
            {job.desc.map((d, idx) => <li key={idx}>{d}</li>)}
          </Desc>
        </Item>
      ))}
    </Timeline>
  </Section>
);

export default WorkExperience; 