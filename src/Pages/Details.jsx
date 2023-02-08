import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
function Details() {

    const [details, setDetails] = useState({});
    const [activeTab, setactiveTab] = useState("instructions");
    let params = useParams();
    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const resp = await data.json();
        setDetails(resp);
        // console.log(resp);
    }
    return (
        <Wrapper>
            <div >
                <h4>{details.title}</h4>
                <img src={details.image} alt={details.title} />
            </div>
            <Sdiv>
                <SInfo>
                    {/* <SButton className={activeTab === "ingredients" ? "active" : ""} onClick={() => { setactiveTab("ingredients") }}>Ingredients</SButton> */}
                    <SButton className={activeTab === "instructions" ? "active" : ""} onClick={() => { setactiveTab("instructions") }}>Instructions</SButton>
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                   
                </SInfo>
            </Sdiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top:5rem;
  margin-bottom : 5rem;
  display: flex;
  justify-content: center;
  .active{
      background: linear-gradient(35deg,#313131,#494949);
      color:white;
  }
  ul{
      margin-top:1.5rem;
  }
  h3{
   
      @media(max-width:900px){
        font-size:16px;
      }
      @media(max-width:600px){
        font-size:14px;
      }
  }
  img{
    margin-top:1rem;
    @media(max-width:670px){
        height:350px;
        width:500px;
      }
      @media(max-width:590px){
        height:250px;
        width:450px;
      }
      @media(max-width:525px){
        height:250px;
        width:380px;
      }
      @media(max-width:460px){
        height:250px;
        width:350px;
      }
      @media(max-width:400px){
        height:180px;
        width:290px;
      }
  }
  li{
      font-size:1.2rem;
      line-height: 1.5rem;
  }
  @media(max-width:1400px){
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;
  }
  

`
const SButton = styled.button`
  padding: 1rem 2rem;
  color:#313131;
  background: white;
  border: 2px solid black;
  font-weight:600;
  margin-right:2rem;
  margin-top:3px;
`
const SInfo = styled.div`
  margin-left: 5rem;
  @media(max-width:1400px){
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;
    margin-left: 0rem;
    margin-top:3rem;
  }
  
  
  
`
const Sdiv = styled.div`
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-left:3rem;
   @media(max-width:1400px){
  
    margin-left: 0rem;
  }
  
  
   
`

export default Details;
