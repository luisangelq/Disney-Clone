import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Logo" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>
            HOME
          </span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="HOME" />
          <span>
            SEARCH
          </span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="HOME" />
          <span>
            WATCHLIST
          </span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="HOME" />
          <span>
            ORIGINALS
          </span>
        </a>
        <a href="/home">
          <img src="/images/movie-icon.svg" alt="HOME" />
          <span>
            MOVIES
          </span>
        </a>
        <a href="/home">
          <img src="/images/series-icon.svg" alt="HOME" />
          <span>
            SERIES
          </span>
        </a>
      </NavMenu>
    </Nav>
  );
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
  letter-spacing: 3px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  max-height: 80px;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    margin: 0 10px;

    img {
      min-height: 25px;
      min-width: 25px;
      margin-bottom: 5px;
      margin-right: 5px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 14px;
      white-space: nowrap;
      position: relative;
      
      &:before {
          content: '';
          height: 2px;
          width: 0px;
          background: white;
          border-radius: 10px;
          position: absolute;
          bottom: -5px;
          left: 0;
          transition: 0.2s ease-in-out;
      }
      &:hover:before {
          width: 100%;
          right: 0;
      }
    }
  }

  @media (max-width: 768px) {
        display: none;
    }
`;

export default Header;
