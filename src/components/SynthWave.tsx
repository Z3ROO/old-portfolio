import { useEffect, useRef } from "react";
import synthImg from '../synth.png';

// function WaveDot(lineXAxis:number, lineAngle: number, index:number, qtd:number) {
//   const dotElement = document.createElement('div');
//   dotElement.classList.add('wave-dot');

//   const dotWrapper = document.createElement('div');
//   dotWrapper.classList.add('wave-dot-wrapper');
//   //old lineXAxis 5.8
//   const xAxis = lineXAxis > 997 ? lineXAxis-(index*lineAngle)+'px' : (index*lineAngle)+lineXAxis+'px';
//   const yAxis = (index*16.3)+14+'px';
//   const horizonDistanceBetweenDots = `${100 - (100/qtd*0.75)*index}px`;
//   const delayBetweenDots = `${index*150}ms`;
  
//   dotWrapper.style.left = xAxis;
//   dotWrapper.style.bottom = yAxis;
//   dotWrapper.style.animationDelay = delayBetweenDots;
//   dotWrapper.style.height = horizonDistanceBetweenDots;
  
//   dotWrapper.appendChild(dotElement)

//   return dotWrapper;
// }
function horizonScaleDown(qtd:number) {
  let arr = new Array(qtd).fill(100/qtd);
  arr.forEach((val, index) => {
    if (arr[index+1])
      recurse(arr, index, index+1);
  })

  arr = arr.map((mapVal, mapIndex) => (
    arr.reduce((reduceAcc, reduceVal, reduceIndex) => reduceIndex <= mapIndex ? reduceAcc + reduceVal : reduceAcc, 0)
  ))

  return arr
}

function recurse(arr:number[],baseIndex:number, incIndex:number){
  arr[baseIndex] += arr[incIndex]*0.05
  arr[incIndex] -= arr[incIndex]*0.05
  if (arr[incIndex+1])
    recurse(arr, baseIndex, incIndex+1);
  else
    return
}


function WaveDot(lineNth:number, lineAngle: number, dotsQtd:number, dotNth:number, yPosition: number) {
  const dotElement = document.createElement('div');
  dotElement.classList.add('wave-dot');

  const dotWrapper = document.createElement('div');
  dotWrapper.classList.add('wave-dot-wrapper');
  
  const centerPosition = 52;
  let spaceBetweenLines = 11;
    

  const dotXAxis = lineNth > 0 ? centerPosition+((spaceBetweenLines*Math.abs(lineNth))-lineAngle*(yPosition/100))+'%' : centerPosition-((spaceBetweenLines*Math.abs(lineNth))-lineAngle*(yPosition/100))+'%';
  const dotYAxis = `${yPosition}%`;
  const horizonScaleResize = `${(100 - (100/dotsQtd*0.75)*dotNth)/3}px`;
  const delayBetweenDots = `${dotNth*150+150*-Math.abs(lineNth)}ms`;
  
  dotWrapper.style.left = dotXAxis;
  dotWrapper.style.bottom = dotYAxis;
  dotWrapper.style.animationDelay = delayBetweenDots;
  dotWrapper.style.height = horizonScaleResize;
  
  dotElement.style.animationDelay = delayBetweenDots;

  if (dotNth < (dotsQtd / 5)) {
    dotElement.style.height = '5px'
    dotElement.style.width = '5px'
  }
  else if (dotNth < (dotsQtd / 5)*2) {
    dotElement.style.height = '4px'
    dotElement.style.width = '4px'
  }
  else if (dotNth < (dotsQtd / 5)*3) {
    dotElement.style.height = '3px'
    dotElement.style.width = '3px'
  }
  else if (dotNth < (dotsQtd / 5)*4) {
    dotElement.style.height = '2px'
    dotElement.style.width = '2px'
  }
  else if (dotNth < (dotsQtd / 5)*5) {
    dotElement.style.height = '1px'
    dotElement.style.width = '1px'
  }

  dotWrapper.appendChild(dotElement)

  return dotWrapper;
}

function waveLine(line:number, angle:number, dots:number, yPosition: number[]) {
  const lineElement = document.createElement('div');
  lineElement.classList.add('wave-line');
  for(let i = 0; i < dots; i++) {
    if (line-Math.floor(line) !== 0 && i%3 !== 0){

    }
    else
      lineElement.appendChild(WaveDot(line, angle, dots, i, yPosition[i]));
    // lineElement.appendChild(WaveDot(161, 15.7, i, 33));
    // lineElement.appendChild(WaveDot(370, 11.7, i, 33));
    // lineElement.appendChild(WaveDot(579, 7.8, i, 33));
    // lineElement.appendChild(WaveDot(788, 3.9, i, 33));
    // lineElement.appendChild(WaveDot(997, 0, i, 33));
    // lineElement.appendChild(WaveDot(1206, 3.9, i, 33));
    // lineElement.appendChild(WaveDot(1415, 7.8, i, 33));
    // lineElement.appendChild(WaveDot(1624, 11.7, i, 33));
    // lineElement.appendChild(WaveDot(1833, 15.7, i, 33));
  }

  return lineElement
}

function wavePlane(width:string, height: string, dots:number, lines: {left?:number, right?:number, eachSide?:number}) {
  const { eachSide } = lines
  const plane = document.createElement('div');
  const yPosition = [0, ...horizonScaleDown(dots-1)];
  const angle = 6.6;

  plane.appendChild(waveLine(0, 0, dots, yPosition))
  // plane.appendChild(waveLine(1, angle*1, dots, yPosition))
  // plane.appendChild(waveLine(2, angle*2, dots, yPosition))
  // plane.appendChild(waveLine(3, angle*3, dots, yPosition))
  // plane.appendChild(waveLine(4, angle*4, dots, yPosition))
  // plane.appendChild(waveLine(5, angle*5, dots, yPosition))
  // plane.appendChild(waveLine(6, angle*6, dots, yPosition))  
  // plane.appendChild(waveLine(-1, angle*1, dots, yPosition))
  // plane.appendChild(waveLine(-2, angle*2, dots, yPosition))
  // plane.appendChild(waveLine(-3, angle*3, dots, yPosition))
  // plane.appendChild(waveLine(-4, angle*4, dots, yPosition))
  // plane.appendChild(waveLine(-5, angle*5, dots, yPosition))
  // plane.appendChild(waveLine(-6, angle*6, dots, yPosition))  
  // plane.appendChild(waveLine((1/3)*1, (angle/3)*1, dots, yPosition))
  // plane.appendChild(waveLine((1/3)*2, (angle/3)*2, dots, yPosition))
  // plane.appendChild(waveLine(-(1/3)*1, (angle/3)*1, dots, yPosition))
  // plane.appendChild(waveLine(-(1/3)*2, (angle/3)*2, dots, yPosition))
  // plane.appendChild(waveLine(((1/3)*1+1), angle*1+(angle/3)*1, dots, yPosition))
  // plane.appendChild(waveLine(((1/3)*2+1), angle*1+(angle/3)*2, dots, yPosition))
  if (eachSide == null)
    throw new Error()

  for(let i = 0; i < eachSide; i++) {
    const line = i+1;

    plane.appendChild(waveLine(line, angle*line, dots, yPosition))
    plane.appendChild(waveLine(((1/3)*1+i), angle*i+(angle/3)*1, dots, yPosition))
    plane.appendChild(waveLine(((1/3)*2+i), angle*i+(angle/3)*2, dots, yPosition))

    plane.appendChild(waveLine(-line, angle*line, dots, yPosition))
    plane.appendChild(waveLine(-((1/3)*1+i), angle*i+(angle/3)*1, dots, yPosition))
    plane.appendChild(waveLine(-((1/3)*2+i), angle*i+(angle/3)*2, dots, yPosition))

  }

  return plane;
}


export default function SynthWave() {
  const waveRef = useRef<HTMLDivElement|null>(null)
  useEffect(() => {
    waveRef.current?.appendChild(wavePlane('100%', '100%', 33, {eachSide: 10}))
  });

  return (
    <div className="absolute w-full bottom-0 z-3">
      <div ref={waveRef} className="absolute w-full h-full">
      </div>
      <img src={synthImg} alt='' className="w-full h-[auto] opacity-0"/>
    </div>
  )
}