import React from "react";
import "./Header.scss"
import DataCard from "./DataCard";
import arrowIcon from "../assets/images/icon-arrow.svg";

export default function Header({ ipAddress, setIpAddress, getIpData, ipData }) {
  return (
    <>
      <div id="bg-img" />
      <div id="header">
        <p>IP Address Tracker</p>
        <div id="searchbar-container">
          <div id="searchbar">
            <input
              type="text"
              value={ipAddress}
              placeholder="Search for any IP or domain"
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button onClick={() => getIpData()}>
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
        <div id="data-card">
          <DataCard ipData={ipData} />
        </div>
      </div>
    </>
  );
};
