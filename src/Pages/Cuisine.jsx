import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {motion} from "framer-motion";
import { Link, useParams } from "react-router-dom";


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let param = useParams();
    useEffect(() => {
        getCuisine(param.type);
        console.log(param);
    }, [param.type])

    const getCuisine = async (name) => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await resp.json();
        setCuisine(data.results);
    }
    return (
        <Grid
         animate={{opacity:1}}
         initial={{opacity:0}}
         exit={{opacity:0}}
         transition={{duration:0.5}}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/details/'+item.id}>
                            <img src={item.image} alt={item.name}></img>
                            <h4>{item.name}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}
const Grid = styled(motion.div)`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));
  grid-gap:3rem;
`
const Card = styled.div`
   
   a{
       text-decoration:none;
   }
   img{
    width:100%;
   border-radius:2rem;  
   }
   h4{
       text-align:center;
       padding:2rem;
   }
`

export default Cuisine