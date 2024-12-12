import styled from 'styled-components';

export const LandingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: black;
  background-image: url('/landing.jpg'); /* Đường dẫn ảnh nền */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Poppins', sans-serif; /* Font chữ mặc định */
  
`;

export const ContentColumn = styled.div`
  padding: 20px;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h2`
  color: white;
  font-size: 130px;
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

export const Subtitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const GetStartedButton = styled.button`
  background-color: transparent; /* Nền trong suốt */
  color: white; /* Màu chữ trắng */
  border: 2px solid white; /* Đường viền màu trắng */
  border-radius: 30px; /* Bo góc */
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;

  /* Hiệu ứng nổi */
  box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);

  &:hover {
    color: black; /* Chữ chuyển sang màu đen */
    background-color: white; /* Nền chuyển sang màu trắng khi hover */
    transform: translateY(-3px); /* Nâng nhẹ khi hover */
    box-shadow: 0px 15px 20px rgba(255, 255, 255, 0.4); /* Tăng shadow khi hover */
  }

  &:active {
    transform: translateY(0px); /* Trở về vị trí cũ khi click */
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.2); /* Giảm shadow khi click */
  }
`;

