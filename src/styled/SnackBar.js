import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const Wrapper = styled.div`
    .MuiSnackbar-root{
        background:transparent !important;
        .MuiPaper-root{
            background:#ffffff !important;
            color:#333;
            max-width:800px;
            font-family:${props => props.theme.fam.blockers};
            font-size:18px;
        }
    }
`

export default function SimpleSnackbar({open, setOpen}) {
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
  
  
    // setInterval(handleClick, 20000);
  
  
  

    
  const action = (
    <React.Fragment>
       
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
       <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Wrapper>
      <Snackbar
        open={open}
        autoHideDuration={30000}
        onClose={handleClose}
        message="Also note that at our shop we have ready to eat Vegetarian products burgers, hot dogs & baobab juice, natural oils, traditional vegetables, dietary supplements, immune boosters, natural sex boosters, skin and hair products."
        action={action}
      />
    </Wrapper>
  );
}
