import { useState } from "react";
import { BabelLogo, BashLogo, BurpLogo, CachingIcon, CrytoIcon, CSSLogo, DesignThinkingIcon, DevelopmentIcon, DockerLogo, ElectronJSLogo, GitLabLogo, GitLogo, GraphQlLogo, HackerIcon, HTMLLogo, IllustratorLogo, JestLogo, JsLogo, JWTLogo, LinuxLogo, LoadBalancer, MongoLogo, NetworkIcon, NextJSLogo, NodeLogo, NPMLogo, OAuthLogo, OSIcon, OwaspLogo, PhotoshopLogo, PostCSSLogo, PostgresLogo, ReactLogo, ReactRouter, RedisLogo, FundamentalsIcon, StyledComponents, TailwindCSSLogo, VimLogo, WebpackLogo, WebProtectionIcon } from "../lib/icons";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const bigIcon = 'w-16 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100';

const mdIcon = 'w-12 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100';
const smallIcon = 'w-8 fill-red-400 m-3 inline-block opacity-75 hover:scale-110 transition-all hover:opacity-100';
const titleIcon = 'w-12 fill-red-400 inline-block';

const burpDetails = `s,of web hacking with takee ap`;
const owaspDetails = `asdasdass,adasof weasdasdb hacking wiasdasdasth takee ap`;

function ContainerTitle({title, Icon}:any) {
  return (
    <div className="mb-8">        
      <Icon className={titleIcon}/>
      <h2 className="align-bottom ml-4 text-4xl font-bold inter-black inline-block">{title}</h2>
    </div>
  )
}

export default function Skills() {
  const [detailsContainer, setDetailsContainer] = useState<any>(null);

  return (
    <section className="">
      <SectionTitle title="Skills" />
      <div className="grid lg:grid-cols-[3fr_5fr] lg:grid-rows-[7fr_5fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] gap-6">
        <Container>
          <ContainerTitle title="Design Thinking" Icon={DesignThinkingIcon}/>
          <p className="text-xl p-2">
            Recently the idea of design thinking is strongly atetched to Product Design and its variants, but it doesnt stop there. It can be aplied to literally anything, from designing your day to designing your future depicting the appropriate decisions to achieve a certain goal, a certain result.
    Of course that happens once you get a deep understanding of the fundamentals and from there it can be applied to anything.
          </p>
          <p className="text-2xl p-2">Read <a className="cursor-pointer font-bold text-red-400">this post</a> to get a taste.</p>
          {/* #The necessity is the mother of all creations. */}
        </Container>
        <Container className="row-span-2 flex flex-col xl:flex-col 2xl:flex-row">
          <div className="flex-col">
            <ContainerTitle title="Development" Icon={DevelopmentIcon} />
            <p className="text-xl px-2 mb-4">
              Around 10 years working with IT and Almost 5 of those practicing web development, currently on what some would refer to mid-to-senior level. I'm more confortable with front-end development but slowly shifting to backend with a more low-level programming approach.
            </p>
            <div className="pr-4">
              <div className="flex flex-wrap justify-between">
                <HTMLLogo className={bigIcon}/>
                <CSSLogo className={bigIcon}/>
                <JsLogo className={bigIcon}/>
                <ReactLogo className={bigIcon}/>
                <ElectronJSLogo className={bigIcon}/>    
                <PostgresLogo className={bigIcon} />
                <MongoLogo className={bigIcon} background="dark:fill-gray-700 fill-gray-200"/>
                <OSIcon className={bigIcon}/>
                <NetworkIcon className={bigIcon}/>
                <FundamentalsIcon className={bigIcon}/>
                <GraphQlLogo className={bigIcon} />      
                <NextJSLogo className={bigIcon} />
              </div>
              <div className="flex flex-wrap justify-between">
                <GitLogo className={mdIcon} />
                <RedisLogo className={mdIcon} />
                <DockerLogo className={mdIcon} background="dark:fill-gray-700 fill-gray-200"/>
                <JestLogo className={mdIcon} background="dark:fill-gray-700 fill-gray-200" />
                <GitLabLogo className={mdIcon} />
                <CachingIcon className={mdIcon} />
                <LinuxLogo className={mdIcon}/>
                <BashLogo className={mdIcon}/>
              </div>
              <div>
                <NPMLogo className={smallIcon}/>
                <WebpackLogo className={smallIcon}/>
                <BabelLogo className={smallIcon}/>
                <PostCSSLogo className={smallIcon}/>
                <TailwindCSSLogo className={smallIcon}/>
                <StyledComponents className={smallIcon}/>
                <ReactRouter className={smallIcon}/>
                <CrytoIcon className={smallIcon} />
                <OAuthLogo className={smallIcon} background="dark:fill-gray-700 fill-gray-200"/>
                <JWTLogo className={smallIcon} />
                <VimLogo className={smallIcon}/>
                <PhotoshopLogo className={smallIcon}/>
                <IllustratorLogo className={smallIcon}/>
              </div>
            </div>
          </div>
          {
            false ? 
            <div className="flex justify-center items-center dark:bg-gray-650 bg-gray-300 2xl:w-96 w-full rounded-lg shrink-0 2xl:h-full h-[calc(100%-26rem)] border border-2 border-dashed border-gray-400 shadow-inner shadow-[#0006]">
              <span className="inline-block text-center text-2xl select-none opacity-60">
                Click in one of the icons
                <br />
                <span className="text-7xl">&#11013;</span>
              </span>
            </div> :
            <Container className="2xl:w-96 w-full shrink-0 2xl:h-full h-[calc(100%-26rem)]">

            </Container>
          }
        </Container>   
        <Container className={'relative'}>
          <ContainerTitle title="Security" Icon={HackerIcon} />
          <p className="text-xl">
            A full year of intesive study of web hacking with takes on bugbounty hunting.A full year of intesive study of web hacking with takes on bugbounty hunting.
          </p>
          {detailsContainer && <div className="testt overflow-hidden">
            {detailsContainer.text}
          </div>}
          
          {/* {detailsContainer && <div 
            className={`absolute mt-4 w-[3.5rem] h-[3.5rem] bg-gray-250 z-3 rounded-b-md transition-all shadow-md shadow-[#0004]`} 
            style={{
              left: (detailsContainer.position * 3.5 + 1.5) +'rem'
              }}>
            </div>} */}
          <div className="relative z-4 mt-4">
            <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === 0 ? 'scale(1.1)' : ''}} Icon={BurpLogo} details={{text:burpDetails,position: 0}} setDetailsContainer={setDetailsContainer} />
            <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === 1 ? 'scale(1.1)' : ''}} Icon={OwaspLogo} details={{text:owaspDetails,position: 1}} setDetailsContainer={setDetailsContainer} />
            <SecuritySectionIcon className="transition-all" style={{transform: detailsContainer?.position === 2 ? 'scale(1.1)' : ''}} Icon={WebProtectionIcon} details={{text:owaspDetails,position: 2}} setDetailsContainer={setDetailsContainer} />
          </div>
        </Container>
      </div>
    </section>
  )
}

function SecuritySectionIcon({Icon, children, className, style, details, setDetailsContainer}:any) {
  return (
    <div className={"inline-block p-2 "+className} onMouseEnter={() => setDetailsContainer(details)} onMouseLeave={() => setDetailsContainer(null)} style={style}>
      <Icon className={'w-10 fill-red-400 inline-block'} />
    </div>
  )
}