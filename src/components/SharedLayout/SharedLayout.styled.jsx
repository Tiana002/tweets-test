import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #ffffff;

  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;

  &.active {
    background-color: #625df5;
  }
`;

export const Footer = styled.footer`
  padding: 30px 0;
  margin-top: 16px;
  border-top: 1px solid #ffffff;
`;

export const Paragraph = styled.p`
  text-align: center;
  text-shadow: 0 0 5px #625df5, 0 0 10px #625df5, 0 0 20px #625df5, 0 0 40px #625df5, 0 0 80px #625df5;
`;

export const Logo = styled.div`
  font-weight: 700;
  display: flex;
  color: #ffffff;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 5px;
  font-size: 40px;
  margin: 0;
`;
export const Text = styled.h1`
  font-family: 'Righteous';
  font-size: 30px;
	margin-left: 5px;
`;


