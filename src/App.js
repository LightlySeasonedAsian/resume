import 'bulma/css/bulma.css';
import React from 'react';
import Collapsible from './components/Collapsible';
// import {useState} from 'react';
import Banner from './components/Banner';
// import Header from './components/Header';
import Job from './components/Job';
import Contact from './components/Contact';
import headshot from './images/headshot.jpg';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';


function App() {
  //  const [open, setOPen] = useState(false);
  return (
    <div className="app">
    <Banner
      title={"Daniel R Moreland"}
      subtitle={"Full Stack Software Engineer"}
    />
    
   
    <div className="tile is-ancestor">
      
      <div className="tile is-parent is-vertical is-4">
        <div className="tile is-child">
          <Collapsible header={"Contact Info"} contentComponent={
            <Contact
            phone={"(270) 970-9550"}
            email={
              "mailto:daniel.r.moreland@gmail.com?subject=Online Resume Inquiry"
            }
            linkedIn={"http://www.linkedin.com/in/danielrmoreland/"}
            linktree={"https://linktr.ee/danielRmoreland"}
            img={headshot}
          />
          }/>
          
          
          <Collapsible header={"Education"} contentComponent={<div>
          {/* <Header title={"Education"} /> */}
          <Education
            degree={"B.S. Electro-Mechanical Engineering"}
            school={"Murray State University"}
            date={"December 2014 – December 2017"}
            detail={["Magna Cum Laude"]}
          /> <Education
            degree={"M.S. Robotics"}
            school={"Wayne State University"}
            date={"December 2019 – December 2021"}
            detail={[""]}
          />
          </div>
        } />
          
          
        </div>
        <Collapsible header={"Skills"} contentComponent={
        <div className="tile is-child">
          <Skills detail={["NodeJS",
"MongoDB",
"React",
"JavaScript",
"Python",
"Express",
"HTML/CSS",
"GraphQL",
"SQL",
"Agile/Scrum Methodologies",
"Technical Writing",
"IEC 61131-3 (PLC’s)",
"Git",
"JSONata",
"REST API Development",
"Leadership",
"Communication",
"Active Listening"]}/>
        </div>} />
        
      </div>
      <div className="tile is-parent is-vertical-8">
        <Collapsible header={"Professional Experience"} contentComponent={
        <div className="tile is-parent is-vertical-8">
        <div className="tile is-child">
          {/* <Header title={"Professional Experience"} /> */}
          <Job
            position={"Software Engineer/ Solution Engineer/  Team Leader"}
            company={"MFGx LLC - Remote"}
            date={"September 2020 – Present"}
            detail={[
              "Spearheaded technical project leadership, overseeing the development of custom integration solutions for Fuuz Platform subscribers.",
              "Played a pivotal role in crafting and sustaining technical training courses for both external and internal stakeholders.",
              "Orchestrated the management and training of a dynamic team of Solution Engineers across diverse projects.",
              "Contributed significantly to the advancement of the IIOT team's platform code base, actively participating in code development and consistently conducting thorough peer reviews to ensure the highest quality and reliability of our software.",
            ]}
          />
          <Job
            position={"QCS Engineer"}
            company={"ABB Inc - Columbus, OH"}
            date={"June 2018 – September 2020"}
            detail={[
              "Managed and enhanced the codebase and hardware infrastructure for 800xA and legacy control systems, ensuring their continued optimal performance and functionality.",
              "Devised and executed maintenance programs and procedures, focusing on predictive maintenance and disaster recovery, achieving a factory record for machine uptime.",
              "Delivered consulting services, executed upgrades, and seamlessly integrated high-data-flow, real-time control systems for enhanced operational efficiency.",
              "Collaborated closely with local maintenance teams to facilitate seamless integration and provided essential technical and safety training to empower the workforce.",
            ]}
          />
          <Job
            position={"Human Resources Specialist"}
            company={"US Army - USA"}
            date={"April 2013 – April 2019"}
            detail={[
              "Expertly maintained a comprehensive soldier information database, ensuring accuracy and accessibility of critical personnel data.",
              "Served as the primary liaison for onboarding new team members, facilitating a seamless transition into their roles and responsibilities.",
              "Effectively supervised a team of 5-8 peers across diverse job roles, fostering collaboration and optimizing team performance.",
              "Instrumental in boosting Unit Readiness by an impressive 29%, contributing to mission success and overall operational effectiveness.",
            ]}
          />
        </div>
      </div>
      } />
      </div>
      
      
    </div>
  </div>
  
  );
}

export default App;
