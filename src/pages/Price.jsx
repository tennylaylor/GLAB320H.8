import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Price(props) {
  const apiKey = "54076BE6-3857-4F74-BE9E-165AA82F186E";

  const params = useParams();
  const symbol = params.symbol;

  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const [coin, setCoin] = useState("null");
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
}
