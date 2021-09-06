import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Charlie from './images/charlie2.jpg';
import Max from './images/max.jpeg';
import Ian from './images/ian.jpeg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Click on each pitcher to check out their stats</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                         src={Charlie}
                         text="Atlanta's verteran ace has been carrying the Braves this season as he leads the pitching staff in wins."
                         label='CHARLIE MORTON'
                         path='/charlie'
                        />
                        <CardItem
                         src={Max}
                         text="One of the Braves' best batting pitchers has had another good season for the Braves, as he is looking to continue his stride in the final stretch of the season."
                         label='MAX FRIED'
                         path='/max'
                        />
                        <CardItem
                         src={Ian}
                         text="Braves fans have a lot to look forward to as Anderson has continued to show improvement in his first full rookie season."
                         label='IAN ANDERSON'
                         path='/ian'
                         />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
