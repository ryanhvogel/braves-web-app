import React from 'react';
import '../App.css';
import './Ian.css';
import './HeroSection.css';
import Headshot from './images/ianHead.png';
import Right from './images/i-pitchd-R2.png';
import Left from './images/i-pitchd-L1.png';
import Pie from './images/i-pie2.png';
import Char from './images/i-char.png';
import Out from './images/i-out.png'

function IanGraphs() {
    return (

        <div className='mx-5 p-2 d-flex flex-column flex-wrap float'>


            <div className='d-flex flex-row align-items-center justify-content-center my-5 flex-wrap'>

                <div >
                    <img className='mx-5' src={Headshot} alt="Ian Headshot" />
                </div>

                <h2 className='mx-5'>
                    <p><u>Ian Theodore Anderson</u></p>
                    <b>Bats/Throws</b>: R/R<br />
                    <b>Height/Weight</b>: 6' 3"/170<br />
                    <b>Born</b>: 5/02/1998 in Rexford, NY<br />
                    <b>Draft</b>: 2016, Atlanta Braves, Round: 1, Overall Pick: 3<br />
                    <b>High School</b>: Shenendehowa, Clifton Park, NY<br />
                    <b>Debut</b>: 8/26/2020
                </h2>

            </div>

            <div className='grey-bg d-flex flex-column align-items-center justify-content-center my-5 flex-wrap'>
                <h2>
                    Ian Anderson Pitching Statistics
                </h2>
                <h3>
                    The following visualizations can be used to dive deeper into Ian Anderson's pitching habits
                    and better understand why, where, and how he pitches.
                </h3>
            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div className='w-50 mx-5 text-left'>
                    <h3>This pie chart shows the distribution of Ian Anderson's
                        pitch types in the 2021 season thus far. The chart shows Ian is a
                        3-pitch pitcher, with a dominant Changeup.
                        <br /><br />**Note: Only 4 of Ian's pitches this season have been classified as Sinkers. For
                        this reason, Sinkers have been excluded from the tables at the bottom of this page
                        in an effort to avoid skewing comparisons to the other pitch types.**
                    </h3>
                </div>
                <div className='w-100 mx-5'>
                    <img src={Pie} alt='Pie chart' />
                </div>
            </div>


            <div className='d-flex flex-row align-items-center my-5'>
                <div >
                    <img className='w-125 mx-5' src={Left} alt="Pitch Distribution to LHB" />
                </div>
                <div className='w-25 mx-5 text-left'>
                    <h3>Anderson's main weapon is his Changeup. He uses it regularly
                        against left-handed batters, especially later in counts.<br/><br/>
                        His use of the Curveball declines after the first few pitches in the at bat. Since his Fastball 
                        and Changeup has significant vertical break (shown in chart below), he can use them willingly after starting an at bat 
                        with successful Curveballs.
                    </h3>
                </div>

            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div >
                    <img className='w-125 mx-5' src={Right} alt="Pitch Distribution to RHB" />
                </div>
                <div className='w-25 mx-5 text-left'>
                    <h3>There are not significant differences between Ian's pitch distribution when facing right-handed 
                        batters and left-handed batters. He does, however, use his Changeup more frequently, and his Curveball slightly 
                        less frequently.
                    </h3>
                </div>

            </div>


            <div className='justify-content-center align-items-center d-flex flex-row my-5'>
                <img className='w-75 mx-5' src={Char} alt="Pitch Characteristics" />
                <h5 className='w-25 mx-5 text-left'>This chart provides interesting insights into how
                Ian is able to make his pitches. Firstly, the horizontal and veritcal break he is able to achieve with his Changeup
                is noticeable. As previously mentioned, Ian's Changeup is his main weapon.
                <br/><br/>
                Secondly, he struggles with getting spin on his Curveball. He has the lowest average spin
                rate out of the 3 pitchers discussed in this app, and his struggle to spin his Curveball likely 
                contributes to its low strike percentage (in the chart below).</h5>
            </div>

            <div className='justify-content-center align-items-center d-flex flex-row my-5'>
                <img className='w-50 mx-5' src={Out} alt="Pitch Outcomes" />
                <h5 className='w-50 mx-5 text-left'>This chart displays the outcomes of Anderson's pitch types.
                The darker the green, the more succesful the pitch is in that category.<br/><br/>
                His Changeup leads his pitch types in Swing % by 8 percentage points and has been averaging a 16% whiff rate.
                Effectively mixing up Fastballs and Changeups is something that every pitcher strives for, but a 
                young pitcher like Ian Anderson who is already doing it well, has a high ceiling in the big leagues.
                </h5>
            </div>

        </div>
    );
}

export default IanGraphs;
