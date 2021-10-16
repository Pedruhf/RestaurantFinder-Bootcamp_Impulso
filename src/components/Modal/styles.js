import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  pading: 24px;
  background: #FFF;
  box-shadow: 0 0 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;
