import React from 'react';
import '../App.css';
import './Max.css';
import './HeroSection.css';
import Headshot from './images/maxHead.png';
import Right from './images/m-pitchd-R2.png';
import Left from './images/m-pitchd-L2.png';
import Pie from './images/max-pie1.png';
import Char from './images/m-char.png';
import Out from './images/m-out.png'

function MaxGraphs() {
    return (
        <div className='mx-5 p-2 d-flex flex-column flex-wrap float'>

            <div className='d-flex flex-row align-items-center justify-content-center my-5 flex-wrap'>
                <div >
                    <img className='mx-5' src={Headshot} alt="Max Headshot" />
                </div>

                <h2 className='mx-5'>
                    <p><u>Max Dorian Fried</u></p>
                    <b>Nickname</b>: Maximus<br/>
                    <b>Bats/Throws</b>: L/L<br />
                    <b>Height/Weight</b>: 6' 4"/190<br/>
                    <b>Born</b>: 1/18/1994 in Santa Monica, CA<br />
                    <b>Draft</b>: 2012, San Diego Padres, Round: 1, Overall Pick: 7<br />
                    <b>High School</b>: Harvard-Westlake, North Hollywood, CA<br />
                    <b>Debut</b>: 8/08/2017
                </h2>


            </div>

            <div className='grey-bg d-flex flex-column align-items-center justify-content-center my-5 flex-wrap'>
                <h2>
                    Max Fried Pitching Statistics
                </h2>
                <h3>
                    The following visualizations can be used to dive deeper into Max Fried's pitching habits
                    and better understand why, where, and how he pitches.
                </h3>
            </div>
            
            <div className='d-flex flex-row align-items-center my-5'>
                <div className='w-50 mx-5 text-left'>
                    <h3>This pie chart shows the distribution of Max Fried's
                        pitch types in the 2021 season thus far. Fried's capability to mix up
                        his pitch types has been helpful in his success this season.
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
                    <h3>As a left-handed pitcher, Fried uses his Curveball
                        more against left-handed batters than right-handed batters.<br/><br/>
                        An interesting takeaway is that as Fried gets behind in the count, he uses his Fastball
                        at an increasingly higher rate. He is able to rely on the Fastball in these cases 
                        because it has a high strike percentage (shown in the chart at the bottom 
                        of this page) and can help him get back into counts.
                    </h3>
                </div>
                
            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div >
                    <img className='w-125 mx-5' src={Right} alt="Pitch Distribution to RHB" />
                </div>
                <div className='w-25 mx-5 text-left'>
                    <h3>As most left-handed pitchers would, Fried uses his Slider against right-handed batters more often than against left-handed batters.
                        He especially likes throwing the Slider when he is ahead in the count.<br/><br/> Additionally,
                        Fried does not throw his Changeup to right-handed batters. Instead, he mixes in the Sinker more often.
                    </h3>
                </div>
                
            </div>


             <div className='justify-content-center align-items-center d-flex flex-row my-5'>
                <img className='w-75 mx-5' src={Char} alt="Pitch Characteristics"/>
                <h5 className='w-25 mx-5 text-left'>This table displays characteristics of Fried's pitch types.
                The darker the green, the more succesful the pitch is in that category.
                Max's Fastball is by far his most used pitch. With a swing percentage of over 50% (displayed below), he is able 
                to rely on it when he needs to.<br/><br/>Max's variation in average release height is also noteworthy. From an internal 
                scounting perspective, Max could use information like this to better disguise his release points to all have more similar heights.
                </h5>
            </div>

            <div className='justify-content-center align-items-center d-flex flex-row my-5'>
                <img className='w-50 mx-5' src={Out} alt="Pitch Outcomes"/>
                <h5 className='w-50 mx-5 text-left'>This chart highlights how successful each of Max's pitch types
                have been this season. The darker the green, the more succesful the pitch is in that category.<br/><br/>
                Fried's Fastball, Sinker, and Slider all have above 50% swing percentages, but below 50% strike percentages.
                These are the balls that batters have been able to put in play more often.</h5>
            </div>

        </div>

    );
}

export default MaxGraphs;
