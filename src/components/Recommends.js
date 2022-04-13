import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);
  return (
    <>
      <Container>
        <h2>Recommended For You</h2>
        <Content>
          {movies && movies.map((movie) => (
            <Wrap key={movie.id}>
              
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 5rem 0;
`;
const Content = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Wrap = styled.div`
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,   ;
    border: 3px solid rgb(249, 249, 249, 0.8);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
export default Recommends;
