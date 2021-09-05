import React from 'react';
import '../App.css';
import './Charlie.css';
import './HeroSection.css';
import Headshot from './images/charlieHead.png';
import Right from './images/ch-pitchdR2.png';
import Left from './images/ch-pitchdL2.png';
import Pie from './images/ch-pie1.png';
import Char from './images/ch-char.png';
import Out from './images/ch-out.png'

function CharlieGraphs() {
    return (
        <div className='mx-5 p-2 d-flex flex-column flex-wrap float'>

            <div className='d-flex flex-row align-items-center justify-content-center my-5 flex-wrap'>
                <div >
                    <img className='mx-5' src={Headshot} alt="Charlie Headshot" />
                </div>

                <h2 className='mx-5'>
                    <p><u>Charles A. Morton</u></p>
                    <b>Nickname</b>: Ground Chuck<br />
                    <b>Bats/Throws</b>: R/R<br />
                    <b>Height/Weight</b>: 6' 5"/215<br/>
                    <b>Born</b>: 11/12/1983 in Flemington, NJ<br />
                    <b>Draft</b>: 2002, Atlanta Braves, Round: 3, Overall Pick: 95<br />
                    <b>High School</b>: Joel Barlow, Redding, CT<br />
                    <b>Debut</b>: 6/14/2008
                </h2>

            </div>

            <div className='grey-bg d-flex flex-column align-items-center justify-content-center my-5 flex-wrap'>
                <h2>
                    Charlie Morton Pitching Statistics
                </h2>
                <h3>
                    The following visualizations can be used to dive deeper into Charlie Morton's pitching habits
                    and better understand why, where, and how he pitches.
                </h3>
            </div>
            
            <div className='d-flex flex-row align-items-center my-5'>
                <div className='w-50 mx-5 text-left'>
                    <h3>This pie chart shows Morton's allocation of pitch types thus far in 2021.
                        As many might know, Charlie relies heavily on his dominant Curveball. It's no
                        surprise that his Curveball and Fastball are his most used pitches.
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
                <div className='mx-5 w-25 text-left'>
                    <h3>As Morton gets into more favorable counts, he uses his
                        Curveball. Mixing up the Curveball with his other pitches early in counts helps
                        him throw off batters in predicting when the Curveball will come. <br/><br/>Another
                        takeaway from this graph is the lack of Curveballs as Morton falls behind in the count. When
                        his Curveball is not able to get the job done, he starts to rely more on the Sinker and Fastball.
                    </h3>
                </div>
                
            </div>

            <div className='d-flex flex-row align-items-center my-5'>
                <div >
                    <img className='w-125 mx-5' src={Right} alt="Pitch Distribution to RHB" />
                </div>
                <div className='w-25 mx-5 text-left'>
                    <h3>When it comes to right-handed batters, Charlie uses his 
                        Curveball more willingly. The vertical and horizontal break he is able to apply on
                        his Curveball (seen in table below) has been Charlie's best weapon. <br/><br/> Similarly to with left-handed
                        batters, Charlie rellies on the Fastball when falling behind in the count.
                    </h3>
                </div>
                
            </div>


             <div className='justify-content-center align-items-center d-flex flex-row my-5'>
                <img className='w-75 mx-5' src={Char} alt="Pitch Characteristics"/>
                <h5 className='w-25 mx-5 text-left'>This chart provides overall statistics on
                Charlie's pitch types. The darker the green, the more succesful the pitch is in that category.
                <br/><br/>His 5-pitch arsenal gives him great range when planning how
                to navigate a lineup. <br/><br/> With his Curveball averaging 3028 RPMs and -10 inches
                in vertical break, it is his most lethal pitch. The break he is able to achieve 
                on most of his pitches is a testament to his years in the big leagues.</h5>
            </div>

            <div className='justify-content-center align-items-center d-flex flex-row my-5'>
                <img className='w-50 mx-5' src={Out} alt="Pitch Outcomes"/>
                <h5 className='w-50 mx-5 text-left'>This chart shows the effectiveness of each
                of Charlie's pitch types. The green highlights make it clear that his Curveball, 
                Fastball, and Cutter have been his most successful pitches with regard to getting strikes.</h5>
            </div>

    

        </div>


    );
}

export default CharlieGraphs;
