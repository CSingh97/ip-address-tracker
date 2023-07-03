import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Map from "../components/Map";

export default function Home() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState("");
  const [coordinates, setCoordinates] = useState([0, 0]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  const getIpData = async () => {
    try {
      let { data } = await axios.get(url, { params: { limit: 1 } });
      let {
        location: { lat, lng }
      } = data;
      setCoordinates([lat, lng]);
      setIpData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getIpData() }, [])

  return (
    <div>
      <div id="header">
        <Header
          inputValue={ipAddress}
          setIpAddress={setIpAddress}
          getIpData={getIpData}
          ipData={ipData}
        />
      </div>
      <div id="map">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
};
