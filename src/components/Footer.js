/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";
import {FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import moment from 'moment'


const Wrapper = styled.section`

    display:flex;
    justify-content:space-between;
    position:relative;
    padding:5%;
   color:#ffffff;
   p{
     font-size:15px;
     &:nth-child(2){
      color:${props => props.theme.color.yelo};
     }
   }
  
   background:${props => props.theme.color.darkgreen};
   
`;

function Footer() {
  const year = moment().year()
  return (
    <Wrapper>
      <Paragraph>© {year} Gabby's Vegetarian Products |
</Paragraph>
<Paragraph>COVID 19 – Update | Stay Informed</Paragraph>
    </Wrapper>
  );
}

export default Footer;