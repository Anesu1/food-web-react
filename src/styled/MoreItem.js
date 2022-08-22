import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    position:relative;
    max-height:200px;
    overflow:hidden;
    width:40%;
    max-width:250px;
    margin-bottom:50px;
    @media(min-width:768px){
      width:30%;
      max-width:350px;
    }
    .textt{
        position:absolute;
        background:#1447339a; 
        color:#ffffff;
        padding:5px;
        
        font-size:15px;
        opacity:0;
        width:100%;
        height:100%;
        top:0;
        left:0;
        font-weight:bold;
        transition:all 0.3s ease;
        display:flex;
        align-items:center;
        justify-content:center;
        p{
          font-size:25px;
          font-family:${props => props.theme.fam.blockers};

        }
    }
    img{
      width:100%;
    }
    &:hover{
        .textt{
            opacity:1;
        }
    }
    
`

function MoreItem({imageUrl, text}) {
  return (
    <Wrapper>
        <img src={`./imgs/${imageUrl}`} alt={text} />
      <div className="textt">
        <Paragraph>{text}</Paragraph>
      </div>
    </Wrapper>
  )
}

export default MoreItem
