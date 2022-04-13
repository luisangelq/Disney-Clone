import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setUserSignOut,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      } else {
        history.push("/home");
        setUser(user);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, userPhoto]);

  // enable google auth
  const handleAuth = () => {
    console.log("Click");
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setUserSignOut());

        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Logo" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <Fragment>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="/images/original-icon.svg" alt="HOME" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt="User" />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </Fragment>
      )}
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
  padding: 0.5rem 2rem;
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
        content: "";
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

const Login = styled.a`
  background-color: transparent;
  padding: 8px 16px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
    cursor: pointer;
    border-color: transparent;
  }
`;

const DropDown = styled.div`
  position: absolute;
  width: 8rem;
  text-align: center;
  top: 100%;
  right: 2rem;
  background-color: #111111;
  border: 1px solid #f9f9f9;
  border-radius: 0.2rem;
  padding: 1rem;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
`;
const UserImg = styled.img`
  height: 100%;
  border-radius: 100%;
`;

const SignOut = styled.div`
  position: relative;
  height: 3rem;
  padding-left: 1rem;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
export default Header;
