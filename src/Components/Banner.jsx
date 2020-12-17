import styled from 'styled-components';
import bannerImg from '../image/banner.jpg';

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;

export default Banner;
