import React from 'react';
import styled from 'styled-components';
import Heading from '../styled/Heading';
import Paragraph from '../styled/Paragraph';

const Wrapper = styled.section`
    background:url('./imgs/bg.png');
    background-size:cover;
    text-align:center;
    color:#ffffff;
    padding:5%;
    h2{
        margin-bottom:15px;
    }
    p{
        margin-bottom:30px;
        font-size:18px;
    }
`


function MoreAbout() {
  return (
    <Wrapper>

        <Heading>AT GABBY</Heading>
        <Paragraph>OUR ethos at Gabby’s is a holistic one, and we believe that the health of the animals, the planet and our customers are. Intrinsically linked. We are passionate about helping our customers transition to a more plant-based diet because we believe that as well as being better for the planet, a reduction In animal products is better for human health. A diet that consists of too many additives , refined sugar and salt is most definitely not healthy ,but we also believe that animal fats are equally detrimental and that is it about finding balance.
</Paragraph>
        
        <Heading>VISION</Heading>
        <Paragraph>To provide quantity and quality vegan food products and services that exceeds the expectations of our esteemed customers.
</Paragraph>
        
        <Heading>PURPOSE</Heading>
      <Paragraph>To be a leading company in the food industry by providing health foods and enhanced services in Sourthen Africa.
</Paragraph>




    </Wrapper>
  )
}

export default MoreAbout
