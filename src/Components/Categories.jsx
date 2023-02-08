import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

import React from 'react'
import { NavLink } from "react-router-dom";

function Categories() {
    return (
        <List>
            <Slink to={'/cuisine/italian'}>
                <FaPizzaSlice></FaPizzaSlice>
                <h4>Italian</h4>
            </Slink>
            <Slink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </Slink>
            <Slink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </Slink>
            <Slink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </Slink>
        </List>
    )
}
const List = styled.div`
  
    display :flex;
    ${'' /* flex-direction:column;  */}
    align-items:center;
    justify-content: center;
   margin: 3rem 0; 
   @media(max-width:600px){
    display:grid;
    grid-template-columns:1fr 1fr;
    ${'' /* margin-left:auto; */}
    grid-gap:10px;
    margin-left:70px;
  }
  @media(max-width:475px){
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-right:20px;
  }
   
`
const Slink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-radius:50%;
  text-decoration:none;
  margin-right:2rem;
  background:linear-gradient(35deg,#494949,#313131);
  width: 6rem;
  height: 6rem;
  cursor:pointer;
  transform:scale(0.8);
  h4{
   color:white;
   font-size:0.8rem;
  }
  svg{
      color:white;
      font-size:1.5rem;
  }
  &.active{
      background: linear-gradient(to right,#f27121,#e94057);
      svg{
          color:white;
      }
      h4{
          color:white;
      }
  }
 

`;

export default Categories;
