import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #7a4da7, #96e7d4);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
}
  100% {
      background-position: 0% 50%;
  }
}
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 20px;
  margin-top: 10px;
  width: clamp(150px, 30vw, 320px);
  height: auto;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 10px;
  bottom: 35px; 
  width: clamp(120px, 25vw, 270px);
  height: auto;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 10;
  text-shadow: 1px 1px 0px #070707;
`;

export const RedSpan = styled.span`
  color: red;
`;

export const FooterLink = styled(Link)`
  color: white;
`;

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 320px;
  height: 60vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  background: rgba( 144, 19, 254, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 5px );
  backdrop-filter: blur( 5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;  
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: 'Permanent Marker', cursive;
  font-size: clamp(30px, 4vw, 50px);
  text-align: center;
  color: #ffd966;
  padding: 0px 20px 0px 20px;
  position: relative;
  text-shadow: 1px 1px 0px #070707;
`;

export const QuoteGeneratorSubTitle = styled.div`
  color: white;
  font-family: 'Caveat', cursive;
  font-size: clamp(22px, 3vw, 35px);
  position: relative;
  width: 100%;
  text-align: center;
  padding: 20px;
  text-shadow: 1px 1px 0px #070707;
`;

export const GenerateQuoteButton = styled.div`
  height: clamp(70px, 10vw, 100px);
  width: clamp(220px, 30vw, 300px);
  border: 2px solid darkgrey;
  border-radius: 20px;

  margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  transform-origin: center;

  background: rgba( 144, 19, 254, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 10px );
  backdrop-filter: blur( 10px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);  
    transform-origin: center;
  }
`;

export const GenerateQuoteButtonText = styled.div`
  color: #f8ef29;
  font-family: 'Caveat', cursive;
  font-size: clamp(27px, 4vw, 35px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
  text-shadow: 1px 1px 0px #070707;
`;

