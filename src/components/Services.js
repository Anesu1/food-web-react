/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Modal from "../styled/Modal";
import Paragraph from "../styled/Paragraph";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


const Wrapper = styled.section`
  padding: 10% 5%;
  background: linear-gradient(
      to bottom,
      rgba(38, 88, 82, 0.9),
      rgba(38, 88, 82, 0.9)
    ),
    url("./images/services.png");
  background-size: cover;
  background-position: center right;
  @media (min-width: 768px) {
    padding-top: 15%;
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding: 15% 15%;
  }
  h2 {
    color: rgba(255, 255, 255, 0.67);
    margin-bottom: 20px;
    font-size: 30px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.67);
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin: 0 auto 30px;
      max-width: 530px;
    }
  }
  .inner {
    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    @media (min-width: 992px) {
      jutify-content: space-between;
    }

    .services-inner {
      text-align: center;
      max-width: 350px;
      margin: 0 auto 30px;
      @media (min-width: 768px) {
        margin: 0 10px 30px;
      }
      @media (min-width: 992px) {
        width: 30%;
      }
      img {
        width: 100%;
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 20px;
        color: #fff;
        font-size: 20px;
        font-family: ${(props) => props.theme.fam.bold};
      }
      a {
        color: #fff;
        padding-bottom: 7px;
        font-family: ${(props) => props.theme.fam.regular};
        border-bottom: 1px solid #fff;
        cursor:pointer;
        transition:all 0.7s ease;
        &:hover{
          padding-bottom:4px;
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  background: url("${(props) => props.imageSrc}");
  background-size: cover;
  background-position:center center;
  @media(min-width:768px){
    width:47%;
    margin-bottom:10px;
  }
  /* &:nth-child(5),&:last-child{
    display:none;
  } */
  /* @media(min-width:992px){
    width:30%;
    &:nth-child(5),&:last-child{
    display:block;
  } */
  /* } */
  
`;

const management = [
  "./images/manage.png",
  "./images/banner.jpg",
  "./images/banner.jpg",
];
const education = [
  "./images/education (1).png",
  "./images/education (2).png",
  "./images/education (3).png",
  "./images/education (4).png",
];
const solution = [
  "./images/solution (1).jpg",
  "./images/solution (1).png",
  "./images/solution (2).jpg",
  "./images/solution (3).jpg",
];

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenone, setIsOpenone] = useState(false);
  const [isOpentwo, setIsOpentwo] = useState(false);
  const [galleryIndex,setGalleryIndex] = useState(0);
  const [galleryOpen,setGalleryOpen] = useState(false);
  const [galleryIndexone,setGalleryIndexone] = useState(0);
  const [galleryOpenone,setGalleryOpenone] = useState(false);
  const [galleryIndextwo,setGalleryIndextwo] = useState(0);
  const [galleryOpentwo,setGalleryOpentwo] = useState(false);
  isOpen || isOpenone || isOpentwo
    ? disableBodyScroll(document)
    : enableBodyScroll(document);
  return (
    <>
      <Wrapper id="services">
        <Heading>Our Services</Heading>
        <Paragraph>
          Alitab provides knowledge and services relating to waste management
          strategies. Solutions and support for corporates, communities and
          Government organisations.
        </Paragraph>
        <div className="inner">
          <div className="services-inner">
            <img src="./images/services1.png" alt="Waste Management" />
            <h3>Waste Management</h3>
            <a onClick={() => setIsOpen(true)}>Find out more</a>
          </div>
          <div className="services-inner">
            <img src="./images/services2.png" alt="Waste Management" />
            <h3>Waste Education</h3>
            <a onClick={() => setIsOpenone(true)}>Find out more</a>
          </div>
          <div className="services-inner">
            <img src="./images/services3.png" alt="Waste Management" />
            <h3>Waste Solution</h3>
            <a onClick={() => setIsOpentwo(true)}>Find out more</a>
          </div>
        </div>
      </Wrapper>
      <div style={BUTTON_WRAPPER_STYLES}></div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="inner-text">
          <Heading>Waste Management</Heading>
          <Paragraph>
            To improve efficiency at the corporate level, reducing the amount of
            waste produced and finding alternative uses for the waste of their
            production process. A good waste management process is helping in
            cutting costs
          </Paragraph>
          <Paragraph>
            To improve collection at the community level, making it possible and
            easy the recycling of most of the waste, from compost, plastic,
            glass, metal, and paper. For each kind of waste, there is a proper
            way to increase the life cycle of the products and of the material
          </Paragraph>
        </div>
        <div className="images">
          {management.map((item, i) => {
            return <ImageWrapper key={i} imageSrc={item} onClick={(e) => {
              e.preventDefault();
              setGalleryOpen(true);
              setGalleryIndex(i)
            }} />;
          })}
          {galleryOpen && (
              <Lightbox
                mainSrc={management[galleryIndex]}
                nextSrc={management[(galleryIndex + 1) % management.length]}
                prevSrc={
                  management[(galleryIndex + management.length - 1) % management.length]
                }
                onCloseRequest={() => setGalleryOpen(false)}
                onMovePrevRequest={() =>
                  setGalleryIndex(
                    (galleryIndex + management.length - 1) % management.length
                  )
                }
                onMoveNextRequest={() =>
                  setGalleryIndex((galleryIndex + 1) % management.length)
                }
              />
            )}
        </div>
      </Modal>
      <Modal open={isOpenone} onClose={() => setIsOpenone(false)}>
        <div className="inner-text">
          <Heading>Waste Education</Heading>
          <Paragraph>
            There is no proper sustainable waste management with a real impact
            on the environment without waste education. We work with schools,
            groups, communities, youth, NGOs, doing training and explaining the
            value of waste, the importance to sort and store. We promote and
            organize cleaning campaigns and we work with people on the ground.
          </Paragraph>
          <Paragraph>
            If all waste was sorted, the amount of trash would be minimum. Any
            recycling process if the waste is not sorted is requiring a lot of
            time and a big cost of energy, for a low-efficiency result.
          </Paragraph>
        </div>
        <div className="images">
          {education.map((item, i) => {
            return <ImageWrapper key={i} imageSrc={item} onClick={(e) => {
              e.preventDefault();
              setGalleryOpenone(true);
              setGalleryIndexone(i)
            }}/>;
          })}
{galleryOpenone && (
              <Lightbox
                mainSrc={education[galleryIndexone]}
                nextSrc={education[(galleryIndexone + 1) % education.length]}
                prevSrc={
                  education[(galleryIndexone + education.length - 1) % education.length]
                }
                onCloseRequest={() => setGalleryOpenone(false)}
                onMovePrevRequest={() =>
                  setGalleryIndexone(
                    (galleryIndexone + education.length - 1) % education.length
                  )
                }
                onMoveNextRequest={() =>
                  setGalleryIndexone((galleryIndexone + 1) % education.length)
                }
              />
            )}
        </div>
      </Modal>
      <Modal open={isOpentwo} onClose={() => setIsOpentwo(false)}>
        <div className="inner-text">
          <Heading>Waste Solution</Heading>
          <Paragraph>
            For each kind of waste, there is a proper way to increase the life
            cycle of the products and of the material. We offer solutions
            tailor-made for municipalities, communities, and corporates
          </Paragraph>
        </div>
        <div className="images">
          {solution.map((item, i) => {
            return <ImageWrapper key={i} imageSrc={item} onClick={(e) => {
              e.preventDefault();
              setGalleryOpentwo(true);
              setGalleryIndextwo(i)
            }}/>;
          })}
        </div>
      </Modal>
    </>
  );
}

export default Services;
