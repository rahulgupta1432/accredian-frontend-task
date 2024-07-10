import React from 'react';
import { Button } from '@mui/material';

const HeroSection = ({ onOpen }) => (
  <section className="hero">
    <h1>Refer & Earn</h1>
    <Button variant="contained" onClick={onOpen}>Refer Now</Button>
  </section>
);

export default HeroSection;
