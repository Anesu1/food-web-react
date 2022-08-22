import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    overflow:hidden;
    border-radius:20px;
    margin-right:30px;
    .img{
        background:url('${props => props.bgImage}');
        background-size:cover;
        height:300px;
        width:100%;
    }
    .text{
        background:#ffffff;
        font-family:${props => props.theme.fam.blockers};
        color:${props => props.theme.color.green};
        padding:10px;
        font-size:20px;
    }
`;

function CarouselItem({ recipe, bgImage }) {
  return (
    <Wrapper bgImage={bgImage}>
      <div className="img"></div>
      <div className="text">
        <h5>{recipe}</h5>
      </div>
    </Wrapper>
  );
}

export default CarouselItem;
