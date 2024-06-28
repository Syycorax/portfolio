import { useState } from 'react'
import reactLogo from './assets/react.svg'
import githubLogo from '/github.svg'
import avatar from '/avatar.png'
import syswatchimg from '/syswatch.png'
import goforkimg from '/gofork.png'
import tipeImg from '/tipe.png'
import wave from '/wave.png'
import './App.css'

function App() {

  return (
    <>
      <div className="imgContainer">
        <img src={avatar} className="logo" alt="My avatar" />
      </div>
      <h1>Hi <img src={wave} className="emoji" alt="👋" /> <br></br>
        I'm Hector Nussbaumer</h1>
      <h2>IT and network engineer in apprenticeship student based in Paris, France</h2>
      <div className="card">
        <button>
          My resume
        </button>
        <button>
          Discover my work !
        </button>
      </div >
      <div className="showcaseFlex">
        <Project name="Syswatch" description="My personal system monitoring tool" image={syswatchimg} link="https://github.com/Syycorax/syswatch" />
        <Project name="Gofork" description="Gofork is a CLI tool to find forks that are ahead of a github repository." image={goforkimg} link="https://github.com/Syycorax/gofork" />
        <Project name="TIPE" description="Simulation of a blackjack game and implementation of a decision tree" image={tipeImg} link="https://github.com/Syycorax/tipe" />
      </div>
    </>
  )
}

export default App

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

function Project(props: ProjectProps) {
  const { name, description, image, link } = props;
  return (
    <div className="projectcard">
      <img src={image} alt={name} className='projectimg' />
      <div className="cardFlex">
        <h3 className='projectname'>{name}</h3>
        <a href={link} className='projectlink'>
          <img src={githubLogo} alt="github logo" className='githublogo' />
        </a>
      </div>
      <p className='projectdescription'>{description}</p>
    </div >
  );
}