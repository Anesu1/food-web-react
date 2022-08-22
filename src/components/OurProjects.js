/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import { VscArrowRight } from "react-icons/vsc";
import {Link} from 'react-scroll';

const Wrapper = styled.section`
  padding:10% 5%;
  @media(min-width:1200px){
      padding:5% 15%;
  }
  .inner{
      margin-bottom:30px;
      @media(min-width:768px){
          display:flex;
          justify-content:space-between;
      }
      img{
          width:100%;
        margin-bottom:20px;
        @media(min-width:768px){
            width:45%;
        }
      }
      .text{
        @media(min-width:768px){
            width:50%;
            margin:auto 0;
        }
      }
      h3{
          margin-bottom:15px;
          font-family:${props => props.theme.fam.bold};
          font-size:25px;
      }
      p{
          margin-bottom:20px;
      }
      h5{
          font-family:${props => props.theme.fam.regular};
          font-size:15px;
          margin-bottom:20px;
      }
  }
  .bottom{
    @media(min-width:768px){
            flex-direction:row-reverse;
        }
  }
  h2{
      margin-bottom:80px;
      color:${props => props.theme.color.lightgreen};
  }
  .btn {
    height: 50px;
    border-radius: 8px;
    background: ${(props) => props.theme.color.green};
    color: #fff;
    font-family: ${(props) => props.theme.fam.regular};
    display: flex;
    font-size: 15px;
    align-items: center;
    width: max-content;
    justify-content: space-between;
    padding: 0 10px;
    cursor: pointer;
    /* @media (min-width: 992px) {
      margin-left: 12%;
    } */
    span {
      margin: 0 10px;
    }
    .btn-icon {
      height: 37px;
      width: 37px;
      background: #fff;
      color: ${(props) => props.theme.color.darkgreen};
      border-radius: 8px;
      display: flex;
      margin-left: 50px;
      align-items: center;
      justify-content: center;
    }
  }
`;

function OurProjects() {
  return (
    <Wrapper id="projects">
      <Heading>Our Projects</Heading>
      <div className="inner">
        <img src="./images/projects.png" alt="Marara Waste Project" />
        <div className="text">
          <h3>Marara Waste Project</h3>
          <Paragraph>
            Chirundu based project headed by a powerful team of women and funded
            by Rhinoforce. We were priveleged to consult with this group of
            motivated women and to consult on more sustainable ways of
            collecting the vast amounts of waste discarded by the constant flow
            of trucks waiting to cross this busy border post. 30km lines of
            vehicles often waiting days and consuming plastic bottles of soft
            drinks and water. The bins were designed by Alitab to be not only
            easy to use when the women have to tip them to empty but also to be
            baboon proof!
          </Paragraph>
          <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500} className="btn">
            <span>Find out more</span>
            <span className="btn-icon">
              <VscArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="inner bottom">
        <img src="./images/projects1.png" alt="Waste Transfer Center" />
        <div className="text">
          <h3>Waste Transfer Center</h3>
          <h5>Current Project</h5>
          <Paragraph>
            Currently ALITAB is running a project in Mbare (Harare) for a
            community waste transfer center, in partnership with Medecins Sans
            Frontieres (MSF) and Norwegian Retailer Fund (NREF)
          </Paragraph>
          <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500} className="btn">
            <span>Find out more</span>
            <span className="btn-icon">
              <VscArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default OurProjects;
