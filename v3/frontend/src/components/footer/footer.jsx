// this file was extracted from a template provided by Material UI:
// https://mui.com/material-ui/getting-started/templates/
// The copy and distribution of this material is legal and the permission of the creators was conceiled in 08/11/2022 to Enricco Gemha.

import React, { Component } from 'react';
import './footer.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function footer() {
  return (
    <div className='footer'>
      <a href='https://github.com/G3mha'><GitHubIcon className='icon' fontSize="large" alt='GitHub'/></a>
      <a href='https://www.linkedin.com/in/enriccogemha'><LinkedInIcon className='icon' fontSize="large" alt='LinkedIn'/></a>
      <a href='https://twitter.com/gemhadventures'><TwitterIcon className='icon' fontSize="large" alt='Twitter'/></a>
      <a href='https://www.instagram.com/enriccogemha'><InstagramIcon className='icon' fontSize="large" alt='Instagram'/></a>
    </div>
  );
}

export default footer;
