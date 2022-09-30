/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { VscArrowRight } from "react-icons/vsc";
import Paragraph from "../styled/Paragraph";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  overflow:hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 0 5%;
  position: relative;
  text-align: left;
  @media (min-width: 768px) {
    height: 720px;
  }

  @media (min-width: 1200px) {
    height: 100vh;
  }

  .slick-slider {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    .slick-list {
      height: 100%;
      .slick-slide {
        height: 100vh;
        > div {
          height: 100vh;
          @media (min-width: 768px) {
            height: 720px;
          }

          @media (min-width: 1200px) {
            height: 100vh;
          }
          .slid1{
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.45)
              ),
              url("./imgs/banner.webp");
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
          }
          .slid2 {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.45)
              ),
              url("./imgs/banner1.webp");
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
          }
         
         
        }
        @media (min-width: 768px) {
          height: 720px;
        }

        @media (min-width: 1200px) {
          height: 100vh;
        }
      }
    }
  }

  h1 {
    font-family: ${(props) => props.theme.fam.blockers};
    line-height: 1.3;
    font-size: 30px;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
    @media (min-width: 992px) {
      margin-left: 10%;
      margin-top: 15%;
    }

    br {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  a {
    @media (min-width: 992px) {
      margin-left: 10%;
    }
  }
  a {
    height: 50px;
    border-radius: 8px;
    background: #fff;
    color: #000;
    font-family: ${(props) => props.theme.fam.bold};
    display: flex;
    font-size: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    cursor: pointer;

    span {
      margin: 0 10px;
    }
    .btn-icon {
      height: 37px;
      width: 37px;
      background: ${(props) => props.theme.color.darkgreen};
      color: #fff;
      border-radius: 8px;
      display: flex;
      margin-left: 50px;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    position: absolute;
    bottom: 5%;
    font-size: 14px;

    right: 5%;
  }
  .icons {
    position: absolute;
    right: 5%;
    display: flex;
    flex-direction: column;
    bottom: 15%;
    a {
      margin-bottom: 20px;
      height: 40px;
      width: 40px;
      background: transparent;
      padding: 0;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;

      border: 1.5px solid rgba(255, 255, 255, 0.1);
      justify-content: center;
      &:hover {
        color: ${(props) => props.theme.color.lightgreen};
      }
      svg {
        height: 15px;
        width: 15px;
      }
    }
  }
`;

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div className="slid1"></div>
        <div className="slid2"></div>
      </Slider>
      <h1>
      ALL THE INGREDIENTS USED IN OUR <br /> PRODUCTS ARE COMPLETELY NON-GENETICALLY
        <br />
        MODIFIED, MSG-FREE, AND VEGAN
      </h1>

     
      <div className="icons">
        <a href="https://www.linkedin.com/company/81842264/admin/">
          <FaLinkedinIn />
        </a>
        <a hrey="https://www.facebook.com/Alitab-104128535650814">
          <FaFacebookF />
        </a>
      </div>
      {/* <Paragraph>Zimbabwe, France, Italy, United Kingdom</Paragraph> */}
    </Wrapper>
  );
}

export default Banner;
