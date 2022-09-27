import React from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding: 10% 5%;
  position:relative;
  z-index:1;
  background:${props => props.theme.color.green};
  
  h2 {
    color: ${(props) => props.theme.color.yelo};
    margin-bottom: 30px;
  }
  .inner {
    max-width: 550px;
    margin: 0 auto;
    padding:2%;
    background:#ffffff;
    h2{
      text-align:center;
    }
  }
  form {
    .MuiFormControl-root {
      width: 100%;
      margin-bottom: 20px;
    }

    .MuiInputLabel-formControl {
      top: 10px;
      left: 10px;
    }
    .MuiInput-underline:after {
      border-color: ${(props) => props.theme.color.green};
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${(props) => props.theme.color.green};
    }
    [id="standard-multiline-static-label"]{
      left:25px;
    }
    label {
      color: rgba(0, 0, 0);
      z-index: 1;
      font-family: ${(props) => props.theme.fam.regular};
    }
    input {
      width: 100%;
      height: 40px;
    }
    textarea {
      height: 130px;
      width: 100%;
    }
    button {
      height: 40px;
      width: 100%;
      font-family: ${(props) => props.theme.fam.bold};
      text-transform: uppercase;
      border: none;
      color: #ffffff;
      background: ${(props) => props.theme.color.green};
      font-size: 15px;
    }
  }
  .inner-right{
    text-align:center;
    color:#ffffff;
    h3{
      font-family:${props => props.theme.fam.blockers};
      margin-bottom:15px;
    }
    p{
      margin-bottom:30px;
    }
  }
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <div className="inner-right">
      <Heading>How Can We Help You?</Heading>
      <h3>GENERAL ENQUIRIES</h3>
      <Paragraph>admin@gabbsveg.co.zw</Paragraph>

      <h3>TELEPHONE</h3>
      <Paragraph>
+263780821323
 <br />
+263773942374 </Paragraph>
      <h3>SHOP ADDRESS</h3>
      <Paragraph>15th Floor North Wing Karigamombe Center Harare</Paragraph>

      <h3>FACTORY ADDRESS</h3>
      <Paragraph>Factory 1744 New davies way, Waterfalls Industrial park Harare</Paragraph>








      </div>

      <div className="inner">
        
        <Heading>Contact Us</Heading>
        <form action="https://formsubmit.co/1475abbb575b84e025c7f540dda8f78b" method="POST">
        <input type="hidden" name="_subject" value="Submission from alitab website!" />
        <input type="hidden" name="_template" value="table" />
          <FormControl>
            <InputLabel>Full Name</InputLabel>
            <Input type="text" name="Full Name"/>
          </FormControl>
          <FormControl>
            <InputLabel>Email Address</InputLabel>
            <Input type="email" name="Email"/>
          </FormControl>
          <FormControl>
            <InputLabel>What are you intrested in?</InputLabel>
            <Input type="text" name="What are you intrested in?"/>
          </FormControl>
          <TextField
            id="standard-multiline-static"
            label="Your Message"
            multiline
            name="Message"
            variant="standard"
            rows={4}
          />
          <button>send message</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Contact;
