import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  padding: 1rem;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;

const Brand = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Menu = styled.div`
  a {
    margin-left: 20px;
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroSection = styled.section`
  background-color: #f1f1f1;
  text-align: left;
  padding-top: calc(1rem + 2rem); // Adding the padding of Nav to adjust the section
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #767;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const Buttons = styled.div`
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
`;

// Functional Component
const Homepage = () => {
  return (
    <>
      <Nav>
        <Container>
          <Brand to="/">QuantoSphere</Brand>
          <Menu>
            <Link to="/features">Features</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </Menu>
        </Container>
      </Nav>
      <HeroSection>
        <Title>THE NEW GATEWAY TO QUANTITATIVE FINANCE</Title>
        <Subtitle>Automate and improve your strategy with the help of machine learning.</Subtitle>
        <Buttons>
          <Button onClick={() => window.location.href='/strategy'}>Define My Strategy</Button>
          <Button onClick={() => window.location.href='/login'}>Login</Button>
        </Buttons>
      </HeroSection>
    </>
  );
};

export default Homepage;
