import React, { useState, useRef } from "react";
import logo from './logo.svg';
import Windows95 from './img/Windows95.webp'
import Clippy from './img/clippy.png'
import './App.css';


function App() {

  const [display, setDisplay] = useState("displayed");
  const [hidden, setHidden] = useState("notdisplayed");
  const [hiddenDisplayNone, setHiddenDelay] = useState("notdisplayed-none");
  const [check, setCheck] = useState(false);

  const showOverwhelmed = e => {
    e.preventDefault();
    setCheck(true);
    document.getElementById("overwhelmed").classList.remove("notdisplayed-none");
    document.getElementById("overwhelmed").play();
    document.getElementById('overwhelmed').muted = false;

  }

  const hideOverwhlemed = e => {
    setCheck(false);
    document.getElementById("overwhelmed").classList.add("notdisplayed-none");
    document.getElementById("overwhelmed").pause();

  }

  const showProfound = e => {
    e.preventDefault();
    document.getElementById("profound").classList.remove("notdisplayed-none");
    document.getElementById("profound").play();
  }

  const hideProfound = e => {
    document.getElementById("profound").classList.add("notdisplayed-none");
    document.getElementById("profound").pause();
  }


  const showUgly = e => {

  }

  const hideUgly = e => {
  }


  const showBroken = e => {

    setTimeout(() => {
      document.getElementById('luke').style.opacity = '100%';
    }, 1500)

    e.preventDefault();
    setDisplay("notdisplayed");
    setHidden('displayed');
    setHiddenDelay('displayed');
    document.querySelector(".bio").style.backgroundColor = "#1B03B0";

    appendNCopies();

    function appendNCopies() {

      var errorDiv = document.getElementById("error");
      var clippyDiv = document.getElementById("clippy");

      for (var i = 0; i < 30; i++) {
        var clippyClone = clippyDiv.cloneNode(true);
        clippyClone.id = `clippy-clone-${i}`;
        document.getElementById("error-window").appendChild(clippyClone);
        clippyClone.style.animationDelay = i * 50 + 'ms';
        clippyClone.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        clippyClone.style.top = Math.random() * 3000 + 'px'
        clippyClone.style.left = Math.random() * 3000 - 500 + 'px';


      }

      for (var i = 0; i < 100; i++) {
        var clone = errorDiv.cloneNode(true);

        clone.id = `error-clone-${i}`;
        document.getElementById("error-window").appendChild(clone);

        var errorClone = document.getElementById(`error-clone-${i}`);
        errorClone.style.animationDelay = i * 50 + 'ms';
        errorClone.style.top = Math.random() * 3000 + 750 + 'px'
        errorClone.style.left = Math.random() * 3000 - 500 + 'px';


      }

      /*
      setTimeout(function () {
        setHiddenDelay('displayed');
      }, 1500);*/

    }

  }


  const hideBroken = e => {
    e.preventDefault();
    setDisplay("displayed");
    setHidden('notdisplayed');
    setHiddenDelay('notdisplayed-none');
    removeInput();

    document.querySelector(".bio").style.backgroundColor = "var(--computer-blue)";
    document.getElementById('luke').style.opacity = '0%';

    function removeInput() {

      for (var i = 0; i < 100; i++) {
        const errorWindow = document.getElementById('error-window');
        const errorClones = errorWindow.querySelectorAll(`#error-clone-${i}`);

        [...errorClones].forEach(errorClone => errorWindow.removeChild(errorClone));
      }

      for (var i = 0; i < 30; i++) {
        const errorWindow = document.getElementById('error-window');
        const clippyClones = errorWindow.querySelectorAll(`#clippy-clone-${i}`);

        [...clippyClones].forEach(clippyClone => errorWindow.removeChild(clippyClone));
      }
    }
  }


  return (

    <>

      <div className="App">
        <div className="site-wrapper">
          <div className="availability-header">
            <div className="message-container">
              👋🏼 Available soon – <a href="https://www.akndesign.com/hire-me" className="link">Read more</a>
            </div>
          </div>
          <header className="header">
            <div className=" scroll-trigger scroll-visible visible is-in-view"> <a href="" title=""
              className="home-programme-item-link">
              <h4 id="home-programme-mirage-creative-title" className="font-size-small home-programme-item-title"> WELCOME TO
                PHONELINES AVAILABLE • ALEXANDER NEUMANN • AT YOUR SERVICE •
                (617) 580-6799 • ALEXANDER@AKNDESIGN.COM • WHY WAIT </h4>
            </a>
            </div>
            <div id="nav">
              <a id="menu"></a>
              <div className="easter-eggs">
                <a href="/pages/caffeine"
                  style={{ backgroundImage: "url('https://shopify.com/s/files/1/0999/7114/files/ee-1_x1024@3x.png?v=1537104955')" }}></a>
                <a href="/pages/no-prob"
                  style={{ backgroundImage: "url('https://shopify.com/s/files/1/0999/7114/files/project_blob_9_x1024@3x.png?v=1534103206')" }}></a>
                <a href="/pages/streaks"
                  style={{ backgroundImage: "url('https://shopify.com/s/files/1/0999/7114/files/ee-3_x1024@3x.png?v=1537104982')" }}></a>
              </div>
            </div>
            <a href="https://www.akndesign.com/"></a>
            <nav className="primary-nav">
              <ul className="primary-navigation">
              </ul>
            </nav>
          </header >

          <img src={require("./img/c_Misfits_30082019_Shot_10_802.jpg")} width="120px" className=""></img>

        </div>

        <div className="bio">

          <div className={display + " checkers"}></div>
          <div className={display + " checkers"}></div>

          <div id="shopify-section-1628089120a9851409" className="shopify-section">
            <img src="./img/about-03.svg" className={"about-title-2 " + display}></img>
          </div>

          <div className="chee-header" style={{ textAlign: 'center' }}>** A little bio **</div>

          <div className="love-letter-text">


            <span id="section-1" className={display}>COVID-19 pandemic. Terror attacks, climate change, and political turmoil. The horrors of 9/11. Brexit.
              January 6th. Russo-Ukrainian War. It's easy to feel a <span className="yellow underline" onMouseOver={(event) => { showOverwhelmed(event); }} onMouseLeave={event => hideOverwhlemed(event)}>
                little overwhelmed</span> by the state of
              the affairs.<br></br><br></br>

              <video id="overwhelmed" muted={true} preload="auto" autoPlay={check} controls className={"notdisplayed-none iIsbUd"} >
                <source src={require("./video/meangirls.mp4")} type="video/mp4" />
              </video>

              We may feel <span className="alpina LoveLetter__Italicized-sc-xgc8nl-8" style={{ color: "#faffa3" }}> powerless </span>
              against these issues, but no matter how  <span className={`"LoveLetter__Italicized-sc-xgc8nl-8" yellow underline`} onMouseOver={(event) => { showUgly(event); }} onMouseLeave={event => hideUgly(event)}>ugly</span> or <span id="broken" className={"underline yellow"} onMouseOver={(event) => { showBroken(event); }} onMouseLeave={event => hideBroken(event)}>broken</span>
              <span> things may seem</span>
              <span className={display + " alpina"}> on the outside,</span>
              <span className={display}>there will always be something </span>


              <span className={display + " underline cooper"} onMouseOver={(event) => { showProfound(event); }} onMouseLeave={event => hideProfound(event)}>profound.</span>

              <video id="profound" autoPlay controls className={"notdisplayed-none"} >
                <source src={require("./video/space-odyssey-2.mp4")} type="video/mp4" />
              </video>

            </span>
            <br></br><br></br>
            {/* <br></br><br></br>,.. */}

            <span className={display + ' LoveLetter__Italicized-sc-xgc8nl-8 alpha'}><div className={display + ' LoveLetter__Circle-sc-xgc8nl-6 LoveLetter__PlainCircle-sc-xgc8nl-13 arrow'}></div> My name is <span className="cooper"> Alexander
              Neumann. </span>
              <span className={display + ' cooper'}>aknDesign</span> is my moniker for my work. I <span
                className="LoveLetter__Underlined-sc-xgc8nl-7 underline cooper ">design, code and user interfaces.</span> <span>
                I was born and raised in Victoria, BC, Canada, educated and lived in London, UK and now reside in Boston,
                MA, USA. I'm an amateur cinephile and painter.</span>
            </span>
            <br></br>
            <br></br>


            <span className={display}> My
              client-based work has got the attention <span className={display + " LoveLetter__Circle-sc-xgc8nl-6 LoveLetter__ExclamationPoint-sc-xgc8nl-14 lkQZlU"}>!</span> of <a className="alpina" href="https://keelingcurve.ucsd.edu/">
                Buzzfeed,</a><a className="alpina" href="https://keelingcurve.ucsd.edu/">
                the Globe and Mail</a>, and Wallpaper Magazine. My freelance
              clients include <span className="cooper underline">Christopher Wylie</span> (Cambridge
              Analytica),
              <span className="LoveLetter__Italicized-sc-xgc8nl-8 fQDYNc cooper underline"> Citymapper</span>, and<span
                className="cooper underline"> UsTwo</span>. In my work, I examine <span className="cooper">
                joy, play and discovery, but I'm attentive to the details. </span>
              <p>
                <br></br><br></br>
                <span className={display}>So, <span className="LoveLetter__Italicized-sc-xgc8nl-8 fQDYNc">here</span> is to the moments
                  of joy. The <span className="cooper">Misfits.</span> And some recent projects that may remind you it's not
                  <span className="alpina"> all doom and gloom </span> out there.
                </span> Be well. <span
                  className="pill-button"><span>live long
                    and prosper</span></span>

              </p>
            </span>
          </div>
        </div>

        <img id="luke" src={require('./img/luke.gif')} className={hiddenDisplayNone}></img>
        <div className={hidden + " Windows-Wrapper"}>
          <div id="error-window">
            <div id="clippy" className="clippy">
              <img src={require('./img/clippy.png')}></img>
            </div>
            <div id="error" className="error">
              <div className="title">Critical Error
                <button className="close-button">X</button>
              </div>
              <div className="message"><img src="http://www.routinebot.com/wp-content/uploads/2009/06/error.png" />An error has occurred while displaying aknDesign. Please move your mouse.</div>
              <button className="ok"> <span>OK</span></button>
            </div>
          </div>
          <div className="Windows-Content ms-sans" style={{ color: 'white' }}>
            <div className="Windows-Header"> aknDesign 98</div>
            <span className="Windows-Description">A fatal exception OE has occurred at 0028:C0034B23.The current application will be terminated.</span>
            <ul>
              <li>* Press any key to terminate the current application.</li>
              <li>* Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
            </ul>
            <div className="Windows-Description-Key">Move your cursor to continue _
            </div>
          </div>
        </div></div >

      <footer className={"footer show"} >
        <div className="footer-body-container">
          <div className="footer-body">
            <ul className="social grid-column">
              <li><a className="twitter" rel="noopener" href="https://twitter.com/Futurefabric" target="_blank">Twitter</a>
              </li>
              <li><a className="instagram" rel="noopener" href="https://instagram.com/futurefabric" target="_blank">Instagram</a></li>
            </ul>
            <ul className="company-details grid-column">
              <li>© aknDesign Ltd. 2008–2022</li>
            </ul>
          </div>
        </div>
      </footer>
    </>

  );

}

export default App;
