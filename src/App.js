import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(0);
  const [dollar, setdollar] = useState(0);

  const selectCoin  = ((event) => setCoin(event.target.value));
  const myDollar = ((event) => setdollar(event.target.value));
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(coin);
  console.log(dollar);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectCoin}>
          {coins.map((coin) => 
            <option value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol}) : ${(coin.quotes.USD.price).toFixed(2)}
            </option>
          )}
        </select>)}
      <div>
      <hr/>

      <div>
        <input type="number" value={dollar} onChange={myDollar} placeholder="WRITE UR USD"></input>
      </div>
        <h2>Buy {dollar / coin}</h2>
      </div>
    </div>
  );
}

export default App;
