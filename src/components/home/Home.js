import "./Home.css";
import img1 from "./assets/img1.png";
import arraow from "./assets/Line 2.png";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import step4 from "./assets/step4.png"; 
import step5 from "./assets/step5.png";
import step6 from "./assets/step6.png";
import step7 from "./assets/step7.png";
import React from "react";


const Home = () => {
  

  return (
    <>
      {/* About Section ------------------- */}
      <div className="aboutSectionContainer">
        <div className="aboutsection">
          <div className="writing">
            <div className="mainheading">BitMemoir</div>
            <div> <span className="submainheading">For</span><span style={{marginLeft:"20px"}} className="mainheading">Education</span></div>
            <div className="secondheading">
              Transforming the education system
            </div>
            <button
              onClick={() => {
                let toScrollElement =
                  document.getElementById("whatisbitmemoir");
                toScrollElement.scrollIntoView();
              }}
            >
              Learn More
            </button>
          </div>
          <div className="illustration">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="aboutsectionmobile">
          <div className="illustration">
            <img src={img1} alt="blockchainImage" />
          </div>
          <div className="writing">
            <div className="mainheading">BitMemoir</div>
            <div> <span className="submainheading">For</span><span style={{marginLeft:"20px"}} className="mainheading">Education</span></div>
            <div className="secondheading">
            Transforming the education system
            </div>
            <button
              onClick={() => {
                let toScrollElement =
                  document.getElementById("whatisbitmemoir");
                toScrollElement.scrollIntoView();
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="nextpagearrowcontainer">
          <div className="nextpagearrow"></div>
        </div>
      </div>
      {/* BitMemoir Description Section ------------------------ */}
      <div className="descriptionsectioncontainer" id="whatisbitmemoir">
        <div className="descriptionsection">
          <div className="writing">
              <div className="heading">Blockchain For</div>
              <div className="heading" >Colleges And Universities</div>
            {/* <hr /> */}
            <div className="certificatesectioncontainer2">
            <div className="certificatesectioncontainer2part1">
              <div className="certificatesissued2">
                <div className="heading1">1</div>
                <div className="heading2">MICROCREDENTIALS </div>
                <div className="heading3">They Are Intended to Certify Career Paths And Skills For The Workplace. They Also Apply To Short Course And Professional Update Cycles.</div>
              </div>
              <div className="certificatesissued2">
                <div className="heading1">2</div>
                <div className="heading2">PROOF OF PARTICIPATIONS</div>
                <div className="heading3">NFTs Intended To Accredit The Participation Of Members Of The Education Community In Acts And Events Of The Institution.</div>
              </div>
            </div>
            <div className="certificatesectioncontainer2part2">
              <div className="certificatesissued2">
                <div className="heading1">3</div>
                <div className="heading2">DISTINCTIONS AND AWARDS</div>
                <div className="heading3">Badges That Certify Distinctions And Recognitions Granted By The Institution To Its Teachers Or Students. Medals Of Honor, Best Average, Sports Achievement</div>
              </div>
              <div className="certificatesissued2">
                <div className="heading1">4</div>
                <div className="heading2">UNDERGRADUATE AND GRADUATE DEGREES</div>
                <div className="heading3">Qualification Granted By The Institution To Its Students Only (School,University And Postgraduate)</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* How to use Section--------------------- */}
      <div className="howtousecontainer">
        <div className="whybitmemomaindiv">
          <div className="whybitmemoheading">
            <div className="howtouseheading">Why <br/> BitMemoir?</div>
            <div className="whybitmemotext">Transforming the education ecosystem by issuing authentic and verified credentials and completely negating the possibility of duplicate, fake or fudged documents.</div>
            <div className="whybitmemoArrow"><img src={arraow} alt="arrow" ></img></div>
          </div>

          
          <div className="howtouseimageleft">
            <div>
              {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1Q8fG0TtVAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/pojWsn2KotU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Sections ---------------------------------------- */}

      {/* Why Bit Section ---------------------------------------- */}
      <div className="joinContainer">
        <div className="stepsheadingbtndiv">
            <div className="benefit">
              GENERATE DEGREES
            </div>
            <div className="benefit2">
              GENERATE CERTIFICATES
            </div>
        </div>
      </div>
      <div className="whybitcontainer">
        <div className="stepsHeading">
          <div className="heading-1">Steps For </div>
          <div className="heading-1"> Issuing Certificates</div>
          <div className="stepText">tHE WAY FOR AN INSTITUTION TO GENERATE UNIVERSITY OR SCHOOL DEGREES IN BLOCKCHAIN</div>
        </div>
        

        <div className="stepscontainer">
          <div className="step">
            <div className="stepimg">
              <img src={step1} alt="step1" />
            </div>
            <div className="stepheading">
              STEP 01
            </div>
            <div className="steptext">
              The institution buys a plan according to their needs
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <img src={step2} alt="step2" />
            </div>
            <div className="stepheading">
              STEP 02
            </div>
            <div className="steptext">
            We request the legal information and a note with the legal signature of the highest authority
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <img src={step3} alt="step3" />
            </div>
            <div className="stepheading">
              STEP 03
            </div>
            <div className="steptext">
              Our company validates the institution as a secure account
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <img src={step4} alt="step4" />
            </div>
            <div className="stepheading">
              STEP 04
            </div>
            <div className="steptext">
            The institution sends its models of university or school degrees
            </div>
          </div>
          
   
        </div>
        <div className="stepscontainer2">
          <div className="step">
            <div className="stepimg">
              <img src={step7} alt="step7" />
            </div>
            <div className="stepheading">
              STEP 07
            </div>
            <div className="steptext">
            We enable the form so that the institution can complete it individually and issue the certificates
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <img src={step6} alt="step6" />
            </div>
            <div className="stepheading">
              STEP 06
            </div>
            <div className="steptext">
            We make a new final validation query to the person in charge designated by the institution
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <img src={step5} alt="step5" />
            </div>
            <div className="stepheading">
              STEP 05
            </div>
            <div className="steptext">
            We integrate the models in the platform enabled only for that institution
            </div>
          </div>
          
   
        </div>
        

          
  

        
        
      </div>
      {/* Join  */}
      <div className="joinContainer">
        <div className="joinContainerHeading">
            Join Now!
        </div>
        <div className="joinMainDiv">
          <div className="join">
            <div className="joinheading">
            <div className="joiningfee"> <sup className="dollar">$</sup>1.00
              <p className="permonth">Per Month</p>
            </div>
            </div>
            <div className="joinheading2">
              <div className="subjoinheading2">
                LESS THAN 1000 <br/> CERTIFICATE
              </div>
              <button className="joinbtn">BUY NOW</button>
            </div>
          </div>
          <div className="join">
            <div className="joinheading">
            <div className="joiningfee"> <sup className="dollar">$</sup>1.00
              <p className="permonth">Per Month</p>
            </div>
            </div>
            <div className="joinheading2">
              <div className="subjoinheading2">
                  LESS THAN 1000 <br/> CERTIFICATE
                </div>
                <button className="joinbtn">BUY NOW</button>
              </div>
          </div>
          <div className="join">
            <div className="joinheading">
            <div className="joiningfee"> <sup className="dollar">$</sup>1.00
              <p className="permonth">Per Month</p>
            </div>
            </div>
            <div className="joinheading2">
              <div className="subjoinheading2">
                  LESS THAN 1000 <br/> CERTIFICATE
                </div>
                <button className="joinbtn">BUY NOW</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
