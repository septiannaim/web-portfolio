import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  width: 100%;
`;

const ContactTitle = styled.h2`
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

const ContactText = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #ccd6f6;
  font-size: 0.9rem;
`;

const Input = styled.input`
  background: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 1rem;
  color: #ccd6f6;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const TextArea = styled.textarea`
  background: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 1rem;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const SubmitButton = styled.button`
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically handle the form submission
    // For example, sending the data to an API endpoint

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>
          Get In Touch
        </ContactTitle>
        <ContactText>
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </ContactText>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 