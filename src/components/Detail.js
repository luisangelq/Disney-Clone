import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    try {
      db.collection("movies")
        .doc(id)
        .onSnapshot((snapshot) => {
          if (snapshot.exists) {
            setDetailData(snapshot.data());
          } else {
            console.log("No data");
            setDetailData({});
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const { backgroundImg, titleImg, subTitle, description, title } = detailData;
  return (
    <Container>
      <Background>
        <img
          src={backgroundImg}
          alt={title}
        />
      </Background>
      <ImageTitle>
        <img
          src={titleImg}
          alt={title}
        />
      </ImageTitle>
      <Options>
        <button className="play">
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </button>
        <button className="trailer">
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </button>
        <button className="addList">
          <span>+</span>
        </button>
        <button className="group">
          <img src="/images/group-icon.png" alt="" />
        </button>
      </Options>
      <Info>
        <div className="subTitle">
          {subTitle}
        </div>
        <div className="description">
          {description}
        </div>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 72px);
`;
const Background = styled.div`
  margin-top: 72px;
  position: fixed;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  img {
    padding: 100px 0 25px 50px;
    width: 60vw;
    max-width: 600px;
    min-width: 300px;
  }
`;

const Options = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    display: flex;
    height: 56px;
    padding: 0 24px;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: rgb(198, 198, 198);
    }

    img {
      width: 32px;
    }

    @media (max-width: 768px) {
      height: 40px;
      padding: 0 16px;
      font-size: 12px;

      img {
        width: 24px;
      }
    }
  }

  .play {
    background-color: #ededed;
  }
  .trailer {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: #ededed;
  }
  .addList,
  .group {
    display: flex;
    justify-content: center;
    width: 56px;
    background-color: #1d293b;
    color: #ededed;
    border: 1px solid #ededed;
    border-radius: 100%;
    font-weight: normal;
    font-size: 40px;

    @media (max-width: 768px) {
      width: 40px;
    }
  }
`;

const Info = styled.div`
max-width: 1000px;
  margin: 50px 25px;
  color: rgb(249, 249, 249);

  .subTitle {
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .description {
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export default Detail;
