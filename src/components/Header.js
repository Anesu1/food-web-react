/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Wrapper = styled.header`
    position:absolute;
    display:flex;
    transition: all 300ms ease;
    width:100%;
    z-index:999;
    transition:all 300ms ease;
    justify-content:space-between;
    align-items:center;
    transform:translate3d(0, 0, 0);
    @media(min-width:992px){
        padding-top:30px;
    }
    img{
        width:100px;
        z-index:3;
        transition:all 0.7s ease;
        @media(min-width:992px){
            margin-left:5%;
        }
    }
    .menu{
        @media(min-width:992px){
            margin-right:5%;
        }
    }
    .hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:30px;
      transition:all 0.7s ease;
      z-index:3;
      @media(min-width:992px){
          display:none;
      }
      span{
        width:30px;
        height:1px;
        background:#fff;
        position:absolute;
        transition:all 0.7s ease;
        &:before{
          position: absolute;
          content:"";
          background: #fff;
          top:-5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
        &:after{
          position: absolute;
          content:"";
          background: #fff;
          top:5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
      }
    }
    .open{
        outline-color:#000;
        span{
            background:transparent;
            &:after{
                top:0;
                transform:rotate(-585deg);
                background:#000;
            }
            &:before{
                top:0;
                transform:rotate(-495deg);
                background:#000;
            }
        }
    }
    ul{
        position:absolute;
        width:100%;
        height:100vh;
        background:#fff;
        top:0;
        right:0;
        display:flex;
        transition:all 0.7s ease;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        z-index:1;
        max-width:0;
        overflow:hidden;
        @media(min-width:768px){
            height:720px;
            
        }
       @media(min-width:992px){
           max-width:none;
           background:transparent;
           flex-direction:row;
           height:unset;
            position:relative;
            margin-right:5%;
       }
       
        li{
            &:hover{
                a{
                    color:${props => props.theme.color.lightgreen};
                }
            }
            @media(min-width:992px){
                margin:0 5px;
                &:hover{
                   a{
                    color:${props => props.theme.color.lightgreen};
                   }
                }
            }
            a{
                font-family:${props => props.theme.fam.bold};
                display:block;
                padding:10px;
                font-size:14px;
                cursor:pointer;
                transition:all 0.7s ease;
                
                @media(min-width:992px){
                    color:#ffffff;
                }
            }
           
            
        }
    }
    .change{
        max-width:100%;

    }
`;

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () => {
    setClick(false);
  };

  return (
    <Wrapper >
      <img src="./imgs/logo.png" alt="alitab logo" />
      <div className="menu">
        <div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
          <span></span>
        </div>
        <ul className={click ? "change" : ""}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              HOME






            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="ingredients"
              spy={true}
              smooth={true}
              duration={500}
            >
              INGREDIENTS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="recipes"
              spy={true}
              smooth={true}
              duration={500}
            >
              RECIPES & COOKBOOKS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="food"
              spy={true}
              smooth={true}
              duration={500}
            >
              OUR FOOD
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="blogs"
              spy={true}
              smooth={true}
              duration={500}
            >
              BLOGS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              FOOD SERVICES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              FIND US
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
