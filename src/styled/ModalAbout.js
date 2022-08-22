import React from "react";
import ReactDom from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";

const Wrapper = styled.div`
  transition: all 0.7s ease;
  .inner-modal {
    display: flex;
    justify-content:space-between;
    
  }
  .modal-box-about{
    animation:animateDiv 0.7s;
    padding:5%;
    width:90%;
    @media(min-width:768px){
        width:90%;
        max-width:500px;
    }
   
    span{
        display:block;
        margin-left:auto;
        width:max-content;
        svg{
            height:40px;
            width:40px;
            color:${props => props.theme.color.lightgreen};
        }
    }    
    h2{
        font-size:40px;
        color:${props => props.theme.color.lightgreen};
        opacity:0.2;
        margin-bottom:30px;
    }
    p{
        margin-bottom:20px;
    }
  }
.inner-text{
    @media(min-width:768px){
        width:45%;
        p{
            max-width:450px;
        }
    }
}
  @keyframes animateDiv{
      0%{
          transform:translate(-50%, 100px);
          opacity:0;
      }
      100%{
          transform:translate(-50%, -50%);
      }
  }

  .inner-about{
    .inner {
          position: relative;
          width:max-content;
          span {
            font-family: ${(props) => props.theme.fam.georgia};
            color: ${(props) => props.theme.color.lightgreen};
            opacity: 0.2;
            font-size: 90px;
            
            @media(min-width:768px){
              font-size:150px;
            }
          }
          h3 {
            position: absolute;
            z-index: 2;
            bottom: 25px;
            left: 0;
            font-family: ${(props) => props.theme.fam.bold};
            font-size: 25px;
          }
        }
        ul{
          padding-left:10px;
          list-style:disc;
        }
        li{
          font-family:${props => props.theme.fam.regular};
          margin-bottom:10px;
          font-size:13px;
          line-height:1.3;
        }
        p{
          font-family:${props => props.theme.fam.bold};
          font-size:13px;
          margin-top:10px;
        }
  }
`;

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
  
};

export default function ModalAbout({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <Wrapper>
      <div style={OVERLAY_STYLES}/>
      <div style={MODAL_STYLES} className="modal-box-about">
        <span onClick={onClose}>
          <AiFillCloseCircle />
        </span>
        <div className="inner-modal">{children}</div>
      </div>
    </Wrapper>,
    document.getElementById("portal")
  );
}
