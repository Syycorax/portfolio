import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import avatar from './assets/avatar.png'
import wave from './assets/wave.png'
import syswatchimg from './assets/syswatch.png'
import goforkimg from './assets/gofork.png'
import tipeImg from './assets/tipe.png'
import githubLogo from './assets/github.svg'
import issimg from './assets/isstracker.png'
import tildeimg from './assets/tilde.png'
import codeplaygroundimg from './assets/codeplayground.png'
import './App.css'

function App() {

  return (
    <>
      <div className="imgContainer">
        <img src={avatar} className="logo" alt="My avatar" />
      </div>
      <h1>Hi <img src={wave} className="emoji" alt="👋" /> <br></br>
        I'm Hector</h1>
      <h2>IT and network engineer in apprenticeship student based in Paris, France</h2>
      <div className="buttonContainer">
        <button onClick={() => document.querySelector(".mansorycontainer")?.scrollIntoView({ behavior: 'smooth' })}>
          Discover my work !
        </button>
        <button onClick={() => window.location.href = "mailto:cv@syycorax.xyz?subject=Contact Request: Resume&body=(please customize this)%0AHi,%0AI would like to know more about you, can I see your resume"}>
          My resume
        </button>
        <button onClick={() => window.location.href = "https://github.com/Syycorax"}>
          My Github
        </button>
        <button onClick={() => window.location.href = "mailto:contact@syycorax.xyz"}>
          Contact me
        </button>
      </div >
      <div className="mansorycontainer">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="16px">
            <Project name="Syswatch" description="My personal system monitoring tool" image={syswatchimg} link="https://github.com/Syycorax/syswatch" />
            <Project name="Gofork" description="Gofork is a CLI tool to find forks that are ahead of a github repository." image={goforkimg} link="https://github.com/Syycorax/gofork" />
            <Project name="TIPE" description="Simulation of a blackjack game and implementation of a decision tree" image={tipeImg} link="https://github.com/Syycorax/tipe" />
            <Project name="isstracker" description="A twitter bot that tweets the current position of the ISS" image={issimg} link="https://github.com/Syycorax/isstracker" />
            <Project name="tilde" description="A fork of the tilde project, my current homepage" image={tildeimg} link="https://github.com/Syycorx/tilde" />
            <Project name="CodePlayground" description="A vscode extension that allows you create a temporary file and run it" image={codeplaygroundimg} link="https://github.com/Syycorax/codeplayground" />
          </Masonry>
        </ResponsiveMasonry>
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
      <div className="projectImgContainer">
        <img src={image} alt={name} className='projectimg' />
      </div>
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