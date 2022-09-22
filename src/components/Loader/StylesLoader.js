import styled from 'styled-components';

export const StylesLoader = styled.div`
align-items: center;  
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed; 
  transition: all 150ms ease-out;

span {
    width: 500px;
    height: 30px;
    display: inline-block;
    text-align: center;
    background-color: hsl(245, 44%, 41%);
    background-image: linear-gradient(
    to top left,  #8A2BE2, #4B0082
  );
}

.preloader--hide {
  opacity: 0;
  visibility: hidden;
  z-index: -1;
}

.loader {
  position: relative;
  background-color: #4B0082;
  width: 100%;
  height: 100vh;
  color: #4B0082;
  text-shadow: 2px 2px 1px 	#B0C4DEb5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: changeColor 1500ms linear infinite;
}

@keyframes changeColor {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.loader__div {
  position: relative;
  display: flex;
}

.loader__tittle {
  color: #00ff0a;
  font-family: consolas;
  font-weight: 300;
  letter-spacing: 12px;
}

.dot {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  background: #00ff0a;
  box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
    0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 110px #00ff0a;

  margin: 20px 10px;
  transform: scale(0.1);
  border-radius: 50%;
  animation: animateDot 1.2s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes animateDot {
  0% {
    transform: scale(0.1);
  }
  10% {
    transform: scale(1);
  }
  50%,
  100% {
    transform: scale(0.1);
  }
}
`;