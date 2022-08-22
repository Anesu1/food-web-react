/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalAbout from "../styled/ModalAbout";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Wrapper = styled.section`
  padding: 10% 5%;
  background: url("./imgs/about.png");
  background-size: cover;
  @media (min-width: 1200px) {
    padding: 5% 15%;
  }
  .top {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      .about-left {
        width: 50%;
      }
      .about-right {
        width: 40%;
      }
    }
  }
  h2 {
    font-size: 30px;
    color: ${(props) => props.theme.color.lightgreen};
    margin-bottom: 20px;
    margin-top:30px;
  }
  .about-left {
    img{
      width:100%;
    }
    p {
      color: ${(props) => props.theme.color.lightgreen};
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 18px;
      line-height: 1.3;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        font-size: 26px;
      }
    }
  }
  .about-right{
    margin:auto;
  }
  p {
    margin-bottom: 20px;
  }
  .bottom {
    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    @media (min-width: 992px) {
      justify-content: space-between;
    }
    .card {
      max-width: 300px;
      margin: 0 auto;
      @media (min-width: 992px) {
        width: 28%;
        max-width: 350px;
        &:nth-child(2) {
          transform: translateY(210px);
        }
        &:last-child {
          transform: translateY(105px);
        }
      }

      img {
        margin-top: 30px;
      }

      .text {
        .inner {
          position: relative;
          span {
            font-family: ${(props) => props.theme.fam.georgia};
            color: ${(props) => props.theme.color.lightgreen};
            opacity: 0.2;
            font-size: 150px;
          }
          h3 {
            position: absolute;
            z-index: 2;
            bottom: 35px;
            left: 0;
            font-family: ${(props) => props.theme.fam.bold};
            font-size: 25px;
          }
        }
      }
      img {
        width: 100%;
      }
      a {
        font-family: ${(props) => props.theme.fam.regular};
        font-weight: 900;
        position: relative;
        padding-bottom: 7px;
        font-size: 15px;
        width: max-content;
        cursor: pointer;
        transition: all 0.3s ease;
        color: #000;
        border-bottom: 1px solid #000;
        &:hover {
          padding-bottom: 2px;
        }
        /* &:before{
              position:absolute;
              bottom:0;
              left:0;
              content:"";
              background:#000;
              width:100px;
              height:2px;
          } */
      }
    }
  }
`;

const galleryList = [
  "./images/designs (3).jpg",
  "./images/pic/designs (2).jpeg",
  "./images/pic/designs (3).jpeg",
  "./images/designs (4).jpg",
  "./images/pic/designs (4).jpeg",
  "./images/pic/designs (5).jpeg",
  "./images/pic/designs (6).jpeg",
  "./images/pic/designs (7).jpeg",
  "./images/pic/designs (8).jpeg",
];

function About() {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  isSolutionOpen || isProjectOpen
    ? disableBodyScroll(document)
    : enableBodyScroll(document);

  return (
    <>
      <Wrapper id="about">
        
        <div className="top">
          <div className="about-left">
            <img src="./imgs/intro.jpeg" alt="" />
          </div>
          <div className="about-right">
            <Heading>GABBY'S VEGETARIAN PRODUCTS.</Heading>
            <Paragraph>
              Gabby's foods has been established as a real vegetarian food
              company in Harare province. Our traditional business model is
              based on the accomplishment of producing vegetarian products
              targeting Africans. The company has chosen to produce a variety of
              vegan products. Our view is to produce products that will bring
              healing and that help Africans to fight against some diseases
              easily. We produce vegan sausages, vegan balls and vegan burgers.
            </Paragraph>
          </div>
        </div>  
        {/* <div className="bottom">
          <div className="card">
            <div className="text">
              <div className="inner">
                <span>01</span>
                <h3>Solutions & Support</h3>
              </div>

              <Paragraph>
                Alitab provides knowledge and services relating to waste
                management strategies. Solutions and support for corporates,
                communities and Government organisations.
              </Paragraph>
            </div>
            <a onClick={() => setIsSolutionOpen(true)}>Find out more</a>
            <img src="./images/about1.png" alt="Solutions and support" />
          </div>
          <div className="card">
            <div className="text">
              <div className="inner">
                <span>02</span>
                <h3>Projects</h3>
              </div>

              <Paragraph>
                Currently working on projects in Harare, Victoria Falls,
                Chirundu and the Zambezi Valley as well as a more efficient
                Plastic Press for creating roofing tiles and furniture from
                plastic waste and PET bottles.
              </Paragraph>
            </div>
            <a onClick={() => setIsProjectOpen(true)}>Find out more</a>
            <img src="./images/about2.png" alt="Solutions and support" />
          </div>
          <div className="card">
            <div className="text">
              <div className="inner">
                <span>03</span>
                <h3>Designs</h3>
              </div>

              <Paragraph>
                ALITAB team of designers creates incredible items out of
                recycled material which is sold on the local and international
                markets
              </Paragraph>
            </div>
            <a
              onClick={(e) => {
                e.preventDefault();
                setGalleryOpen(true);
                setGalleryIndex(0);
              }}
            >
              View our designs
            </a>
            <img src="./images/about3.png" alt="Solutions and support" />
            {galleryOpen && (
              <Lightbox
                mainSrc={galleryList[galleryIndex]}
                nextSrc={galleryList[(galleryIndex + 1) % galleryList.length]}
                prevSrc={
                  galleryList[
                    (galleryIndex + galleryList.length - 1) % galleryList.length
                  ]
                }
                onCloseRequest={() => setGalleryOpen(false)}
                onMovePrevRequest={() =>
                  setGalleryIndex(
                    (galleryIndex + galleryList.length - 1) % galleryList.length
                  )
                }
                onMoveNextRequest={() =>
                  setGalleryIndex((galleryIndex + 1) % galleryList.length)
                }
              />
            )}
          </div>
        </div> */}
      </Wrapper>
      <ModalAbout
        open={isSolutionOpen}
        onClose={() => setIsSolutionOpen(false)}
      >
        <div className="inner-about">
          <div className="inner">
            <span>01</span>
            <h3>Solutions & Support</h3>
          </div>
          <ul>
            <li>
              Waste management Solutions for corporate, urban realities, rural
              and conservative areas.
            </li>
            <li>Education programs on proper sorting and recycling</li>
            <li>Sensitization Campaigns</li>
            <li>Cleaning campaigns</li>
            <li>Machinery</li>
            <li>Products from recycled materials</li>
          </ul>
        </div>
      </ModalAbout>
      <ModalAbout open={isProjectOpen} onClose={() => setIsProjectOpen(false)}>
        <div className="inner-about">
          <div className="inner">
            <span>02</span>
            <h3>Projects</h3>
          </div>
          <ul>
            <li>
              ALBIDA Groups, Solid Waste solutions for Turistic settings at
              Victoria Falls
            </li>
            <li>
              Chirundu area, along the Zambesi river, waste management solutions
              for conservation areas
            </li>
            <li>
              Solid Waste Management Solutions for urban realities. In
              collaboration with the international Organization MSF and with the
              Support of the Norwegian retailer Fund, we are now running a solid
              waste facility in Mbare, high density areas.
            </li>
            <li>
              Cleaning Harare: we collaborates in network with other realities
              to create a strong cleaning movement in town (Clean and Green)
            </li>
            <li>
              School Programs: We are running a school program,reaching out to
              the whole community,
            </li>
            <li>
              to promote proper sorting, collection and, where possible,
              reduction.
            </li>
          </ul>
          <Paragraph>
            A proper collection of waste is increasing the efficiency of
            recycling, reducing the cost of recycling and drastically reducing
            all health problems connected with mismanagement of dirty waste in
            the environment (disease, sewage clogged, bad and polluted
            harvesting, etc..)
          </Paragraph>
        </div>
      </ModalAbout>
    </>
  );
}

export default About;
