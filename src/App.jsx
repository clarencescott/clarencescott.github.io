import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function navOpen() {
  if(document.getElementById("navigation").style.display == 'block'){
    document.getElementById("navigation").style.display = 'none';
    document.getElementById("navigation").style.visibility = 'hidden';
}else{
  document.getElementById("navigation").style.display = 'block';
  document.getElementById("navigation").style.visibility = 'visible';
}
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="floating-nav-button" onClick={navOpen}></div>
    <Router>
    <div className="navigation"  id="navigation">
      <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 80 80">
<path fill="#E5C7FF" d="M6.5 77.5L6.5 26.286 39.996 6.58 73.5 26.286 73.5 77.5z"></path><path fill="#000" d="M39.996,7.16L73,26.572V77H7V26.572L39.996,7.16 M39.996,6L6,26v52h68V26L39.996,6L39.996,6z"></path><path fill="#95F1F1" d="M7 71H73V77H7z"></path><path fill="#95F1F1" d="M39.995 9.875L2.5 32.801 2.5 25.511 39.995 2.586 77.5 25.511 77.5 32.801z"></path><path fill="#000" d="M39.995,3.172L77,25.792v6.117L40.517,9.608l-0.522-0.319l-0.522,0.319L3,31.909v-6.117 L39.995,3.172 M39.995,2L2,25.231v8.462l37.995-23.231L78,33.692v-8.462L39.995,2L39.995,2z"></path><g><path fill="#fff" d="M28.5 42.5H51.5V77.5H28.5z"></path><path fill="#000" d="M51,43v34H29V43H51 M52,42H28v36h24V42L52,42z"></path></g><path fill="#000" d="M46.5 60A1.5 1.5 0 1 0 46.5 63A1.5 1.5 0 1 0 46.5 60Z"></path>
</svg></Link></li>
  <li><Link to="/#portfolio">Portfolio</Link></li>
  <li><Link to="/#blog">Blog</Link></li>
  <li><Link to="/#contact">Contact</Link></li>
    </div>
    <main>
      <div className="header">
        <div className="header-contents">
          <h1>Clarence Scott</h1>
          <h2>Software Engineer</h2><h3>I'm Clarence Scott, also known as BioGlytch. A father, coder, and technology enthusiast with a passion for both engineering and exploring nature.</h3>
          <div className="header-call-to-action">
            <button> <a href="/resources/Clarence Scott II - Resume.pdf" download>Resume</a></button>
            <button> <a href="#portfolio">Work</a></button>
          </div>
        </div>
      </div>
      {/*This is the section for my portfolio projects */}
      <div className="portfolio" id="portfolio">
        <div className="portfolio-contents">
          {/* First section of the port cards container */}
          <div className="port-cards">
           <div className="port-card">
            <div className="left-side">
              <img src="/Vidal.png" alt="" />
            </div>
            <div className="right-side">
              <h3>VIDAL AI Assistant</h3>
              <p>VIDAL (Vee-dal) AI Assistant is an AI developed for my home.</p>
              <a className="projectLink" href="https://github.com/clarencescott/OfficeAIBeta">Office AI - Project</a>
              <p>Coding Stack: C#, .NET, .NET Core</p>
            </div>
           </div>
           <div className="port-card">
            <div className="left-side">
              <img src="/Web Page App.png" alt="" />
            </div>
            <div className="right-side">
              <h3>Web Sites (LIVE)</h3>
              <p>Below is a list of live websites for clients, friends and family.</p>
              <a className="projectLink" href="http://">Link to Project</a>
              <p>Coding Stack: HTML, CSS, JavaScript, React</p>
            </div>
           </div>
          </div>
          {/* Second section of the port cards container */}
          <div className="port-cards">
           <div className="port-card">
            <div className="left-side">
              <img src="/Zero.png" alt="" />
            </div>
            <div className="right-side">
              <h3>Micro Board Projects</h3>
              <p>Various Projects with Arduino, RaspberryPi and ESP32 boards</p>
              <a className="projectLink" href="http://">Link to Project</a>
              <p>Coding Stack: C#, Python, Kali Linux, Scripting, Bash</p>
            </div>
           </div>
           <div className="port-card">
            <div className="left-side">
              <img src="/STEEL.png" alt="" />
            </div>
            <div className="right-side">
              <h3>S-T-E-E-L</h3>
              <p>Students Thriving in Engineering & Emerging Leadership,
                is for anyone looking to start a web based portfolio.</p>
              <a className="projectLink" href="/resources/STEEL Brochure.pdf" target="_blank">Link to Project</a>
              <p>Coding Stack: HTML, JavaScript, CSS</p>
            </div>
           </div>
          </div> {/* Third section of the port cards container */}
          <div className="port-cards">
           <div className="port-card">
            <div className="left-side">
              <img src="/writerIMG.jpg" alt="" />
            </div>
            <div className="right-side">
              <h3>Studies & Research</h3>
              <p>Personal research projects about various topics.</p>
              <a className="projectLink" href="http://">View Studies</a>
              <p>Coding Stack: Word (XML, Excel, HTML)</p>
            </div>
           </div>
           <div className="port-card">
            <div className="left-side">
              <img src="/nature.jpg" alt="" />
            </div>
            <div className="right-side">
              <h3>Exhibitions</h3>
              <p>Video series for you to follow along with my travel ideas.</p>
              <a className="projectLink" href="/public/resources/STEEL Brochure.pdf" target="_blank">Experience the Journey</a>
              <p>Coding Stack: NA</p>
            </div>
           </div>
          </div>
        </div>
        {/* Creating a section for some type of informative text */}
        <div className="portfolio-latest">
          <h1>Current Work</h1><br />
          <div className="current-work-box">
            <div className="mla-title">
              <div className="name">Clarence Scott</div>
              <div className="date">10/10/2024</div>
              <div className="titleofproject">Personal Portfolio Store Front</div>
              <div className="mla-paragraph">
                <p>I am currently working on a store front from my website, to sell my books. These books are all coding books, merchandise and courses. Some for free and some for sale.</p>
                <p>I will add more details to this paragraph as time goes on as I am just now beginning to devleop this page.</p>
                <p>Click the link below to check out the development of this project live.</p>
                <a href="#">Link to Development Projects</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="blog" id="blog"></div>
      <div className="contact" id="contact">
        <p>Phone: 810.241.8724 <br />
          Email: scottclarence5@gmail.com <br />
          Location: Michigan
        </p>
      <form action="https://formsubmit.co/youremail@domain" method="post">
      {/* <!--Input sanitization for emails-->*/}
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" id="email" required />
         <small>Enter a valid email address.</small>
         {/* <!-- Sanitation for phone numbers--> */}
         <label htmlFor="phone">Phone:</label>
         <input pattern="\d{3}[-.\s]?\d{3}[-.\s]?\d{4}"  type="tel" name="phone" id="phone" required />
         <small>Enter a valid contact number. Only numeric characters allowed.</small>
         {/* <!--Secure data Handling: Submission.-->*/}
         <label htmlFor="comments">Message:</label>
         <textarea name="comments" id="comments" required></textarea>
         <small>Avoid entering sensitive information here.</small>
       <button type="submit">Submit</button>
        </form>
      </div>
      <footer><p>Website Created by Clarence Scott | Astro Clare Technology | &copy; 2024 </p></footer>
    </main>
    </Router>
    </>
  )
}

export default App