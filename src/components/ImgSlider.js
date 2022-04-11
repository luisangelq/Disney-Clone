import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </>
  );
};

const Carousel = styled(Slider)`
  margin-top: 2rem;

  & > button {
    opacity: 0;
    height: 100%;
    width: 3rem;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #fff;
    }
  }
  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -3rem;
  }
  .slick-next {
    right: -3rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  a {
    border-radius: 0.5rem;
    display: block;
    padding: 0.5rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.3s ease;
    &:hover {
      padding: 0;
      border: 4px solid rgb(249, 249, 249, 0.6);
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;

export default ImgSlider;
