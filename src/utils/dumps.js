export const dumpCoin = (item, response) => {
    return {
        id: item.id,
        name: item.name,
        color: item.color,
        image: item.image,
        price: response.market_data.current_price.usd.toFixed(2),
        price_change_24: response.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)
    }
}