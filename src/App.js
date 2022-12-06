import { BrowserRouter } from "react-router-dom";
import "../src/index.css"
import Categories from "./Components/Categories";
import SSSearch from "./Components/SSSearch";
import Pages from "./Pages/Pages";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav>
          <GiKnifeFork></GiKnifeFork>

          <Logo to={"/"}>delicious</Logo>

        </Nav>
        <SSSearch />
        <Categories />
        <Pages />
      </BrowserRouter>

    </div>
  );
}
const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
`
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: to-start;
  aligh-items: center;
  svg{
    font-size:2rem;
  }
`

export default App;
