import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 70vh;
`;

export const Svg = styled.img`
  -webkit-animation: pulsing 10s infinite;
  animation: pulsing 10s infinite;

  @-webkit-keyframes pulsing {
    0% {
    -webkit-transform: scale(0.4, 0.4);
    transform: scale(0.4, 0.4)
  }
  25% {
    -webkit-transform: scale(0.6, 0.6);
    transform: scale(0.6, 0.6)
  }
  50% {
    -webkit-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
  }
  75% {
    -webkit-transform: scale(1.0, 1.0);
    transform: scale(1.0, 1.0)
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
  }
}

@keyframes pulsing {
  0% {
    -webkit-transform: scale(0.4, 0.4);
    transform: scale(0.4, 0.4)
  }
  25% {
    -webkit-transform: scale(0.6, 0.6);
    transform: scale(0.6, 0.6)
  }
  50% {
    -webkit-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
  }
  75% {
    -webkit-transform: scale(1.0, 1.0);
    transform: scale(1.0, 1.0)
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
  }
}
`;
