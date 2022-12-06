import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import styled from "styled-components"

function Search() {

    const [search, setSearch] = useState([]);
    let params = useParams();
    useEffect(() => {
        getSearch(params.search)
    }, [params.search]);

    const getSearch = async (name) => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await resp.json();
        setSearch(data.results);
    };

    return (
        <Grid>
            {search.map((item) => {
                return (
                    <Link to={'/details/'+item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                        </Card>
                    </Link>
                )
            })}
        </Grid>
    )
}
const Grid = styled.div`
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

export default Search