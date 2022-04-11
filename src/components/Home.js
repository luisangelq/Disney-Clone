import styled from "styled-components";

import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = (props) => {

    return(
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}


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
` 
export default Home;