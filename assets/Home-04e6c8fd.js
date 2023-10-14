import{s as t,j as s}from"./index-03b3943c.js";const e=t.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 70vh;
`,a=t.img`
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
`,r="/tweets-test/assets/bird_1-2b2b14eb.png";function i(){return s.jsx(e,{children:s.jsx(a,{src:r,width:"25%",alt:"bird"})})}export{i as default};
