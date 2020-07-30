import React, { useEffect, useState } from 'react'
import Coin from '../Coin'
import coins from '../../data/mockup-data';
import { dumpCoin } from '../../utils/dumps';
import CoinService from '../../coin-service';
import './styles.scss'


const Content = () => {
    const [data, setData] = useState([]);
    const coinService = new CoinService();

    useEffect(() => {
        (async () => {
            try {
                coins.map(async (item) => {
                    const response = await coinService.getCoin(item.id);
                    setData(prevState => prevState.concat(dumpCoin(item, response)));
                })
            } catch (error) {
                console.error(error);
            }
        })();
    },[]);


    return (
        <div className='table'>
            <div className='content'>
                <span className='content_title'>Available Tokens</span>
                <div className='wrapper'>
                    {data.map((item) => {
                        return <Coin {...item} key={item.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Content
