import React from 'react'
import Coin from '../Coin'
import './styles.scss'

const Content = () => {
    return (
        <div className='table'>
            <div className='content'>
                <span className='content_title'>Available Tokens</span>
                <div className='wrapper'>
                    <Coin />
                    <Coin />
                    <Coin />
                    <Coin />
                    <Coin />
                    <Coin />
                    <Coin />
                    <Coin />
                    <Coin />
                </div>
            </div>
        </div>
    )
}

export default Content
