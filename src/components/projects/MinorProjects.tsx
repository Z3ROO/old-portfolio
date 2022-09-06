import { useRef } from "react";
import { IminorProject, minorProjects } from "../../content/projects";
import { GitLogo, NPMLogo } from "../../lib/icons";
import Container from "../atomic/Container";
import SectionTitle from "../atomic/SectionTitle";

export default function MinorProjects(): JSX.Element {

  return (
    <>
      <SectionTitle title="Libs/Tools" />
      <div className="relative h-96 select-none">
        <SlidableCardList>
          {
            minorProjects.map((project) => (
              <MinorProject project={project}/>
            ))
          }
          {
            minorProjects.map((project) => (
              <MinorProject project={project}/>
            ))
          }
        </SlidableCardList>
      </div>
    </>
  )
}

function SlidableCardList({children}: any) {
  const cardListRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rightArrowRef = useRef<HTMLDivElement>(null);
  const cardWidth = 256;

  return (
    <>
      <div ref={leftArrowRef} 
        className="hidden xl:block w-6 h-12 rounded-full bg-red-500 absolute -left-8 bottom-[50%] z-20 opacity-40"
        onClick={() => {
          const cardList = cardListRef.current;
          if (cardList == null)
            throw new Error('cardListRef no ready yet');
          
          const currentLeftPosition = Number(cardList.style.left.replace('px',''));
          let newCardListLeftPosition = currentLeftPosition < 0 ? currentLeftPosition+cardWidth : currentLeftPosition;
          
          const isCardListNotAligned = newCardListLeftPosition % cardWidth !== 0;
          if (isCardListNotAligned)
            newCardListLeftPosition = newCardListLeftPosition - (newCardListLeftPosition % cardWidth) - cardWidth
          cardList.style.left = `${newCardListLeftPosition}px`

          //style syncing
          leftArrowRef.current!.style.opacity = newCardListLeftPosition === 0 ? '.4' : '1';
          leftArrowRef.current!.style.cursor = newCardListLeftPosition === 0 ? 'auto' : 'pointer';
          rightArrowRef.current!.style.opacity = '1';
          rightArrowRef.current!.style.cursor = 'pointer';
        }}
        ></div>
      <div ref={rightArrowRef} 
          className="hidden xl:block w-6 h-12 rounded-full bg-red-500 absolute -right-8 bottom-[50%] z-20 cursor-pointer"
          onClick={() => {
            const cardList = cardListRef.current;
            if (cardList == null)
              throw new Error('cardListRef no ready yet');
            
            const visibleWidth = cardList.parentElement!.offsetWidth;
            const visibleCardsQtd = Math.floor(visibleWidth/cardWidth);
            const hiddenCardsQtd = (minorProjects.length*2)-visibleCardsQtd > 0 ? (minorProjects.length*2)-visibleCardsQtd : 0;
            const currentLeftPosition = Number(cardList.style.left.replace('px',''));
            let newCardListLeftPosition = currentLeftPosition-cardWidth >= -(hiddenCardsQtd * cardWidth) ? currentLeftPosition-cardWidth : currentLeftPosition;
            
            const isCardListNotAligned = newCardListLeftPosition % cardWidth !== 0;
            if (isCardListNotAligned)
              newCardListLeftPosition = newCardListLeftPosition + Math.abs(newCardListLeftPosition % cardWidth);

            cardList.style.left = `${newCardListLeftPosition}px`;

            //style syncing
            leftArrowRef.current!.style.opacity = '1';
            leftArrowRef.current!.style.cursor = 'pointer';
            rightArrowRef.current!.style.opacity = newCardListLeftPosition === -(hiddenCardsQtd * cardWidth) ? '.4': '1';
            rightArrowRef.current!.style.cursor = newCardListLeftPosition === -(hiddenCardsQtd * cardWidth) ? 'auto': 'pointer';
          }}
        ></div>
      <div className="relative h-96 overflow-hidden">
        <div 
          className="flex absolute left-0" ref={cardListRef}
          onMouseDown={(e) => {            
            const cardList = cardListRef.current;
            if (cardList == null)
              throw new Error('cardListRef no ready yet');

            const visibleWidth = cardList.parentElement!.offsetWidth;
            const visibleCardsQtd = Math.floor(visibleWidth/cardWidth);
            const hiddenCardsQtd = (minorProjects.length*2)-visibleCardsQtd > 0 ? (minorProjects.length*2)-visibleCardsQtd : 0;

            let count = e.clientX;
            cardList.onmousemove = (event) =>{
              const currentLeftPosition = Number(cardList.style.left.replace('px',''));
              count = count-event.clientX
              const newCardListLeftPosition = -(count/2)+currentLeftPosition;
              if (newCardListLeftPosition < 0 && newCardListLeftPosition > -(cardWidth*hiddenCardsQtd)) 
                cardList.style.left = `${newCardListLeftPosition}px`;
              count = event.clientX;

              leftArrowRef.current!.style.opacity = '1';
              leftArrowRef.current!.style.cursor = 'pointer';
              rightArrowRef.current!.style.opacity = '1';
              rightArrowRef.current!.style.cursor = 'pointer';
            }
          }}
          onTouchStart={
            (e)=> {
              const cardList = cardListRef.current;
              if (cardList == null)
                throw new Error('cardListRef no ready yet');
              
              const visibleWidth = cardList.parentElement!.offsetWidth;
              const visibleCardsQtd = Math.floor(visibleWidth/cardWidth);
              const hiddenCardsQtd = (minorProjects.length*2)-visibleCardsQtd > 0 ? (minorProjects.length*2)-visibleCardsQtd : 0;
              
              let count = e.targetTouches[0].clientX;
              cardList.ontouchmove = (event) =>{
                const currentLeftPosition = Number(cardList.style.left.replace('px',''));
                count = count-event.targetTouches[0].clientX
                const newCardListLeftPosition = -(count/2)+currentLeftPosition;
                if (newCardListLeftPosition < 0 && newCardListLeftPosition > -(cardWidth*hiddenCardsQtd)) 
                  cardList.style.left = `${newCardListLeftPosition}px`;
                count = event.targetTouches[0].clientX

                leftArrowRef.current!.style.opacity = '1';
                leftArrowRef.current!.style.cursor = 'pointer';
                rightArrowRef.current!.style.opacity = '1';
                rightArrowRef.current!.style.cursor = 'pointer';
              }
            }
          }

          onMouseUp={() => {
            const cardList = cardListRef.current;
            if (cardList == null)
              throw new Error('cardListRef no ready yet');
            cardList.onmousemove = null
          }}

          onTouchEnd={() => {
            const cardList = cardListRef.current;
            if (cardList == null)
              throw new Error('cardListRef no ready yet');
            cardList.ontouchmove = null
          }}
        >
            {children}
        </div>
      </div>
    </>
  )
}

function MinorProject({project}:{project:IminorProject}): JSX.Element {
  let {title, description, Icon} = project;
  if (title.length > 20)
    title = title.substring(0,18)+'...'
    
  return (
    <Container className="w-60 mr-4">
      <Icon className="w-48 h-48 fill-red-400"/>
      <div className="flex flex-col">
        <div className="flex-grow h-[5.5rem] overflow-hidden mb-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex">
          <GitLogo className="w-6 m-1 fill-red-400" />
          <NPMLogo className="w-6 m-1 fill-red-400" />
        </div>
      </div>
    </Container>
  )
}
