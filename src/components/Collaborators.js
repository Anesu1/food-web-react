import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import Paragraph from "../styled/Paragraph";
import Slider from 'react-slick'

  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
import Heading from "../styled/Heading";
import CarouselItem from "../styled/CarouselItem";
import patty from '../images/patty.webp'
import mince from '../images/pizza.webp'
import image1 from '../images/sausaages.webp'
import steak from '../images/steak.webp'
import strip from '../images/strip.webp'
import granola from '../images/granola.webp'
import spicy from '../images/spicyburder.webp'
import rolls from '../images/rolls.webp'
import pizza from '../images/pizza.webp'



const Wrapper = styled.section`
padding:10% 5%;
position:relative;
background: url("./imgs/about.webp");
  background-size: cover;

text-align:center;

  h2{
    color: ${props => props.theme.color.green};
    text-align:center;
    line-height:1.3;
    margin-bottom:30px;
    
  }
  p{
    margin-bottom:30px;
    @media(min-width:992px){
      margin-bottom:120px;
    }
  }
 
  
    
  
  
`;




















const items = [
  {
    imageUrl:image1,
    text:"VEGETARIAN SAUSAGES"
  },
  // {
  //   imageUrl:vegballs,
  //   text:"SIMPLE VEGAN BALLS"
  // },
  // {
  //   imageUrl:sass,
  //   text:"SLICED SIETAN"
  // },
  // {
  //   imageUrl:pies,
  //   text:"VEGAN PIES"
  // },
  {
    imageUrl:rolls,
    text:"VEGAN SAUSAGES ROLL"
  },
  {
    imageUrl:granola,
    text:"GABBYS GRANOLA CEREAL"
  },
  {
    imageUrl:spicy,
    text:"TRADITIONAL BURGER AND SPICED BURGER!"
  },
  {
    imageUrl:pizza,
    text:"VEGETARIAN PIZZA"
  },
  {
    imageUrl:steak,
    text:"VEGEN STEAK"
  },
  {
    imageUrl:mince,
    text:"VEGETARIAN MINCE"
  },
  {
    imageUrl:patty,
    text:"VEGETARIAN PATTIES"
  },
  {
    imageUrl:strip,
    text:"VEGETARIAN HOTDOG"
  },

]



function Collaborators() {

  const settings = {
    dots: false,
    infinite: items.length > 3,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              
          }
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            
        }
    },
      

      
  ],
  };
  return (
    <Wrapper id="ingredients">
     
      <Heading>Our Recipes</Heading>
      <Paragraph>GABBY'S VEGETARIAN FOODS</Paragraph>
      
      <Slider {...settings}>
    
    {items.map((item, i) =>{
      return <CarouselItem key={i} bgImage={item.imageUrl} recipe={item.text}/>
    })}
        
        
      
  </Slider>
    
    </Wrapper>
  );
}

export default Collaborators;