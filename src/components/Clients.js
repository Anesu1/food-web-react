import React from "react";
import styled from "styled-components";
import MoreItem from "../styled/MoreItem";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
    padding:10% 5%;
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;
    text-align:center;
    @media(min-width:768px){
        flex-direction:row;
    }
    @media(min-width:992px){
        padding:10% 15%;
    }
    .text{
        margin-bottom:30px;
        width:100%;
        @media(min-width:768px){
            text-align:left;
           text-align:center;
        }
        h3{
            font-family:${props => props.theme.fam.lato};
            color:${props => props.theme.color.lightgreen};
            font-size:30px;
            margin-bottom:20px;
            @media(min-width:992px){
                margin-bottom:30px;
                font-size:40px;
            }
            br{
                dispay:none;
                @media(min-width:768px){
                    display:block;

                }
            }
        }
    }
   
   .bottom{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
   }

`;

const topItems = [
    {
        text:"Vegetarian burger",
        imageUrl:"burger.jpeg"
    },
    {
        text:"Vegetarian balls",
        imageUrl:"veganballs.webp"
    },
    {
        text:"Vegetarian strips",
        imageUrl:"stripss.jpg"
    },
    {
        text:"Vegetarian pops",
        imageUrl:"pop.jpeg"
    },
    {
        text:"Tofu",
        imageUrl:"tofu.jpg"
    },
    {
        text:"Falafel",
        imageUrl:"falafel.jpg"
    },
    {
        text:"Fresh soy milk",
        imageUrl:"soymilk.jpg"
    },
    {
        text:"Gabby's cornflakes",
        imageUrl:"corn.webp"
    },
    {
        text:"Gabby's muesli",
        imageUrl:"muesli.jpeg"
    },
    {
        text:"Gabby's bran flakes",
        imageUrl:"brainflakes.jpg"
    },
]



function Clients() {
  return (
    <Wrapper>
        <div className="text">
        <h3>More Products</h3>
        <Paragraph>Hopefully you will love one of them</Paragraph>
      </div>
      <div className="bottom">
        {
        topItems.map((item, i)=>{
            return <MoreItem key={i} text={item.text} imageUrl={item.imageUrl}/>
        })
      }
      </div>
      
      
    </Wrapper>
  );
}

export default Clients;
