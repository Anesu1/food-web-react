import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
    font-family:${props => props.theme.fam.blockers};
    text-transform:uppercase;
    font-size:35px;
    @media(min-width:768px){
        font-size:40px;
    }
`

function Heading({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Heading