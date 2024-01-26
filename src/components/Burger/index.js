import React from 'react';
import { StyledBurger, StyledBurgerItem } from './styled';

const Burger = ({ open, ...props }) => {
  return (
    <StyledBurger open={open} {...props}>
      <StyledBurgerItem />
    </StyledBurger>
  );
};

export default Burger;
