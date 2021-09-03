import React from 'react';
import '../App.css';
import './Ryan.css';
import './HeroSection.css';
import Grad from './images/grad.jpeg';
import Bosh from './images/bosh.jpg';
import Braves from './images/meatbraves.jpeg';
import Process from './images/process.png';


function AboutMe() {
    return (
        <div className='mx-5 p-2 d-flex flex-column flex-wrap float'>

            <div className='d-flex flex-row align-items-center justify-content-center my-5 flex-wrap'>
                <div className='mx-5'>
                    <img src={Grad} alt="Me" />
                </div>

                <h2 className='mx-5'> 
                    <p><u>Ryan Harrison Vogel</u></p>
                    <b>Bats/Throws</b>: R/R<br />
                    <b>Height/Weight</b>: 6' 0"/195<br/>
                    <b>Born</b>: 8/23/1999 in Atlanta, GA<br />
                    <b>Draft</b>: TBD<br />
                    <b>College</b>: University of North Carolina at Chapel Hill<br />
                    <b>Major</b>: Statistics and Analytics<br/>
                    <b>Minors</b>: Computer Science & Philosophy, Politics, and Economics<br/>
                    <b>Debut</b>: TBD
                </h2>

            </div>

            <div className='grey-bg d-flex flex-column align-items-center justify-content-center my-5 flex-wrap'>
                <h2>
                    My Background and Qualifications
                </h2>
            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div className='w-50 mx-5 text-left'>
                    <h3>As a recent graduate of UNC-Chapel Hill, I am excited to apply my background in Statistics and Analytics and Computer Science
                        into the sports industry, and help my favorite baseball team, the Atlanta Braves, be successful.<br/><br/>
                        While in Chapel Hill, I worked with UNC's baseball team as a member of the student-driven baseball analytics team.
                        Our duties consisted of running Trackman for every scrimmage and game, managing highspeed video cameras of all batters and pitchers,
                        using tools to build advanced scouting reports on upcoming opponents, all while compiling an app that shared our data
                        in an organized manner (similar to this project). The app was used by coaches and players to improve on past performances and 
                        better understand their strengths and weaknesses. <br/><br/> The app also allowed players to assess their past performances by associating
                        each data point with a video of their swing or pitch, depending on the data, to assess their form.
                    </h3>
                </div>
                <div className='w-100 mx-5'>
                    <img src={Bosh} alt='Boshamer Stadium' />
                </div>
            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div className='w-50 mx-5'>
                    <img src={Braves} alt='Me at Braves game' />
                </div>
                <div className='w-100 mx-5 text-left'>
                    <h3>Today, I work as a Cyber and Strategic Risk Analyst at Deloitte. Working in the cybersecurity space has been incredible,
                        and allowed me expand my knowledge of technology/internet security and how it plays an impact in the day-to-day operations of major 
                        companies. While in school, I interned in analyst positions with both InterContinental Hotels Group (IHG)
                        and Mailchimp. In all of these experiences, I have broadened my skillsets and knowledge base, while combining
                        my Analytics and Computer Science skills into industries in which I had no previous knowledge. With the Braves, however, I am very familiar.
                        <br/><br/>
                        Being a lifelong Braves fan, I keep up with the day-to-day roster moves, game performances, and stats, in addition to following
                        the MLB in general. In my free time, I enjoy going to Braves games whenever possible (the picture shown here was taken on my birthday, August 23,
                        just a few weeks ago as the Braves took on the Yankees...a brutal loss) and everything the Battery has to offer. Although I
                        was never given the genes to play baseball myself, I stay active by playing basketball, tennis, and walking/running/biking on the 
                        Atlanta Beltline.
                    </h3>
                </div>
                
            </div>

            <div className='grey-bg d-flex flex-column align-items-center justify-content-center my-5 flex-wrap'>
                <h2>
                    About the App and My Processes
                </h2>
            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div className='w-75 mx-5 text-left'>
                    <h3>
                    When first starting to think about how to approach this project, I had to decide what exactly I wanted to portray. Due to
                    the large amount of data, and limited time, I decided to focus on what I refer to as 'The Core 3.' Morton, Fried, and Anderson 
                    have been the rotation's most consistent and successful arms this season, so it made sense to separate them from the rest 
                    of the pitching staff and focus on their stats in my analysis.<br/><br/>
                    Next, I had to figure out the purpose of what I was displaying. Since the data was given on a pitch-by-pitch level, it made
                    sense to present my deliverable as a pitch type analysis. This kind of deliverable is one that is comparable to an advanced
                    scouting report - diving deep into how a pitcher throws in different counts, how successful each of their pitches is in getting strikes, etc.<br/><br/>
                    </h3>
                </div>
                <div className='w-75 mx-5'>
                    <img src={Process} alt='Code Screenshot' />
                </div>
            </div>

            <div className='d-flex flex-row align items-center mx-5'>               
                <h3>In each of the pitchers' pages, I start with a clear display of the distribution of overall pitch types. When first learning about a pitcher, 
                    this type of understanding is helpful to know what a pitcher likes to throw.<br/><br/>
                    Next, I go into the distribution of pitches based on count and batter stance. Logically, this seemed like the next step 
                    after analyzing the overall pitch distribution. For advanced scouting purposes, this can be extremely beneficial, and for internal 
                    scouting purposes, a pitcher may want to try to balance their distribution to make their pitches less predictable.<br/><br/>
                    Finally, I show the Pitch Characteristics and Pitch Outcome tables. After looking at the general pitch distribution, then the pitch 
                    distribution by count, I take the analysis one level deeper by seeing HOW the pitcher makes the pitch and how EFFECTIVE 
                    the pitch is. Obviously the overall goal of a pitcher is to record strikes and outs, so I wanted to be sure to display how
                    effectively each pitch is in achieving this goal.<br/><br/>
                    I hope you enjoy the app and please reach out to me with any questions or comments on my analysis or app construction.
                </h3>
            </div>

            
            
    

        </div>


    );
}

export default AboutMe;
