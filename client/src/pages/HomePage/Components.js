import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* Đảm bảo chiều rộng chiếm toàn bộ màn hình */
  height: 100vh;
  background-image: url('/bg.png'); /* Đường dẫn ảnh nền */
  background-size: cover; /* Bao phủ toàn bộ màn hình */
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Đặt phía sau nội dung */
`;

export const Footer = styled.footer`
  width: 100%; /* Mở rộng toàn màn hình */
  padding: 20px;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
`;
