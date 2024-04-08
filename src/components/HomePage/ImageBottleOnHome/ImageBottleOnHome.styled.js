import styled from "styled-components";


export const ImageBottle = styled.div`
margin-bottom: 35px;
width: 100%;

margin-left: auto;
margin-right: auto;
z-index: -1;
position: relative;

img {
  width: 100%;
  height: auto;
}

@media (min-width: 320px) {
  width: 280px;
  height: 208px;


}
@media (min-width: 768px) {
  width: 518px;
  height: 386px;

}

@media (min-width: 1440px) {
  width: 738px;
  height: 548px;
  margin-bottom: 24px;
  img {
    position: relative;
    left: -50px;
  }
}
`;

export default ImageBottle;