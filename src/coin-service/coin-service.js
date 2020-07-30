export default class CoinService {
    _apiBase = 'https://api.coingecko.com/api/v3/coins/';

    getCoin = async (id) => {
        const res = await fetch(`${this._apiBase}${id}`)

        if (!res.ok) {
            console.log(res);
            throw new Error(`Server status is ${res.status}`)
        }

        return await res.json()
    }
}