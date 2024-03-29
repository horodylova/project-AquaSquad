import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const RouterLink = styled(Link)`
  width: 84px;
  position: relative;
  font-size: 16px;
  line-height: 20px;
   color: #407BFF; //change to global const
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: #FF9D43; //change to global const
    transition: color 0.3s ease;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #FF9D43; //change to global const
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeaderIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  fill: #ffffff; //change to global const
  stroke: #2F2F2F; //change to global const
`;
