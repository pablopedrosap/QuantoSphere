import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaChartLine, FaCog, FaRocket, FaQuestionCircle } from 'react-icons/fa';

// Global Styles
const theme = {
  primaryColor: '#FFFFFF',  // Pure white background for content
  navBackground: '#F8F8F8',  // Very light grey for nav
  textColor: '#333333',  // Dark grey text for both nav and content
  activeTextColor: '#007bff',  // Blue for active links
};


// Styled Components
const DashboardContainer = styled.div`
  display: flex;
`;

const DashboardNav = styled.nav`
  flex: 0 0 150px;
  padding: 2rem;
  background-color: ${theme.navBackground};
  color: ${theme.textColor};
  position: sticky;
  top: 0;
  height: 100vh;
`;

const LogoContainer = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavLink = styled.li<{ isActive: boolean }>`
  margin: 1rem 0;
  a {
    text-decoration: none;
    color: ${props => props.isActive ? theme.activeTextColor : theme.textColor};
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
  }

`;

const DashboardContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

// Functional Component
const Dashboard: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname.includes(path);
  }

  return (
    <DashboardContainer>
      <DashboardNav>
        <LogoContainer>Quant</LogoContainer>
        <NavLinks>
          <NavLink isActive={isActive('profile')}>
            <Link to="profile"><FaUser /> Profile</Link>
          </NavLink>
          <NavLink isActive={isActive('strategies')}>
            <Link to="strategies"><FaChartLine /> Strategies</Link>
          </NavLink>
          <NavLink isActive={isActive('backtest')}>
            <Link to="backtest"><FaCog /> Backtest</Link>
          </NavLink>
          <NavLink isActive={isActive('deploy')}>
            <Link to="deploy"><FaRocket /> Deploy</Link>
          </NavLink>
          <NavLink isActive={isActive('help')}>
            <Link to="help"><FaQuestionCircle /> Help</Link>
          </NavLink>
        </NavLinks>
      </DashboardNav>
      <DashboardContent>
        <Outlet />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
