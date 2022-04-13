import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommends.push({ id: doc.id, ...doc.data() });
              break;
            case "new":
              newDisney.push({ id: doc.id, ...doc.data() });
              break;
            case "original":
              originals.push({ id: doc.id, ...doc.data() });
              break;
            case "trending":
              trending.push({ id: doc.id, ...doc.data() });
              break;
            default:
              break;
          }
        });
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 72px);
  background-image: url("/images/home-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3vw + 5px);
`;
export default Home;
