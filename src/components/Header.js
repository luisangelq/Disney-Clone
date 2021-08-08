import styled from "styled-components";

const Header = () => {
  return (
      <Nav>
          Header
      </Nav>
  )
};

const Nav = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    letter-spacing: 14px;
    z-index: 3;

`

export default Header;
