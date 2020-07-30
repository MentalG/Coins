import React from 'react';
import './styles.scss';

const Coin = (props) => {
  console.log(props);
  const { name, color, image, price, price_change_24 } = props;

  return (
    <div
      className='coin'
      style={{
        background: `linear-gradient(rgb(${color[0]}) 0%, rgb(${color[1]}) 100%`,
      }}
    >
      <div className='coin_top'>
        <div className='coin_top_left'>
          <span className='coin_name'>{name.toUpperCase()}</span>
          <span className='coin_price'>{price}</span>
          <span className='coin_change'>{price_change_24}% in last 24h</span>
        </div>
        <div className='coin_top_right'></div>
      </div>
      <div className='coin_button'>
        <picture>
          <img src={image} alt={name}/>
        </picture>
      </div>
    </div>
  );
};

export default Coin;
