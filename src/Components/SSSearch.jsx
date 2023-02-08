import { useState } from 'react';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search/" + input);
    }
    return (
        <SForm onSubmit={handleSubmit}>
            <div>
                <FaSearch />
                <input type="text"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    value={input} />
            </div>
        </SForm>
    )
}
const SForm = styled.form`
   ${'' /* margin: 0rem 10rem; */}
   div{
       ${'' /* margin: 0rem 20rem; */}
       width: 100%;
       position: relative;
   }
   input{
    ${'' /* margin: 0rem 10rem; */}
       width: 100%;
       border: none;
       background: linear-gradient(35deg,#313131,#494949);
       font-size: 1rem;
       color:white;
       padding: 1rem 3rem;
       border: none;
       border-radius: 1rem;
       outline:none;
    }
    svg{
        position: absolute;
        left: 0%;
        top:50%;
        transform: translate(100%,-50%);
        color: white;
    }
    @media(max-width:2000px){
      margin:0rem 10rem;
    }
    @media(max-width:1170px){
      margin:0rem 3rem;
    }
    @media(max-width:920px){
      margin:0rem 10px;
    }
    
`;
export default Search;
