import styled from 'styled-components';

export const ModalSettings = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 100;
  right: 0;
`;

export const ModalWindow = styled.div`
    width: 250px;
    position: absolute;
    border-radius: 5px 0 0 5px;
    padding: 15px;
    right: 0;
    top: 0;
    background: linear-gradient(90deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.24) 5%,rgba(0, 0, 0, 0.3) 10%,rgba(0, 0, 0, 0.48) 26%);
    height: 100vh;
`;

export const CloseButton = styled.i`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 25px;
  cursor: pointer;
`;
