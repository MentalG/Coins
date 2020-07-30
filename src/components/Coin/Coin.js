import React from 'react';
import image from '../../images/eth.png';
import './styles.scss';

const Coin = () => {
  return <div className='coin'>
      <div className='coin_top'>
      <div className='coin_top_left'>
          <span className='coin_name'>ETH</span>
          <span className='coin_price'>$327.05</span>
          <span className='coin_change'>+1.43% in last 24h</span>
      </div>
      <div className='coin_top_right'></div>
      </div>
      <div className='coin_button'>
          <picture>
              <img src={image} alt={'eth'}/>
          </picture>
      </div>
  </div>;
};

export default Coin;
