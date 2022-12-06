import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";

function Veggies() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    VegDishes();
  }, []);

  const VegDishes = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    }
    else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await response.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  }
  return (
    <div>
      <Wrapper>
        <h3>Our Vegeterian Picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          gap: "5rem",
          drag: "free",
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/details/"+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
   margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25vh;
  border-radius:2rem;
  overflow: hidden;
  position: relative;
  img{
      border-radius:2rem;
      position: absolute;
      left:0;
      width:100%;
      height:100%;
      object-fit:cover;
  }
  p{
   position: absolute;
   z-index :10;
   left: 50%;
   bottom:0%;
   transform : translate(-50%,0);
   color:white;
   width: 100%;
   text-align: center;
   font-weight: 600;
   font-size:1rem;
   height: 40%;
   display: flex;
   justify-content: center;
   align-items:center;
  }
`
const Gradient = styled.div`
  z-index:3;
  width:100%;
  height:100%;
  position:absolute;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
  `

export default Veggies